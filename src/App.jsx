// ✅ Final Enhanced Version with 3D Project Details, Smooth Transitions & Social Icons

import { useEffect, useState } from "react";
import profileImage from "./assets/Fayash_dp.jpg";
import burj from "./assets/BURJ-QUAID_2.jpg";
import abs1 from "./assets/ABS-MALL-1.jpg";
import abs2 from "./assets/ABS-residency-2.jpg";
import pearl1 from "./assets/pearl_1.jpg";
import pearlp from "./assets/pearl_1prem.jpg";
import pearlc1 from "./assets/Pearl_1_court.jpg";
import pearlc2 from "./assets/pearl_1_court2.jpg";
import pealcapt from "./assets/pearl_1_capital.jpg";
import logo from "./assets/abs-logo.jpg";
import b1 from "./assets/bed-1.jpg";
import b2 from "./assets/bed-2.jpg";
import b3 from "./assets/bed-3.jpg";
import b4 from "./assets/bed-4.jpg";
import pent from "./assets/penthouse.jpg";
import com from "./assets/commercial.jpg";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projectsData = [
  { name: "Burj Quaid", image: burj, floors: 77, height: "1000+ ft", area: "40 Kanals", title: "Tallest Tower of Pakistan (The future of Karachi)", location: "Plot #1, CBD DHA City, Karachi", status: "Under Construction" },
  { name: "ABS Mall & Residency 1", image: abs1, floors: 9, height: " ft", area: "100,000 sq ft", title: "Heart of Behira town Lahore", location: "GVR 1, beside ring road interchange Bahria town Lahore", status: "Launched" },
  { name: "ABS Mall & Residency 2", image: abs2, floors: 14, height: "170 ft", area: "180,000 sq ft", title: "Downtown DHA rayah concept", location: "Adjacent to Bahria town ring road interchange opposite to ABS Mall & Residency 1", status: "In Progress" },
  { name: "Pearl one Tower", image: pearl1, floors: 7, height: "90 ft", area: "90,000 sq ft", title: "Bahira tallest building", location: "10-19A, iqbal block Bahria town Lahore", status: "Launched" },
  { name: "Pearl one Premium", image: pearlp, floors: 22, height: "160 ft", area: "140,000 sq ft", title: "Heart of Behira town Lahore", location: "commercial plot 1, Takbir block bahria town Lahore", status: "In Progress" },
  { name: "Pearl one Courtyard 1", image: pearlc1, floors: 45, height: "130 ft", area: "110,000 sq ft", title: "tallest building of Punjab", location: "150ft main boulevard upcoming downtown tipu sultan block bahria town Lahore", status: "Launching Soon" },
  { name: "Pearl one Courtyard 2", image: pearlc2, floors: 30, height: "300 ft", area: "125,000 sq ft", title: "luxurious comfort zone", location: "Bahria town Lahore", status: "Under Development" },
  { name: "Pearl one Capital", image: pealcapt, floors: 35, height: "100 ft", area: "95,000 sq ft", title: "Tallest building of DHA Islamabad", location: "Plot # 25, GT Road, sector A, DHA 2, a, sector, Islamabad, 45730", status: "Under Development" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects","services", "vision", "contact"];
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-[url('/src/assets/bg-pattern.jpg')] bg-cover bg-fixed bg-no-repeat text-white scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-md z-50">
        <nav className="flex flex-wrap justify-center items-center gap-2 px-2 py-3 text-xs sm:gap-6 sm:px-4 sm:py-4 sm:text-base">
          {["home", "about", "skills", "projects", "services", "vision", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-semibold transition-all duration-700 ${
              activeSection === id
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="relative h-screen flex flex-col md:flex-row justify-center items-center pt-20 px-6 text-white">
        <div className="absolute inset-0 bg-[url('/src/assets/home-bg.jpg')] bg-cover bg-center opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -80, rotateX: 45, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          whileHover={{ scale: 1.02, rotateY: 6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex-1 text-center md:text-left space-y-4 transform-gpu perspective-1000"
        >
          {/* ✨ Glare overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl overflow-hidden">
            <div className="animate-glare w-full h-full bg-gradient-to-tr from-yellow-400/10 via-white/10 to-yellow-400/10 blur-md opacity-0" />
            </div>

          {/* Main Name with glow pulse */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_25px_rgba(255,255,0,0.45)] hover:drop-shadow-[0_0_35px_rgba(255,255,0,0.65)] transition-all duration-700"
          >
            Fayash Hadayat
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-gray-300"
          >
            Sales Executive @ ABS Developers
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-gray-400 italic max-w-md"
          >
            Redefining real estate excellence with innovation and Shariah-compliant vision.
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.2 }}
          className="relative z-10 flex-1 mt-8 md:mt-0 flex justify-center"
        >
          <img 
            src={profileImage} 
            alt="Fayash Hadayat" 
             className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-yellow-400 shadow-2xl transform hover:scale-110 transition duration-800" 
          />
        </motion.div>
      </section>
      <section id="about" className="min-h-screen px-6 py-20 flex flex-col items-center bg-black/80">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6 border-b border-yellow-500 pb-2">
          About Me
        </h3>

        <p className="max-w-3xl text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 text-center leading-7 sm:leading-8">
          "I'm a passionate real estate professional committed to delivering value-driven, Shariah-compliant developments that combine innovation with integrity. With a strong background in sales and project coordination at ABS Developers, I bring hands-on experience in luxury property marketing, client relationship management, and strategic vision. My goal is to create impactful real estate experiences — where clients find trust, investors see growth, and every project tells a story of dedication, design, and excellence."
        </p>
      </section>
      <section id="skills" className="min-h-screen px-4 sm:px-6 py-20 flex flex-col items-center bg-zinc-900/80">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-10 border-b border-yellow-500 pb-2 text-center">
          Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
          {[
            "Client Acquisition & Retention",
            "Strategic Real Estate Sales",
            "Shariah-Compliant Investment Solutions",
            "Luxury Property Marketing",
            "Market Research & Trend Analysis",
            "Communication & Deal Negotiation",
            "Digital Outreach & Lead Generation",
            "Team Collaboration & Leadership",
            "Trust-Building & Ethical Sales Approach"
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-zinc-800/90 text-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-yellow-400 text-white text-sm sm:text-base md:text-lg font-medium cursor-default transform-gpu"
            >
              <p>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section with Enhanced View Details */}
     <section id="projects" className="min-h-screen px-4 sm:px-6 py-20 flex flex-col items-center bg-black/80">
      <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 border-b border-yellow-500 pb-2 text-center">Projects Showcase</h3>
      <AnimatePresence>
          {selectedProject ? (
            <motion.div
              key="project-details"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 bg-zinc-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-5xl"
            >
            <motion.div className="md:w-1/2 w-full" initial={{ rotateY: -90 }} animate={{ rotateY: 0 }} transition={{ duration: 0.5 }}>
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-64 sm:h-80 object-cover rounded shadow-lg" />
            </motion.div>
            <motion.div className="md:w-1/2 w-full mt-4 md:mt-0" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">{selectedProject.name}</h4>
                <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                  <li><strong>Floors:</strong> {selectedProject.floors}</li>
                  <li><strong>Location:</strong> {selectedProject.location}</li>
                  <li><strong>Title:</strong> {selectedProject.title}</li>
                  <li><strong>Status:</strong> {selectedProject.status}</li>
                </ul>
                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition text-sm sm:text-base"
                  >Know More</button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition text-sm sm:text-base"
                  >Back to Projects</button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-zinc-800/90 p-0 rounded-xl shadow-2xl overflow-hidden transform hover:shadow-yellow-400 hover:z-10 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.name} className="w-full h-40 sm:h-60 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1">{project.name}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Click to view full project details.</p>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </AnimatePresence>
    </section>


    <section id="services" className="min-h-screen px-4 sm:px-6 py-20 bg-black/80 text-white flex flex-col items-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-10 sm:mb-12 border-b border-yellow-500 pb-2 text-center">
        My Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {[
          { title: "1 Bed Apartment", image: b1, desc: "Perfect for singles or couples seeking cozy, modern living." },
          { title: "2 Bed Apartment", image: b2, desc: "Ideal for small families with stylish interiors." },
          { title: "3 Bed Apartment", image: b3, desc: "Spacious and functional for growing families." },
          { title: "4 Bed Apartment", image: b4, desc: "Premium space and comfort for large families." },
          { title: "Penthouse", image: pent, desc: "Top-floor luxury with stunning views and private terraces." },
          { title: "Commercial Units", image: com, desc: "Prime business locations for offices or retail shops." },
        ].map((unit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-800/90 rounded-xl shadow-2xl overflow-hidden hover:shadow-yellow-400 z-10 cursor-pointer"
          >
            <img
              src={unit.image}
              alt={unit.title}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4 sm:p-5 md:p-6">
              <h4 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">{unit.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{unit.desc}</p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                Seeking Services
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>



      <section id="vision" className="min-h-screen px-6 py-20 flex flex-col items-center bg-zinc-900/80">
        <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 border-b border-yellow-500 pb-2 text-center">
          My Vision
        </h3>

        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 text-center leading-7 sm:leading-8 md:leading-9 tracking-wide px-2 sm:px-4">
          "At ABS Developers, my vision is to revolutionize Pakistan’s real estate landscape by setting new standards of excellence rooted in integrity, innovation, and Shariah-compliant practices. We are committed to delivering iconic residential and commercial developments that not only stand out in design and functionality but also serve a deeper purpose — to enrich lives and uplift communities.
          <br /><br />
          My believe that a property is not just land or structure, but a foundation for dreams, prosperity, and legacy. Through modern architecture, ethical investment strategies, and sustainable construction, we aim to build not just buildings — but environments that inspire trust, well-being, and long-term value.
          <br /><br />
          My mission is to empower investors with confidence, offer families secure and elegant spaces, and contribute meaningfully to the future of urban development in Pakistan. With every project, we move closer to a future where luxury, faith, and impact converge to shape a better tomorrow."
        </p>
      </section>
      <section id="contact" className="min-h-screen px-6 py-20 flex flex-col items-center bg-black/80">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6 border-b border-yellow-500 pb-2">
          Schedule a Private Meeting
        </h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = {
              name: e.target.name.value.trim(),
              phone: e.target.phone.value.trim(),
              email: e.target.email.value.trim(),
              message: e.target.message.value.trim(),
            };

            if (!formData.name || (!formData.email && !formData.phone)) {
              alert("Please enter your name and at least phone or email.");
              return;
            }

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

              const result = await res.json();
              if (result.success) {
                alert("✅ Message sent successfully!");
                e.target.reset();
              } else {
                alert("❌ Failed to send message. Please try again later.");
              }
            } catch (err) {
              console.error("Error submitting contact form:", err);
              alert("🚨 Something went wrong. Please try again.");
            }
          }}
          className="w-full max-w-md space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded focus:outline-none"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer with Enhanced Social Icons */}
      <footer className="bg-black/90 text-white py-10 px-4 sm:px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1: Address & Logo */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">Connect With Us</h4>
            <p className="text-gray-400 text-sm sm:text-base">
              ABS Developers<br /> 
              Pearl One Tower (10A-18A), Iqbal Block,<br className="hidden sm:inline" />
              Bahria Town, Lahore
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt="ABS Developers Logo"
                  className="w-28 sm:w-32 h-auto mt-4 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">Contact</h4>
            <p className="text-gray-400 text-sm sm:text-base">
              Phone: +92 333 1110268<br />
              fayashhadayat@gmail.com<br />
              fayash940@gmail.com
            </p>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">Join Community</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-xl sm:text-2xl mt-2">
              <a href="https://www.facebook.com/share/1BsNG6BXLt/" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/fayash_hadyat?utm_source=qr&igsh=NmM3YWJmNHV1cTJm" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@fayashwithabsmarking?_t=ZS-8xrBgUPH0mW&_r=1" className="hover:text-yellow-400"><i className="fab fa-tiktok"></i></a>
              <a href="https://www.linkedin.com/in/fayash-hadayat-1b4a96373/" className="hover:text-yellow-400"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/923331110268" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Fayash Hadayat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;