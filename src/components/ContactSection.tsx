import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
// IMPORT EMAILJS
import emailjs from "@emailjs/browser";

const socialCards = [
  {
    icon: Mail,
    label: "Email",
    value: "msrajesh467@gmail.com",
    href: "mailto:msrajesh467@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mukeshkumar-ms",
    href: "https://www.linkedin.com/in/mukeshkumar-ms/",
    color: "#0077b5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MUKESHKUMARRAJESH",
    href: "https://github.com/MUKESHKUMARRAJESH",
    color: "#6e5494",
  },
];

const MagneticCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null); // Reference for EmailJS
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    // YOUR EMAILJS CREDENTIALS
    const SERVICE_ID = "service_fmevx0r";
    const TEMPLATE_ID = "template_63mcwnp";
    const PUBLIC_KEY = "fNZ3dzlWog8Obs2FZ";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
          });

          // Reset form after 3 seconds
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setIsSubmitting(false);
          console.error(error.text); // Log error to console so you can see it
          toast({
            title: "Error",
            description: "Something went wrong. Please email me directly.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {socialCards.map((card, index) => (
            <MagneticCard key={card.label}>
              <motion.a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : "_self"} 
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                    if (card.href.startsWith("mailto")) {
                        window.location.href = card.href;
                    }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass relative z-10 rounded-2xl p-8 flex flex-col items-center text-center hover-glow cursor-pointer block"
                style={{
                  boxShadow: `0 0 0px ${card.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${card.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0px ${card.color}`;
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${card.color}20` }}
                >
                  <card.icon className="w-8 h-8" style={{ color: card.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{card.label}</h3>
                <p className="text-muted-foreground break-all">{card.value}</p>
              </motion.a>
            </MagneticCard>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* CONNECTED FORM REF HERE */}
          <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <Input
                  type="text"
                  name="name" // ADDED NAME ATTRIBUTE
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-primary h-12"
                />
              </div>
              <div className="relative">
                <Input
                  type="email"
                  name="email" // ADDED NAME ATTRIBUTE
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border/50 focus:border-primary h-12"
                />
              </div>
            </div>
            <div className="mb-6">
              <Textarea
                name="message" // ADDED NAME ATTRIBUTE
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isSuccess}
              className={`w-full transition-all duration-300 ${
                isSuccess
                  ? "bg-green-500 hover:bg-green-500"
                  : "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;