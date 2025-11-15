import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, BookOpen, Code, Brain, GraduationCap, ExternalLink, Menu, X, Phone, Award, Users, Globe, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'research', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    technical: ['Machine Learning', 'Data Structures', 'Operating Systems', 'Computer Networking', 'DBMS', 'Data Mining', 'Cyber Forensics', 'OOP', 'Front-End Development'],
    soft: ['Communication', 'Leadership', 'Management', 'Problem Solving']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
              Ashish Kumar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'research', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item ? 'text-purple-400 font-semibold scale-110' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-sm animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'research', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-purple-800/30 rounded transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl animate-float">
              AK
            </div>
            <div className="absolute inset-0 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Ashish Kumar
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-200 mb-2 font-semibold animate-fade-in">
            Computer Science Student & AI Researcher
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            University of Delhi | 7th Semester | CGPA: 6.65
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="https://www.linkedin.com/in/ashish-kumar-83914731a/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all transform hover:scale-125">
              <Linkedin size={32} />
            </a>
            <a href="mailto:ashish.kumardec24@gmail.com" className="hover:text-purple-400 transition-all transform hover:scale-125">
              <Mail size={32} />
            </a>
            <a href="tel:+919693839030" className="hover:text-purple-400 transition-all transform hover:scale-125">
              <Phone size={32} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('research')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              View Research
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 border border-white/20"
            >
              Get In Touch
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:scale-105">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate computer science student in my 7th semester at the University of Delhi, 
                specializing in Artificial Intelligence and Deep Learning. My current focus is on understanding 
                and advancing Convolutional Neural Networks (CNNs) and their applications in computer vision.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:scale-105">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm constantly exploring the intersection of theory and practical implementation, working on 
                research that can contribute to the growing field of AI. With a strong foundation in data structures, 
                algorithms, and full-stack development, I aim to create innovative solutions with real-world impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/30 text-center transform hover:scale-105 transition-all">
              <Globe size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <p className="text-gray-300">English & Hindi</p>
              <p className="text-sm text-gray-400 mt-1">(Full Professional Proficiency)</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-500/30 text-center transform hover:scale-105 transition-all">
              <Users size={40} className="mx-auto mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-2">Volunteering</h3>
              <p className="text-gray-300">Management Team</p>
              <p className="text-sm text-gray-400 mt-1">GENESIS'23</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-500/30 text-center transform hover:scale-105 transition-all">
              <Award size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Focus Areas</h3>
              <p className="text-gray-300">AI, ML & Research</p>
              <p className="text-sm text-gray-400 mt-1">Deep Learning Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 bg-black/20 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Research & Projects
          </h2>
          
          <div className="space-y-6">
            {/* Current Research */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/30 transform hover:scale-102 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg animate-pulse">
                  <Brain size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">
                      Review Paper on Convolutional Neural Networks
                    </h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 animate-pulse">
                      In Progress
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Comprehensive review of CNN architectures, their evolution, applications, and recent 
                    advancements in the field. Analyzing various architectures from LeNet to modern 
                    transformer-based approaches, exploring their strengths, limitations, and use cases 
                    in computer vision tasks including image classification, object detection, and segmentation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">Deep Learning</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">CNNs</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">Computer Vision</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">Research</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">TensorFlow</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">PyTorch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:scale-102">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 p-3 rounded-lg">
                  <Code size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Academic & Personal Projects</h3>
                  <p className="text-gray-300 mb-4">
                    Diverse portfolio of projects spanning machine learning implementations, data structure 
                    algorithms, database systems, and full-stack web applications. Focus on bridging theoretical 
                    concepts with practical, real-world applications through hands-on development and experimentation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">Python</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">C++</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">JavaScript</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Programming Languages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Code className="mr-3 text-purple-400" size={24} />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, idx) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all cursor-pointer transform hover:scale-110" style={{ animationDelay: `${idx * 0.1}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="mr-3 text-pink-400" size={24} />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, idx) => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/30 transition-all cursor-pointer transform hover:scale-110" style={{ animationDelay: `${idx * 0.1}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-500/30">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-3 text-blue-400" size={24} />
              Soft Skills & Leadership
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, idx) => (
                <span key={skill} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer transform hover:scale-110" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-6">
            {/* University of Delhi */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-500/30 transform hover:scale-102 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Arts, Computer Science</h3>
                  <p className="text-purple-300 font-semibold mb-2">University of Delhi</p>
                  <p className="text-gray-300 mb-2">2022 - 2026 (Expected)</p>
                  <div className="flex items-center space-x-2">
                    <span className="px-4 py-1 bg-purple-500/30 rounded-full text-sm font-semibold">CGPA: 6.65</span>
                    <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Currently Enrolled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* K.L.S College */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all transform hover:scale-102">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 p-3 rounded-lg">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Senior Secondary School</h3>
                  <p className="text-pink-300 font-semibold mb-2">K.L.S College, Magadh University</p>
                  <p className="text-gray-300 mb-2">2019 - 2021</p>
                  <span className="px-4 py-1 bg-pink-500/30 rounded-full text-sm font-semibold">Grade: 75%</span>
                </div>
              </div>
            </div>

            {/* The Diksha School */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all transform hover:scale-102">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <BookOpen size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Secondary School</h3>
                  <p className="text-blue-300 font-semibold mb-2">The Diksha School</p>
                  <p className="text-gray-300 mb-2">2018 - 2019</p>
                  <span className="px-4 py-1 bg-blue-500/30 rounded-full text-sm font-semibold">Grade: 87.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing research opportunities, collaborations, or connecting with fellow enthusiasts in AI and technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:ashish.kumardec24@gmail.com" className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:scale-105">
              <Mail size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400 break-all">ashish.kumardec24@gmail.com</p>
            </a>

            <a href="tel:+919693839030" className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-pink-500/30 transition-all transform hover:scale-105">
              <Phone size={40} className="mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-400">+91 9693839030</p>
            </a>

            <a href="https://www.linkedin.com/in/ashish-kumar-83914731a/" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 hover:border-blue-500/30 transition-all transform hover:scale-105">
              <Linkedin size={40} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect with me</p>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:ashish.kumardec24@gmail.com"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ashish-kumar-83914731a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/20 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p className="mb-2">&copy; 2025 Ashish Kumar. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}