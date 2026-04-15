import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/vibeitsolutions',
  instaLink: 'https://instagram.com/vibeitsolutions',
  twitterLink: 'https://twitter.com/vibeitsolutions',
  githubLink: 'https://github.com/vibeitsolutions',
  linkedinLink: 'https://linkedin.com/company/vibeitsolutions',
  services: {
    customSoftware: '/ai-integrated-software',
    cloudSolutions: '/cloud-ai-infrastructure',
    aiSolutions: '/ai-solutions',
  },
  about: {
    team: '/ai-integrated-software',
    careers: '/contact',
  },
  help: {
    faqs: '/#ai-software-development-company',
    support: '/contact',
  },
  contact: {
    email: 'info@vibeitsolutions.com',
    phone: '+91 9823885440',
    addressPune:
      '4th Floor, Balaji Business Centre, Pashan Hwy Side Rd, Baner, Pune, Maharashtra 411045',
    addressRanchi: '405 Savera Enclave, Piska More, Ranchi, Jharkhand 834005',
  },
  company: {
    name: 'Vibe IT Solutions',
    description:
      'Transforming ideas into reality with cutting-edge software solutions. We help businesses build custom software, leverage cloud infrastructure, and integrate generative AI.',
  },
};

const socialLinks = [
  // { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  // { icon: Instagram, label: 'Instagram', href: data.instaLink },
  // { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  // { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
];

const serviceLinks = [
  { text: 'Custom Software Development', href: data.services.customSoftware },
  { text: 'Cloud Solutions', href: data.services.cloudSolutions },
  { text: 'AI Solutions', href: data.services.aiSolutions },
];

const aboutLinks = [
  { text: 'Our Expertise', href: data.about.team },
  { text: 'Careers', href: '/careers' },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
];

const legalLinks = [
  { text: 'Terms of Service', href: '/contact' },
  { text: 'Privacy Policy', href: '/contact' },
  { text: 'User Data Deletion', href: '/contact' },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.addressPune, isAddress: true },
  { icon: MapPin, text: data.contact.addressRanchi, isAddress: true },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Vibe IT Solutions logo"
                className="h-20 w-20 rounded-md object-cover"
              />
              <span className="text-xl font-bold text-foreground">
                {data.company.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {data.company.description}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Our Services
              </h3>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                About Us
              </h3>
              <ul className="mt-4 space-y-3">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Helpful Links
              </h3>
              <ul className="mt-4 space-y-3">
                {helpfulLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-3">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {isAddress ? (
                      <span className="text-sm text-muted-foreground">
                        {text}
                      </span>
                    ) : (
                      <a
                        href={
                          text.includes('@')
                            ? `mailto:${text}`
                            : `tel:${text.replace(/\s/g, '')}`
                        }
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {data.company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            {legalLinks.map(({ text, href }) => (
              <Link key={text} href={href} className="transition-colors hover:text-foreground">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
