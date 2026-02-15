import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "Jaweriashabbir517@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92-3129618690" },
  { icon: MapPin, label: "Location", value: "Mirpur AJK, Pakistan" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/jaweria-shabbir-11a48b353/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/JaveriaisPink14", label: "GitHub" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // 👇 Your Formspree ID
  const [state, handleSubmit] = useForm("xwvnoryr");

  // 👇 Form reference to reset
  const formRef = useRef<HTMLFormElement>(null);

  // 👇 Reset form & show professional success message
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setShowSuccess(true);

      // Hide message after 3 seconds
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="gradient-border p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm truncate">{item.value}</p>
                </div>

                {item.label !== "Location" && (
                  <button
                    onClick={() => copyToClipboard(item.value)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    {copied === item.value ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef} // 👈 Added ref here
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="gradient-border p-6 space-y-4 relative"
          >

            {/* Honeypot spam protection */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border"
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border"
                placeholder="Tell me about your project..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {state.submitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
            </button>

            {/* ✅ Professional Success Notification */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg border border-green-700 font-medium flex items-center gap-2 z-50"
              >
                <Check className="w-5 h-5" /> Your message has been sent successfully!
              </motion.div>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;