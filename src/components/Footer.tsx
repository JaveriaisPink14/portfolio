const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="gradient-text font-medium">Javaria Shabbir</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
