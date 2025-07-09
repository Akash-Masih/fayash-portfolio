import { motion } from 'framer-motion';

function Vision() {
  return (
    <div className="bg-black text-gold min-h-screen flex flex-col justify-center items-center px-6 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        Our Vision
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl text-lg leading-relaxed text-gold/90"
      >
        At <span className="font-semibold">ABS Developers</span>, our vision goes beyond building skyscrapers — we build trust, legacy, and a better tomorrow.
        <br /><br />
        Guided by Shariah principles, we are committed to transforming Pakistan’s real estate landscape with integrity, excellence, and purpose. Every tower we raise is not just concrete and glass — it’s a symbol of opportunity, faith, and future-ready prosperity for families and investors alike.
        <br /><br />
        <span className="italic">
          "Our mission is to create iconic landmarks that elevate cities and empower lives — rooted in honesty, delivered with heart."
        </span>
      </motion.p>
    </div>
  );
}

export default Vision;
