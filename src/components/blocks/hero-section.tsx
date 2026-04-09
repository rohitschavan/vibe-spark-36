import React from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="hero-section relative">
          <div className="relative pt-24 md:pt-36 pb-16">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-vibe-blue/5 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-vibe-purple/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup preset="blur-slide">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border border-hero-muted/20 bg-hero/80 backdrop-blur px-4 py-1.5 text-sm text-hero-muted hover:bg-hero-muted/10 transition-colors"
                  >
                    <span className="gradient-text font-medium">Generative AI Solutions for Business</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </AnimatedGroup>

                <TextEffect
                  preset="blur"
                  className="mt-8 text-4xl font-bold tracking-tight text-hero-foreground md:text-6xl lg:text-7xl font-display"
                  delay={0.2}
                >
                  Building AI-First Products That Deliver Results
                </TextEffect>

                <TextEffect
                  per="word"
                  preset="fade"
                  className="mx-auto mt-6 max-w-2xl text-lg text-hero-muted"
                  delay={0.5}
                >
                  We primarily design and deploy generative AI solutions, supported by modern software engineering and scalable cloud infrastructure.
                </TextEffect>

                <AnimatedGroup
                  preset="blur-slide"
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0">
                    <a href="#contact">Get in Touch</a>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-hero-muted/30 bg-transparent text-hero-foreground hover:bg-hero-muted/10 hover:text-hero-foreground"
                  >
                    <a href="#services">Services Overview</a>
                  </Button>
                </AnimatedGroup>
              </div>

              <AnimatedGroup
                className="mt-16 sm:mt-20"
                variants={transitionVariants}
              >
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-hero-muted/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                    alt="Team working on software development"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero/60 to-transparent" />
                </div>
              </AnimatedGroup>
            </div>
          </div>

          <div className="py-12 border-t border-hero-muted/10">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center">
                <p className="text-sm text-hero-muted font-medium uppercase tracking-widest">Technologies We Master</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                {['ReactJS', 'Angular', 'NodeJS', 'React Native', '.NET', 'AWS', 'Azure', 'MongoDB'].map((tech) => (
                  <span key={tech} className="text-hero-muted/60 font-display font-medium text-lg hover:text-hero-foreground transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: 'Services', href: '#services' },
  { name: 'AI Solutions', href: '/ai-solutions' },
  { name: 'Cloud Solutions', href: '/cloud-ai-infrastructure' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={cn(
          'fixed z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-hero/80 backdrop-blur-lg border-b border-hero-muted/10 py-3'
            : 'py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-display font-bold text-xl text-hero-foreground">
              Vibe IT
            </span>
          </div>

          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
            className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden text-hero-foreground"
          >
            {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-hero-muted hover:text-hero-foreground transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="rounded-full bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {menuState && (
            <div className="absolute inset-x-0 top-full bg-hero/95 backdrop-blur-lg border-b border-hero-muted/10 p-6 lg:hidden">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="text-hero-muted hover:text-hero-foreground transition-colors font-medium py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="rounded-full mt-2 bg-gradient-to-r from-vibe-blue to-vibe-purple hover:opacity-90 text-primary-foreground border-0">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-8 w-8" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
      <path d="M8 12L16 22L24 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="hsl(217, 91%, 50%)" />
          <stop offset="1" stopColor="hsl(262, 83%, 58%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
