import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || (!formData.email && !formData.phone)) {
      setStatus('❗ Please enter your name and at least email or phone.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('✅ Message sent successfully ✨');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(`❗ ${data.error || 'Something went wrong.'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❗ Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-gold min-h-screen py-16 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Schedule a Private Meeting
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-black border border-gold/30 p-8 rounded-2xl shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black text-gold border border-gold/30 rounded p-3 outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black text-gold border border-gold/30 rounded p-3 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black text-gold border border-gold/30 rounded p-3 outline-none"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Comment</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-black text-gold border border-gold/30 rounded p-3 outline-none"
            placeholder="Optional message"
          />
        </div>

        {status && (
          <div
            className={`text-sm mb-4 ${
              status.startsWith('✅') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`bg-gold text-black font-bold py-3 px-6 rounded-lg transition ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400'
          }`}
        >
          {loading ? 'Sending...' : 'Send Us Message'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
