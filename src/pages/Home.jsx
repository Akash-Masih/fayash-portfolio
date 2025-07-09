import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="bg-black text-gold min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Fayash Hadayat
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl mt-4"
      >
        Sales Executive @ ABS Developers
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-md mt-4 italic max-w-xl"
      >
        Pioneering iconic properties with integrity & innovation.
      </motion.p>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
        className="mt-10 w-28 h-28 bg-gold rounded-full shadow-xl"
      />
    </div>
  );
}

export default Home;
