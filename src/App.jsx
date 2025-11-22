// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Settings, Monitor, Calendar, MapPin, User, Briefcase, GraduationCap, FolderOpen, Languages, Menu, X } from 'lucide-react';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState({});
  
//   // Typing animation states
//   const [animatedText, setAnimatedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   // Scroll to top on refresh
//   useEffect(() => {
//     // This will run once when the component mounts (on page load/refresh)
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'auto' // Instant scroll to top
//     });
//   }, []); // Empty dependency array means this runs only on mount

//   const titles = [
//     'MERN Stack Developer',
//     'Frontend Developer',
//     'Backend Developer',
//     'Full Stack Developer'
//   ];

//   // Typing animation effect
//   useEffect(() => {
//     const handleTyping = () => {
//       const current = loopNum % titles.length;
//       const fullText = titles[current];
      
//       setAnimatedText(isDeleting 
//         ? fullText.substring(0, animatedText.length - 1)
//         : fullText.substring(0, animatedText.length + 1)
//       );
      
//       setTypingSpeed(isDeleting ? 75 : 150);
      
//       if (!isDeleting && animatedText === fullText) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && animatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);  
//     return () => clearTimeout(timer);
//   }, [animatedText, isDeleting, loopNum, titles]);

//   // Intersection Observer for section visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));

//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const sections = document.querySelectorAll('section[id]');
//     sections.forEach((section) => observer.observe(section));

//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, []);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   const skills = [
//     { name: 'JavaScript', icon: Code, level: 90 },
//     { name: 'React.js', icon: Code, level: 95 },
//     { name: 'Node.js', icon: Settings, level: 85 },
//     { name: 'Express.js', icon: Settings, level: 85 },
//     { name: 'MongoDB', icon: Database, level: 80 },
//     { name: 'Redux', icon: Code, level: 85 },
//     { name: 'Tailwind CSS', icon: Monitor, level: 90 },
//     { name: 'Git', icon: Code, level: 85 }
//   ];

//   const projects = [
//     {
//       title: 'House of Resha',
//       description: 'Modern e-commerce UI with smooth animations and responsive design using React.js and Tailwind CSS.',
//       tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
//       features: ['Responsive Design', 'Smooth Animations', 'Custom Components', 'Performance Optimized'],
//       link: 'https://clothing-resha.vercel.app/'
//     },
//     {
//       title: 'APX - Token',
//       description: 'Crypto platform frontend with real-time token details and animated interactions.',
//       tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
//       features: ['Real-time Data', 'Mobile-first Design', 'Scroll Animations', 'Interactive UI'],
//       link: 'https://apx-project.vercel.app/'
//     },
//     {
//       title: 'Travelplace',
//       description: 'Travel and tourism platform showcasing international, adventure, religious, domestic, and medical tours with packages and destinations.',
//       tech: ['React.js', 'Bootstrap', 'JavaScript', 'MongoDB'],
//       features: [
//         'Tours & Packages',
//         'Destinations Showcase',
//         'User Authentication',
//         'Fully Responsive UI',
//       ],
//       link: 'https://amazing-traveling.netlify.app/',
//     },
//   ];

//   const experience = [
//     {
//       title: 'MERN Stack Developer',
//       company: 'Nexgen Innovations pvt.ltd',
//       location: 'Ahmedabad, Gujarat',
//       period: 'Jan 2025 - Present',
//       responsibilities: [
//         'Developed full-stack web applications using MERN stack',
//         'Built dynamic and responsive UI components with React.js',
//         'Designed RESTful APIs with Express.js and Node.js',
//         'Implemented responsive design using CSS3, Bootstrap, and Tailwind CSS',
//       ]
//     }
//   ];

//   const education = [
//     {
//       degree: 'iMSC-IT',
//       institution: 'GLS University Ahmedabad',
//       period: 'Jun 2023 – Apr 2025',
//       status: 'completed'
//     },
//     {
//       degree: 'BSC-IT',
//       institution: 'GLS University Ahmedabad',
//       period: 'Jun 2020 – May 2023',
//       status: 'completed'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="text-2xl font-bold text-white">
//               <span
//                 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold"
//                 style={{ fontFamily: "'Playfair Display'", fontWeight: "800" }}
//               >
//                 YR
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-8">
//               {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize transition-all duration-300 ${activeSection === section
//                     ? 'text-purple-400 border-b-2 border-purple-400'
//                     : 'text-white hover:text-purple-300'
//                     }`}
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden text-white p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 transition-all duration-300"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu with Animation */}
//         <div className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//           <div className="px-4 py-2 space-y-2">
//             {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${activeSection === section
//                   ? 'bg-purple-900/30 text-purple-400 font-medium'
//                   : 'text-white hover:text-purple-300 hover:bg-white/5'
//                   }`}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </button>
//             ))}

//             {/* Social Links in Mobile Menu */}
//             <div className="pt-4 pb-2 border-t border-white/10">
//               <div className="flex justify-center space-x-6">
//                 <a href="https://linkedin.com/in/yashranpura" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
//                   <Linkedin size={20} />
//                 </a>
//                 <a href="https://github.com/yashsoni3012" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
//                   <Github size={20} />
//                 </a>
//                 <a href="mailto:yashranpura3@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
//                   <Mail size={20} />
//                 </a>
//                 <a href="tel:+919737126164" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
//                   <Phone size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4">
//         <div className="text-center max-w-4xl mx-auto">
//           <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
//                 Yash Ranpura
//               </span>
//             </h1>
            
//             {/* Modified Animated Title */}
//             <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 min-h-[2.5rem] flex justify-center items-center">
//               <span className="mr-2">I'M a</span>
//               <span className="text-purple-400 font-mono">
//                 {animatedText}
//               </span>
//               <span className="inline-block w-1 h-8 bg-purple-400 ml-1 animate-pulse"></span>
//             </h2>
            
//             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Building dynamic web applications with MongoDB, Express.js, React.js, and Node.js.
//               Passionate about creating seamless user experiences with modern technologies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button
//                 onClick={() => scrollToSection('projects')}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//               >
//                 View My Work
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
//               >
//                 Get In Touch
//               </button>
//             </div>
//           </div>

//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <ChevronDown className="text-white" size={32} />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center text-white mb-16">
//               <User className="inline mr-3" />
//               About Me
//             </h2>

//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   MERN Stack Developer with 1 year of experience in developing dynamic web applications.
//                   I specialize in building RESTful APIs, integrating NoSQL databases, and implementing
//                   secure authentication using JWT and OAuth.
//                 </p>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Currently pursuing iMSC-IT at GLS University Ahmedabad, I'm passionate about
//                   full-stack development with expertise in React hooks, Redux, and asynchronous JavaScript.
//                 </p>
//                 <div className="flex space-x-4">
//                   <div className="flex items-center space-x-2 text-purple-400">
//                     <MapPin size={20} />
//                     <span>Ahmedabad, Gujarat</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-purple-400">
//                     <Calendar size={20} />
//                     <span>1+ Years Experience</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Skills Grid */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {skills.map((skill, index) => (
//                     <div
//                       key={skill.name}
//                       className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       <div className="flex items-center space-x-3 mb-2">
//                         <skill.icon className="text-purple-400" size={20} />
//                         <span className="text-white font-medium">{skill.name}</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div
//                           className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
//                           style={{ width: isVisible.about ? `${skill.level}%` : '0%' }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 px-4 bg-black/20">
//         <div className="max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center text-white mb-16">
//               <Briefcase className="inline mr-3" />
//               Experience
//             </h2>

//             <div className="space-y-8">
//               {experience.map((exp, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
//                 >
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
//                       <p className="text-xl text-white">{exp.company}</p>
//                       <p className="text-gray-400 flex items-center mt-1">
//                         <MapPin size={16} className="mr-1" />
//                         {exp.location}
//                       </p>
//                     </div>
//                     <span className="text-purple-300 font-medium bg-purple-900/30 px-4 py-2 rounded-full mt-4 md:mt-0">
//                       {exp.period}
//                     </span>
//                   </div>

//                   <div className="space-y-2">
//                     {exp.responsibilities.map((resp, idx) => (
//                       <div key={idx} className="flex items-start space-x-3">
//                         <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
//                         <p className="text-gray-300">{resp}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Education */}
//             <div className="mt-16">
//               <h3 className="text-3xl font-bold text-center text-white mb-12">
//                 <GraduationCap className="inline mr-3" />
//                 Education
//               </h3>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {education.map((edu, index) => (
//                   <div
//                     key={index}
//                     className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <h4 className="text-xl font-bold text-purple-400">{edu.degree}</h4>
//                       <span className={`px-3 py-1 rounded-full text-sm ${edu.status === 'Current' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
//                         }`}>
//                         {edu.status}
//                       </span>
//                     </div>
//                     <p className="text-white font-medium">{edu.institution}</p>
//                     <p className="text-gray-400">{edu.period}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-center text-white mb-16">
//               <FolderOpen className="inline mr-3" />
//               Projects
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {projects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
//                   style={{ animationDelay: `${index * 0.2}s` }}
//                 >
//                   <h3 className="text-2xl font-bold text-purple-400 mb-3">{project.title}</h3>
//                   <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>

//                   <div className="mb-4">
//                     <h4 className="text-white font-medium mb-2">Tech Stack:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h4 className="text-white font-medium mb-2">Key Features:</h4>
//                     <div className="space-y-1">
//                       {project.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
//                           <span className="text-gray-300 text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-auto">
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                     >
//                       <ExternalLink size={16} />
//                       <span>View Project</span>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 bg-black/20">
//         <div className="max-w-4xl mx-auto">
//           <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-white mb-8 text-center">
//               Get In Touch
//             </h2>
//             <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto text-center">
//               I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
//             </p>

//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <a
//                 href="mailto:yashranpura3@gmail.com"
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
//               >
//                 <Mail className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
//                 <h3 className="text-white font-medium mb-2">Email</h3>
//                 <p className="text-gray-400">yashranpura3@gmail.com</p>
//               </a>

//               <a
//                 href="tel:+919737126164"
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
//               >
//                 <Phone className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
//                 <h3 className="text-white font-medium mb-2">Phone</h3>
//                 <p className="text-gray-400">+91 9737126164</p>
//               </a>

//               <a
//                 href="https://linkedin.com/in/yashranpura"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
//               >
//                 <Linkedin className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
//                 <h3 className="text-white font-medium mb-2">LinkedIn</h3>
//                 <p className="text-gray-400">Connect with me</p>
//               </a>
//             </div>

//             {/* Message Form */}
//             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
//               <h3 className="text-2xl font-bold text-white mb-6 text-center">Send me a message</h3>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     id="subject"
//                     className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                     placeholder="What is this regarding?"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
//                   <textarea
//                     id="message"
//                     rows="5"
//                     className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                     placeholder="Type your message here..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <Mail size={20} />
//                   <span>Send Message</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-gray-400 border-t border-white/10">
//         <p>&copy; 2025 Yash Ranpura. Design & Code by Yash.</p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Settings, Monitor, Calendar, MapPin, User, Briefcase, GraduationCap, FolderOpen, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [animatedText, setAnimatedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const titles = [
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];
      
      setAnimatedText(isDeleting 
        ? fullText.substring(0, animatedText.length - 1)
        : fullText.substring(0, animatedText.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && animatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && animatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);  
    return () => clearTimeout(timer);
  }, [animatedText, isDeleting, loopNum, titles]);

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
      link: 'https://clothing-resha.vercel.app/'
    },
    {
      title: 'APX - Token',
      description: 'Crypto platform frontend with real-time token details and animated interactions.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      features: ['Real-time Data', 'Mobile-first Design', 'Scroll Animations', 'Interactive UI'],
      link: 'https://apx-project.vercel.app/'
    },
    {
      title: 'Travelplace',
      description: 'Travel and tourism platform showcasing international, adventure, religious, domestic, and medical tours with packages and destinations.',
      tech: ['React.js', 'Bootstrap', 'JavaScript', 'MongoDB'],
      features: ['Tours & Packages', 'Destinations Showcase', 'User Authentication', 'Fully Responsive UI'],
      link: 'https://amazing-traveling.netlify.app/',
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy" />
      
      {/* Floating Shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 top-[10%] left-[10%] animate-float" />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-pink-600 to-red-600 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 top-[60%] left-[80%] animate-float-delayed-2" />
        <div className="absolute w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-20 top-[80%] left-[20%] animate-float-delayed-4" />
        <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg rotate-45 opacity-20 top-[30%] left-[70%] animate-float-delayed-1" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold animate-pulse">
                  YR
                </span>
              </div>

              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 relative ${
                      activeSection === section
                        ? 'text-purple-400'
                        : 'text-white hover:text-purple-300'
                    }`}
                  >
                    {section}
                    {activeSection === section && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 animate-expand-width" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                    activeSection === section
                      ? 'bg-purple-900/30 text-purple-400 font-medium'
                      : 'text-white hover:text-purple-300 hover:bg-white/5'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <div className="pt-4 pb-2 border-t border-white/10">
                <div className="flex justify-center space-x-6">
                  <a href="https://linkedin.com/in/yashranpura" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/yashsoni3012" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
                    <Github size={20} />
                  </a>
                  <a href="mailto:yashranpura3@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
                    <Mail size={20} />
                  </a>
                  <a href="tel:+919737126164" className="text-white hover:text-purple-400 transition-colors duration-300 p-2">
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-down">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Yash Ranpura
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 min-h-[2.5rem] flex justify-center items-center animate-slide-up">
                <span className="mr-2">I'M a</span>
                <span className="text-purple-400 font-mono">
                  {animatedText}
                </span>
                <span className="inline-block w-1 h-8 bg-purple-400 ml-1 animate-pulse" />
              </h2>
              
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Building dynamic web applications with MongoDB, Express.js, React.js, and Node.js.
                Passionate about creating seamless user experiences with modern technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-zoom-in">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">View My Work</span>
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
        <section id="about" className="py-20 px-4 bg-white/5 backdrop-blur-sm rounded-t-[50px] mt-[-50px]">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative inline-block">
                  <User className="inline mr-3 text-purple-400" />
                  About Me
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-expand-width" />
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
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

                <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-2"
                        style={{ 
                          animation: isVisible.about ? `fadeInScale 0.5s ease-out ${index * 0.1}s both` : 'none'
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <skill.icon className="text-purple-400 animate-spin-slow" size={20} />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ 
                              width: isVisible.about ? `${skill.level}%` : '0%',
                              transition: 'width 1s ease-out'
                            }}
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
        <section id="experience" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative inline-block">
                  <Briefcase className="inline mr-3 text-purple-400" />
                  Experience
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-expand-width" />
                </span>
              </h2>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group ${
                      isVisible.experience ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl group-hover:rotate-180 transition-transform duration-1000" />
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                        <p className="text-xl text-white">{exp.company}</p>
                        <p className="text-gray-400 flex items-center mt-1">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-purple-300 font-medium bg-purple-900/30 px-4 py-2 rounded-full mt-4 md:mt-0 animate-pulse">
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-2 relative z-10">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                          <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <GraduationCap className="inline mr-3 text-purple-400" />
                    Education
                  </span>
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                        isVisible.experience 
                          ? index % 2 === 0 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-100 translate-x-0'
                          : index % 2 === 0
                            ? 'opacity-0 -translate-x-20'
                            : 'opacity-0 translate-x-20'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{edu.degree}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          edu.status === 'Current' 
                            ? 'bg-green-900/30 text-green-400' 
                            : 'bg-blue-900/30 text-blue-400'
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
        <section id="projects" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative inline-block">
                  <FolderOpen className="inline mr-3 text-purple-400" />
                  Projects
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-expand-width" />
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex flex-col h-full relative overflow-hidden group ${
                      isVisible.projects 
                        ? index % 2 === 0 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-100 translate-x-0'
                        : index % 2 === 0
                          ? 'opacity-0 -translate-x-20'
                          : 'opacity-0 translate-x-20'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm hover:bg-purple-900/50 transition-colors duration-300"
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
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden group/btn"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <ExternalLink size={16} className="relative" />
                        <span className="relative">View Project</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative inline-block">
                  Get In Touch
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-expand-width" />
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto text-center">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: Mail, title: 'Email', text: 'yashranpura3@gmail.com', href: 'mailto:yashranpura3@gmail.com' },
                  { icon: Phone, title: 'Phone', text: '+91 9737126164', href: 'tel:+919737126164' },
                  { icon: Linkedin, title: 'LinkedIn', text: 'Connect with me', href: 'https://linkedin.com/in/yashranpura' }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden ${
                      isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <contact.icon className="text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-360 group-hover:text-white transition-all duration-500 relative z-10" size={40} />
                    <h3 className="text-white font-medium mb-2 relative z-10 group-hover:text-white">{contact.title}</h3>
                    <p className="text-gray-400 relative z-10 group-hover:text-white transition-colors duration-300">{contact.text}</p>
                  </a>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Send me a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Mail size={20} className="relative" />
                    <span className="relative">Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
          <p>&copy; 2025 Yash Ranpura. Design & Code by Yash.</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(30px) rotate(240deg);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed-1 {
          animation: float 20s ease-in-out 1s infinite;
        }

        .animate-float-delayed-2 {
          animation: float 20s ease-in-out 2s infinite;
        }

        .animate-float-delayed-4 {
          animation: float 20s ease-in-out 4s infinite;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.4s both;
        }

        .animate-zoom-in {
          animation: zoom-in 1s ease-out 0.6s both;
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .group:hover .group-hover\\:rotate-360 {
          animation: rotate-360 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;