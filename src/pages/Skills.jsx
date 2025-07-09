import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    'High-Ticket Property Sales',
    'Shariah-Compliant Investment Consulting',
    'Strategic Investor Relationship Management',
    'Real Estate Market Analysis',
    'Luxury High-Rise Project Selling',
    'Ethical Deal Structuring',
    'Client-Centric Closing Strategy',
  ];

  return (
    <div className="bg-black text-gold min-h-screen py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Professional Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-black border border-gold rounded-2xl p-6 shadow-md transition-all"
          >
            <p className="text-lg font-medium">{skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
