import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-blue-400"><FaFacebookF size={24} /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
        <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
        <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
      </div>
      <p className="text-sm">© 2025 NavegaTrem. Todos os direitos reservados.</p>
      <p className="text-xs opacity-50 mt-2">Powered by NavegaTrem</p>
    </footer>
  );
}
