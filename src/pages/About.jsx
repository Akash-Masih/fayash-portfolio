import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-black text-gold min-h-screen py-16 px-6 flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        About Fayash Hadayat
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl text-lg leading-relaxed text-gold/90"
      >
        As a dedicated Sales Executive at <span className="text-gold font-semibold">ABS Developers</span> — the world’s first Shariah-compliant real estate company — I bring over a decade of experience in high-value property sales, strategic investor engagement, and high-rise project consultation. Known for blending traditional integrity with innovative deal-making, I’ve played a key role in selling some of the most iconic developments across Bahria Town, DHA Islamabad, Lahore, and Karachi.
        <br /><br />
        My passion lies in helping clients realize their property dreams while aligning with ethical real estate practices. From luxury towers to landmark investments, my work has shaped skylines and built long-term client trust.
      </motion.p>
    </div>
  );
}

export default About;
