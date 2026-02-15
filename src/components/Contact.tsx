import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "Jaweriashabbir517@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92-3129618690" },
  { icon: MapPin, label: "Location", value: "Mirpur AJK, Pakistan" },
];

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jaweria-shabbir-11a48b353/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/JaveriaisPink14",
    label: "GitHub",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [copied, setCopied] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const [state, handleSubmit] = useForm("xwvnoryr");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setShowSuccess(true);
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
    <section
      id="contact"
      className="py-20 bg-secondary/30 w-full overflow-hidden"
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="w-full gradient-border p-4 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                  <item.icon className="w-4 h-4 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-medium text-sm break-words">
                    {item.value}
                  </p>
                </div>

                {/* COPY BUTTON FOR ALL */}
                <button
                  onClick={() => copyToClipboard(item.value)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  {copied === item.value ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg gradient-border hover:scale-110 transition-transform"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full gradient-border p-6 space-y-4"
          >
            <input type="text" name="_gotcha" hidden />

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full gradient-bg text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;