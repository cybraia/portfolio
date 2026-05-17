/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  ChevronRight,
  Sparkles,
  ArrowDownRight,
  Cpu,
  Command,
  Monitor,
  Mic2,
  Heart,
  Twitter,
  Instagram
} from 'lucide-react';

const RESUME = {
  name: "Krishna N Mehta",
  firstName: "Krishna",
  lastName: "Mehta",
  intro: "Full-stack Software Engineer at Visa & GDG Cloud Bengaluru Organizer.",
  longIntro: "I bridge the gap between complex backend architectures and delightful user experiences. At Visa, I build scalable systems; in the community, I foster growth through GDG Cloud Bengaluru. My heart lies in Developer Relations and Technical Advocacy.",
  email: "knmehta001@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/krishna-n-mehta/",
    github: "https://github.com/cybraia",
    twitter: "https://x.com/KrishnaMorphism",
    instagram: "https://www.instagram.com/unscripted.tech/"
  },
  experience: [
    {
      company: "Visa Inc",
      role: "Software Engineer",
      date: "2024 — Present",
      desc: "Leading platform enhancement and automated workflows for Navigator & Vantage 2.0. Engineering intuitive interfaces for complex job scheduling modules.",
      color: "bg-[#0057B7]"
    },
    {
      company: "Tesco Tech",
      role: "SDE Intern",
      date: "2024",
      desc: "Developed automated logging systems in Golang and real-time monitoring via Grafana.",
      color: "bg-[#00539F]"
    }
  ],
  community: [
    {
      org: "GDG Cloud Bengaluru",
      role: "Co-organiser",
      date: "2025 — Present",
      desc: "Building India's most vibrant cloud community. Organizing large-scale developer gatherings and advocacy programs."
    },
    {
      org: "Apple Developers Group",
      role: "Head of Web Dev",
      date: "2021 — 2023",
      desc: "Mentoring developers and building the web infrastructure for the student community."
    }
  ],
  skills: ["Go", "Python", "TypeScript", "React", "Angular", "Docker", "FastAPI", "PostgreSQL", "DevRel"],
  projects: [
    {
      title: "Debrief",
      tag: "VOICE",
      desc: "AI productivity assistant using ElevenLabs and Cursor to enable natural conversational workflows and intelligent task summarization."
    },
    {
      title: "LLM WatchTower",
      tag: "UPDATES",
      desc: "A web app that aggregates and tracks the latest updates, releases, and news from frontier AI models like OpenAI, Google Gemini, and Anthropic Claude using Anakin AI APIs"
    },
     {
      title: "Bal Asha",
      tag: "NGO / IMPACT",
      desc: "Developed an adoption dashboard for orphaned kids at an NGO with features for tracking adoptions, managing their data and relationships, and visualizing impact metrics"
    }
  ]
};

const HorizontalScroll = ({ text }: { text: string }) => (
  <div className="overflow-hidden whitespace-nowrap py-10 border-y border-black/5 select-none">
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      <span className="text-[6vw] font-display font-black uppercase tracking-tighter opacity-5 inline-block mr-20">{text}</span>
      <span className="text-[6vw] font-display font-black uppercase tracking-tighter opacity-5 inline-block mr-20">{text}</span>
    </motion.div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [4, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <div className="bg-[#FBF9F4] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      
      {/* Dynamic Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex flex-col">
          <span className="text-lg font-display font-black tracking-tighter leading-none">KNM</span>
          <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Bengaluru, IN</span>
        </div>
        <div className="flex gap-6">
          <a href="#work" className="text-[9px] font-black uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">Work</a>
          <a href="#about" className="text-[9px] font-black uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">About</a>
          <a href="#contact" className="text-[9px] font-black uppercase tracking-widest bg-white text-black px-4 py-1.5 rounded-full shadow-lg">Chat</a>
        </div>
      </nav>

      <main className="relative z-10 space-y-12 md:space-y-20">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center section-container relative pt-20">
          <motion.div 
            style={{ rotateX, scale }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end"
          >
            <div className="lg:col-span-8">
              <div className="overflow-hidden mb-4">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Based in India — Available Worldwide</span>
                </motion.div>
              </div>
              <h1 className="big-text text-[clamp(4rem,10vw,10rem)] z-20 relative">
                <motion.span 
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="block"
                >
                  {RESUME.firstName}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="block text-right -mt-2 lg:-mt-6"
                >
                  {RESUME.lastName}
                </motion.span>
              </h1>
            </div>

            {/* Main Photo */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="lg:col-span-4 relative group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-xl relative">
                <img 
                  src="/krishna.png" 
                  alt={RESUME.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-white shadow-xl rounded-full w-32 h-32 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 z-30">
                 <ArrowDownRight className="w-10 h-10" />
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
             <div className="text-lg md:text-xl font-serif italic text-gray-800 leading-tight">
               "{RESUME.longIntro}"
             </div>
             <div className="flex flex-col justify-end items-start md:items-end gap-5">
                <div className="flex gap-3">
                   <a href={RESUME.socials.github} target="_blank" className="p-3.5 bg-black text-white rounded-full hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                   </a>
                   <a href={RESUME.socials.linkedin} target="_blank" className="p-3.5 bg-black text-white rounded-full hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                   </a>
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Scroll to Explore</div>
             </div>
          </div>
        </section>

        {/* MARQUEE */}
        <HorizontalScroll text="Developer Relations • Cloud Advocacy • Full Stack Engineering • " />

        {/* EXPERIENCE / NODES */}
        <section id="work" className="section-container !py-12 md:!py-20 lg:!py-32">
           <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 lg:mb-16 gap-8">
              <h2 className="big-text text-6xl md:text-8xl">WORK</h2>
              <p className="max-w-xs text-[9px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                A selection of professional roles and technical milestones.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {RESUME.experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-8 md:p-12 lg:p-14 bg-white border border-black/5 rounded-[3rem] card-hover group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0057B7] mb-2">{exp.date}</span>
                      <h3 className="text-3xl lg:text-4xl font-display font-black tracking-tighter uppercase leading-none">{exp.company}</h3>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${exp.color}`} />
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{exp.role}</div>
                  <p className="text-base text-gray-600 font-medium leading-relaxed mb-6 opacity-70 group-hover:opacity-100 transition-opacity italic">
                    {exp.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                    <span>Details</span>
                    <ChevronRight className="w-2.5 h-2.5 text-gray-300" />
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* COMMUNITY SPOTLIGHT */}
        <section id="about" className="bg-black text-white py-24 md:py-32 overflow-hidden relative">
           {/* Abstract Circle */}
           <motion.div 
             animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute -top-40 -right-40 w-[400px] h-[400px] border border-white/5 rounded-full"
           />

           <div className="section-container relative z-10 !py-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 block">Community & Leadership</span>
                    <h2 className="big-text text-5xl md:text-7xl lg:text-8xl mb-8">GDG CLOUD <br/> <span className="text-lime-400 font-serif font-black italic">BENGALURU</span></h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-serif text-white/70 leading-tight mb-10 italic">
                       "As a Co-organiser, I focus on the 'human' side of cloud technology. I facilitate spaces where 600+ developers share, build, and grow together."
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="flex flex-col gap-3">
                          <Mic2 className="w-6 h-6 text-lime-400" />
                          <h4 className="text-base font-black tracking-tighter">Public Speaking</h4>
                          <p className="text-[9px] font-medium text-white/40 uppercase tracking-widest">Advocating for cloud-native workflows and developer productivity.</p>
                       </div>
                       <div className="flex flex-col gap-3">
                          <Heart className="w-6 h-6 text-lime-400" />
                          <h4 className="text-base font-black tracking-tighter">DevRel</h4>
                          <p className="text-[9px] font-medium text-white/40 uppercase tracking-widest">Fostering ecosystems where feedback loops drive technical excellence.</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative p-6 lg:p-10">
                    <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
                       <img 
                          src="/gdg.jpeg" 
                          alt="" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                          referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                       <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-[2px]">
                          <h3 className="text-7xl lg:text-8xl font-display font-black tracking-tighter text-white">600+</h3>
                          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-lime-400">Impacted</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PROJECTS */}
        <section className="section-container !py-12 md:!py-20 lg:!py-32">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Curated Artifacts</span>
                 <h2 className="big-text text-6xl md:text-8xl">PROJECTS</h2>
              </div>
              <p className="max-w-xs text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
                 Experiments in LLMs, UI scaling, and social impact.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {RESUME.projects.map((proj, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-8 md:p-10 bg-white border border-black/5 rounded-[2.5rem] card-hover flex flex-col justify-between h-80 lg:h-96 group"
                >
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-black tracking-widest text-[#B5A18C] bg-gray-50 px-3 py-1.5 rounded-full uppercase">{proj.tag}</span>
                      <Command className="w-3 h-3 opacity-10 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-black tracking-tighter uppercase leading-tight group-hover:text-[#DE8971] transition-colors">{proj.title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-6 lg:gap-8">
                    <p className="text-sm lg:text-base text-gray-500 font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                      {proj.desc}
                    </p>
                    <div className="w-8 lg:w-10 h-8 lg:h-10 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 transition-all">
                       <ChevronRight className="w-4 lg:w-5 h-4 lg:h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* SKILLS / TAGS */}
        <section className="bg-[#EEEAE1] py-24 md:py-32">
           <div className="section-container text-center !py-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-10 block">Toolbox</span>
              <div className="flex flex-wrap justify-center gap-6 md:gap-x-10 md:gap-y-12">
                 {RESUME.skills.map((skill, i) => (
                   <motion.span 
                    key={i}
                    whileHover={{ scale: 1.15, rotate: -3 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter grayscale hover:grayscale-0 cursor-default opacity-20 hover:opacity-100 transition-all uppercase"
                   >
                     {skill}
                   </motion.span>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="section-container text-center !py-24 md:!py-32 lg:!py-48">
           <div className="mb-12 md:mb-16">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 md:mb-8 block">Let's Build Something</span>
              <a 
                href={`mailto:${RESUME.email}`} 
                className="big-text text-3xl md:text-5xl lg:text-6xl hover:text-[#0057B7] transition-colors break-all"
              >
                {RESUME.email}
              </a>
           </div>

           <div className="flex justify-center gap-6 mb-20">
              <a href={RESUME.socials.linkedin} target="_blank" className="p-4 bg-white border border-black/10 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={RESUME.socials.twitter} target="_blank" className="p-4 bg-white border border-black/10 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={RESUME.socials.instagram} target="_blank" className="p-4 bg-white border border-black/10 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={RESUME.socials.github} target="_blank" className="p-4 bg-white border border-black/10 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 border-t border-black/5 pt-12 md:pt-16">
              <div className="flex flex-col items-center gap-3">
                 <Monitor className="w-4 h-4 text-gray-300" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Frontend</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <Cpu className="w-4 h-4 text-gray-300" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Backend</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <Globe className="w-4 h-4 text-gray-300" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Community</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <Heart className="w-4 h-4 text-[#FF2E63]" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Passion</span>
              </div>
           </div>
        </footer>

      </main>

      {/* Remix Floating Elements */}
      <motion.div 
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-40 right-20 w-32 h-32 border border-black/5 rounded-full pointer-events-none z-0 hidden lg:block"
      />
      <motion.div 
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-40 left-20 w-48 h-48 border border-black/5 rounded-[4rem] rotate-45 pointer-events-none z-0 hidden lg:block"
      />

    </div>
  );
}

