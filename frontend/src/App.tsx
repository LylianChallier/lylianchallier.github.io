import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import {
  Github, Linkedin, Mail,
  ArrowUpRight, MapPin, Sparkles,
  ExternalLink, BookOpen, GraduationCap, Briefcase, Globe
} from 'lucide-react';

// Types
interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  accent?: boolean;
}

interface ProjectCardProps {
  title: string;
  desc: string;
  icon: string;
  stack: string[];
  link?: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description?: string;
}

// Composant Bento Card
const BentoItem = ({ children, className = "", colSpan = "col-span-1", rowSpan = "", accent = false }: BentoItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className={`
      ${colSpan} ${rowSpan}
      ${accent ? 'bento-card-accent rounded-3xl' : 'bento-card'}
      ${className}
    `}
  >
    <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
      {children}
    </div>
  </motion.div>
);

// Badge Tech avec shields.io
const TechBadge = ({ name, logo, color }: { name: string; logo: string; color: string }) => (
  <img
    src={`https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`}
    alt={name}
    className="h-7 hover:scale-105 transition-transform"
  />
);

// Carte Projet
const ProjectCard = ({ title, desc, icon, stack, link }: ProjectCardProps) => (
  <motion.a
    href={link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    className="group block bento-card p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-3xl">{icon}</span>
      <ExternalLink className="text-ink-light group-hover:text-royal-500 transition-colors" size={18} />
    </div>
    <h3 className="text-xl font-bold text-ink-dark mb-2 group-hover:text-royal-600 transition-colors">{title}</h3>
    <p className="text-ink-light text-sm mb-4 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {stack.map((s, i) => (
        <span key={i} className="text-xs text-royal-500 font-medium bg-royal-50 px-2 py-1 rounded-lg">#{s}</span>
      ))}
    </div>
  </motion.a>
);

// Timeline Item
const TimelineItem = ({ date, title, organization, description }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-8 last:pb-0"
  >
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-emerald-500 border-emerald-300" />
    <div className="absolute left-[7px] top-5 w-0.5 h-full bg-emerald-200 last:hidden" />
    <span className="text-xs font-semibold text-emerald-600">{date}</span>
    <h4 className="text-lg font-bold text-ink-dark mt-1">{title}</h4>
    <p className="text-ink-medium font-medium">{organization}</p>
    {description && <p className="text-ink-light text-sm mt-1">{description}</p>}
  </motion.div>
);

// Language Switch Component
const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-sm text-ink-medium hover:text-royal-500 transition-colors"
      aria-label="Switch language"
    >
      <Globe size={16} />
      <span className="font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
};

// Application principale
function App() {
  const { t } = useTranslation();

  const projects = [
    {
      icon: "🏰",
      titleKey: "projects.items.versailles.title",
      descKey: "projects.items.versailles.desc",
      stack: ["LangChain", "LangGraph", "Python"],
      link: "https://github.com/lylianchallier"
    },
    {
      icon: "⚗️",
      titleKey: "projects.items.turbulence.title",
      descKey: "projects.items.turbulence.desc",
      stack: ["SINDy", "KAN", "Python"],
      link: "https://github.com/lylianchallier"
    },
    {
      icon: "🌇",
      titleKey: "projects.items.vae.title",
      descKey: "projects.items.vae.desc",
      stack: ["PyTorch", "Streamlit", "Python"],
      link: "https://github.com/lylianchallier"
    },
    {
      icon: "💡",
      titleKey: "projects.items.electric.title",
      descKey: "projects.items.electric.desc",
      stack: ["Deep Learning", "Python", "EDF"],
      link: "https://github.com/lylianchallier"
    },
    {
      icon: "⚡️",
      titleKey: "projects.items.energy.title",
      descKey: "projects.items.energy.desc",
      stack: ["R", "Statistics", "EDF"],
      link: "https://github.com/lylianchallier"
    },
    {
      icon: "🎬",
      titleKey: "projects.items.movies.title",
      descKey: "projects.items.movies.desc",
      stack: ["Clustering", "Python", "ML"],
      link: "https://github.com/lylianchallier"
    }
  ];

  const techStack = [
    { name: "Python", logo: "python", color: "3776AB" },
    { name: "PyTorch", logo: "pytorch", color: "EE4C2C" },
    { name: "Scikit--learn", logo: "scikit-learn", color: "F7931E" },
    { name: "NumPy", logo: "numpy", color: "013243" },
    { name: "Pandas", logo: "pandas", color: "150458" },
    { name: "R", logo: "r", color: "276DC3" },
    { name: "React", logo: "react", color: "61DAFB" },
    { name: "FastAPI", logo: "fastapi", color: "005571" },
    { name: "Docker", logo: "docker", color: "257bd6" },
    { name: "Git", logo: "git", color: "F05032" },
    { name: "LaTeX", logo: "latex", color: "008080" },
    { name: "Streamlit", logo: "streamlit", color: "FF4B4B" },
  ];

  return (
    <div className="min-h-screen font-poppins relative">
      {/* Effets de fond papier */}
      <div className="paper-bg" />
      <div className="paper-fiber" />
      <div className="paper-vignette" />

      {/* Navbar flottante */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="bg-white/90 backdrop-blur-xl border-2 border-royal-600 rounded-full px-6 py-3 flex items-center gap-6 shadow-bento"
        >
          <a href="#" className="font-bold text-ink-dark hover:text-royal-500 transition-colors">{t('nav.home')}</a>
          <a href="#projets" className="text-sm text-ink-medium hover:text-royal-500 transition-colors">{t('nav.projects')}</a>
          <a href="#parcours" className="text-sm text-ink-medium hover:text-royal-500 transition-colors">{t('nav.journey')}</a>
          <div className="w-px h-4 bg-royal-200" />
          <LanguageSwitch />
          <a href="mailto:lylian.challier@universite-paris-saclay.fr" className="bg-royal-500 hover:bg-royal-600 text-white text-xs px-4 py-2 rounded-full transition-colors font-medium shadow-royal">
            {t('nav.contact')}
          </a>
        </motion.div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative z-10">

        {/* Header */}
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-dark mb-6 leading-tight"
          >
            {t('hero.greeting')}{' '}
            <span className="text-royal-500">{t('hero.name')}</span>
            {/* <span className="inline-block ml-2 animate-pulse">🦁</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink-medium text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            <Trans i18nKey="hero.description">
              MSc student at <span className="font-semibold text-royal-600">CentraleSupelec</span>, specialized in mathematics, AI, machine learning and deep learning, applying for a 6 month experience starting March 2026 as a step toward a future industrial PhD.
            </Trans>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-ink-light text-base md:text-lg max-w-3xl leading-relaxed mt-4"
          >
            <Trans i18nKey="hero.subdescription">
              This year I was selected for the <span className="font-medium text-ink-dark">Digital Tech Year</span> selective track, an innovation program, and awarded the <span className="font-medium text-ink-dark">MathTech Gap Year fellowship</span> (4 laureates, FMJH). This experience bridges real-world AI innovation with my PhD-oriented research goals.
            </Trans>
          </motion.p>
        </header>

        {/* Bento Grid Principal */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 auto-rows-[180px]">

          {/* Grande carte: A propos */}
          <BentoItem colSpan="md:col-span-2" rowSpan="md:row-span-2">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 bg-royal-500/10 rounded-2xl flex items-center justify-center mb-5">
                  <Sparkles className="text-royal-500" size={26} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-dark mb-3">{t('about.title')}</h2>
                <p className="text-ink-medium leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/lylianchallier" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-royal-50 text-royal-500 hover:bg-royal-100 transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/lylian-challier" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-royal-50 text-royal-500 hover:bg-royal-100 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:lylian.challier@universite-paris-saclay.fr" className="p-3 rounded-xl bg-royal-50 text-royal-500 hover:bg-royal-100 transition-colors">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </BentoItem>

          {/* Carte Localisation */}
          <BentoItem accent>
            <div className="flex flex-col justify-center items-center h-full text-center">
              <div className="animate-float">
                <MapPin className="text-white/90 mb-3" size={36} />
              </div>
              <h3 className="font-bold text-white text-xl">{t('location.city')}</h3>
              <p className="text-sm text-royal-200 mt-1">{t('location.institution')}</p>
            </div>
          </BentoItem>

          {/* Carte Contact */}
          <BentoItem colSpan="md:col-span-1" rowSpan="md:row-span-2">
            <h3 className="text-xs font-bold text-royal-500 uppercase tracking-wider mb-4">{t('contact.title')}</h3>
            <div className="flex flex-col gap-4 flex-1">
              <a href="mailto:lylian.challier@universite-paris-saclay.fr" className="flex items-center gap-3 text-ink-medium hover:text-royal-500 transition-colors group">
                <div className="p-2 bg-royal-50 rounded-lg group-hover:bg-royal-100 transition-colors">
                  <Mail size={18} className="text-royal-500" />
                </div>
                <span className="text-sm font-medium">{t('contact.email')}</span>
              </a>
              <a href="https://linkedin.com/in/lylian-challier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-medium hover:text-royal-500 transition-colors group">
                <div className="p-2 bg-royal-50 rounded-lg group-hover:bg-royal-100 transition-colors">
                  <Linkedin size={18} className="text-royal-500" />
                </div>
                <span className="text-sm font-medium">{t('contact.linkedin')}</span>
              </a>
              <a href="https://github.com/lylianchallier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-medium hover:text-royal-500 transition-colors group">
                <div className="p-2 bg-royal-50 rounded-lg group-hover:bg-royal-100 transition-colors">
                  <Github size={18} className="text-royal-500" />
                </div>
                <span className="text-sm font-medium">{t('contact.github')}</span>
              </a>
            </div>
          </BentoItem>

          {/* Carte Objectif */}
          <BentoItem className="bg-gradient-to-br from-white to-paper-warm">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <span className="text-3xl mb-2">🎯</span>
              <span className="text-sm text-ink-dark font-bold">{t('goal.title')}</span>
              <span className="text-xs text-ink-light mt-1">{t('goal.date')}</span>
            </div>
          </BentoItem>

        </section>

        {/* Section Stack Technique */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8"
          >
            <h2 className="text-2xl font-bold text-ink-dark mb-6">{t('tech.title')}</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <TechBadge key={i} {...tech} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section Projets */}
        <section id="projets" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 bg-royal-500/10 rounded-xl">
              <BookOpen className="text-royal-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-ink-dark">{t('projects.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                icon={project.icon}
                title={t(project.titleKey)}
                desc={t(project.descKey)}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        </section>

        {/* Section Timeline Parcours */}
        <section id="parcours" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 bg-royal-500/10 rounded-xl">
              <GraduationCap className="text-royal-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-ink-dark">{t('journey.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline Academique */}
            <div className="bento-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-emerald-500" size={22} />
                <h3 className="text-xl font-bold text-ink-dark">{t('journey.education')}</h3>
              </div>
              <div className="space-y-2">
                <TimelineItem
                  date="2024 - 2025"
                  title={t('journey.items.dty.title')}
                  organization={t('journey.items.dty.org')}
                  description={t('journey.items.dty.desc')}
                />
                <TimelineItem
                  date="2023 - 2024"
                  title={t('journey.items.m1.title')}
                  organization={t('journey.items.m1.org')}
                />
                <TimelineItem
                  date="2020 - 2023"
                  title={t('journey.items.licence.title')}
                  organization={t('journey.items.licence.org')}
                />
              </div>
            </div>

            {/* Timeline Professionnelle */}
            <div className="bento-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-emerald-500" size={22} />
                <h3 className="text-xl font-bold text-ink-dark">{t('journey.experience')}</h3>
              </div>
              <div className="space-y-2">
                <TimelineItem
                  date="2024"
                  title={t('journey.items.versailles.title')}
                  organization={t('journey.items.versailles.org')}
                  description={t('journey.items.versailles.desc')}
                />
                <TimelineItem
                  date="2024"
                  title={t('journey.items.lisn.title')}
                  organization={t('journey.items.lisn.org')}
                  description={t('journey.items.lisn.desc')}
                />
                <TimelineItem
                  date="2023"
                  title={t('journey.items.edf.title')}
                  organization={t('journey.items.edf.org')}
                  description={t('journey.items.edf.desc')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA Contact */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card-accent rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-royal-200 mb-6 max-w-xl mx-auto">
              {t('cta.description')}
            </p>
            <a
              href="mailto:lylian.challier@universite-paris-saclay.fr"
              className="inline-flex items-center gap-2 bg-white text-royal-600 font-semibold px-6 py-3 rounded-full hover:bg-royal-50 transition-colors"
            >
              {t('cta.button')}
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center border-t border-royal-100 bg-white/50">
        <p className="text-ink-light text-sm">
          {t('footer.copyright')}
        </p>
      </footer>

    </div>
  );
}

export default App;
