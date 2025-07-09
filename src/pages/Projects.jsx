import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      name: 'Pearl One Tower',
      location: 'Bahria Town',
      floors: 'Ground + 7',
      note: 'Bahria’s Tallest Mid-Rise Icon',
    },
    {
      name: 'Pearl One Capital',
      location: 'DHA Islamabad',
      floors: 'Ground + 35',
      note: 'Tallest Tower in DHA Islamabad',
    },
    {
      name: 'Pearl One Courtyard',
      location: 'Punjab',
      floors: 'Ground + 45',
      note: 'Tallest Building in Punjab',
    },
    {
      name: 'Pearl One Premium',
      location: 'Heart of Bahria Town',
      floors: 'Ground + 23',
      note: 'All-Glass Landmark',
    },
    {
      name: 'ABS Mall & Residency 1',
      location: 'Ring Road, Bahria Town Lahore',
      floors: 'Ground + 9',
      note: 'Prime Location Commercial & Residential',
    },
    {
      name: 'ABS Mall & Residency 2',
      location: 'Downtown DHA',
      floors: 'Upcoming',
      note: 'Rayah Concept Tower (Future)',
    },
    {
      name: 'Burj Quaid',
      location: 'DHA Karachi',
      floors: 'Ground + 77',
      note: 'Tallest Tower of Pakistan',
    },
  ];

  return (
    <div className="bg-black text-gold min-h-screen py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Landmark Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border border-gold rounded-xl p-6 bg-black/80 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gold/80">📍 {project.location}</p>
            <p className="text-gold/70">🏢 {project.floors}</p>
            <p className="mt-2 italic text-gold/60">“{project.note}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
