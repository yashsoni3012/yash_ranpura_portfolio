import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Settings, Monitor, Calendar, MapPin, User, Briefcase, GraduationCap, FolderOpen, Languages, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'JavaScript', icon: Code, level: 90 },
    { name: 'React.js', icon: Code, level: 95 },
    { name: 'Node.js', icon: Settings, level: 85 },
    { name: 'Express.js', icon: Settings, level: 85 },
    { name: 'MongoDB', icon: Database, level: 80 },
    { name: 'Redux', icon: Code, level: 85 },
    { name: 'Tailwind CSS', icon: Monitor, level: 90 },
    { name: 'Git', icon: Code, level: 85 }
  ];

  const projects = [
    {
      title: 'House of Resha',
      description: 'Modern e-commerce UI with smooth animations and responsive design using React.js and Tailwind CSS.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive Design', 'Smooth Animations', 'Custom Components', 'Performance Optimized'],
      link: 'https://clothing-resha.vercel.app/' // Replace with your actual URL
    },
    {
      title: 'APX - Token',
      description: 'Crypto platform frontend with real-time token details and animated interactions.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      features: ['Real-time Data', 'Mobile-first Design', 'Scroll Animations', 'Interactive UI'],
      link: 'https://apx-project.vercel.app/' // Replace with your actual URL
    },
    {
    title: 'Travelplace',
    description:
      'Travel and tourism platform showcasing international, adventure, religious, domestic, and medical tours with packages and destinations.',
    tech: ['React.js', 'Bootstrap', 'JavaScript', 'MongoDB'],
    features: [
      'Tours & Packages',
      'Destinations Showcase',
      'User Authentication',
      'Fully Responsive UI',
    ],
    link: 'https://amazing-traveling.netlify.app/', // replace with real link
  },
  ];

  const experience = [
    {
      title: 'MERN Stack Developer',
      company: 'Nexgen Innovations pvt.ltd',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2025 - Present',
      responsibilities: [
        'Developed full-stack web applications using MERN stack',
        'Built dynamic and responsive UI components with React.js',
        'Designed RESTful APIs with Express.js and Node.js',
        'Implemented responsive design using CSS3, Bootstrap, and Tailwind CSS',
        'Participated in Agile development processes'
      ]
    }
  ];

  const education = [
    {
      degree: 'iMSC-IT',
      institution: 'GLS University Ahmedabad',
      period: 'Jun 2023 – Apr 2025',
      status: 'completed'
    },
    {
      degree: 'BSC-IT',
      institution: 'GLS University Ahmedabad',
      period: 'Jun 2020 – May 2023',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Yash Ranpura
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 text-white hover:text-purple-300 capitalize transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Yash Ranpura
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building dynamic web applications with MongoDB, Express.js, React.js, and Node.js. 
              Passionate about creating seamless user experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              <User className="inline mr-3" />
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  MERN Stack Developer with 1 year of experience in developing dynamic web applications. 
                  I specialize in building RESTful APIs, integrating NoSQL databases, and implementing 
                  secure authentication using JWT and OAuth.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently pursuing iMSC-IT at GLS University Ahmedabad, I'm passionate about 
                  full-stack development with expertise in React hooks, Redux, and asynchronous JavaScript.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <MapPin size={20} />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Calendar size={20} />
                    <span>1+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <skill.icon className="text-purple-400" size={20} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.about ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              <Briefcase className="inline mr-3" />
              Experience
            </h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                      <p className="text-xl text-white">{exp.company}</p>
                      <p className="text-gray-400 flex items-center mt-1">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-purple-300 font-medium bg-purple-900/30 px-4 py-2 rounded-full mt-4 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center text-white mb-12">
                <GraduationCap className="inline mr-3" />
                Education
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-purple-400">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        edu.status === 'Current' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-white font-medium">{edu.institution}</p>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        <FolderOpen className="inline mr-3" />
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col h-full" // Added flex and h-full
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p> {/* Added flex-grow */}
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-medium mb-2">Key Features:</h4>
              <div className="space-y-1">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button container with mt-auto to push it to the bottom */}
            <div className="mt-auto"> {/* Added mt-auto */}
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ExternalLink size={16} />
                <span>View Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href="mailto:yashranpura3@gmail.com"
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-medium mb-2">Email</h3>
                <p className="text-gray-400">yashranpura3@gmail.com</p>
              </a>

              <a
                href="tel:+919737126164"
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-medium mb-2">Phone</h3>
                <p className="text-gray-400">+91 9737126164</p>
              </a>

              <a
                href="https://linkedin.com/in/yashranpura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-medium mb-2">LinkedIn</h3>
                <p className="text-gray-400">Connect with me</p>
              </a>
            </div>

            {/* Languages */}
            {/* <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <Languages className="inline mr-3" />
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['English', 'Gujarati', 'Hindi'].map((language) => (
                  <span
                    key={language}
                    className="px-6 py-3 bg-purple-900/30 text-purple-300 rounded-full font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2025 Yash Ranpura. Built with React.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;