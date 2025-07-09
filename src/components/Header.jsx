// components/Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoginClick = () => {
    navigate("/customer-login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#003366]/90 backdrop-blur flex justify-between items-center px-6 py-4 shadow-xl">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold"
      >
        <Link to="/">WHEELSAURA</Link>
      </motion.div>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex gap-6 items-center text-sm font-medium"
      >
        <Link to="/">Home</Link>
        <Link to="/galery">Gallery</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/categories">Category</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/payment-methods">Payment Methods</Link>
        <Link to="/profile">User Profile</Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="text-black w-40 px-2 py-1 rounded"
          />
          <button type="submit" className="absolute right-2 top-2">
            <Search className="h-4 w-4 text-gray-500" />
          </button>
        </form>

        {/* Login Button */}
        <button
          onClick={handleLoginClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </button>
      </motion.nav>
    </header>
  );
}
