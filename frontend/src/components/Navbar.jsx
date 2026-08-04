import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTime(
        now.toLocaleString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Date & Time Bar */}
      <div className="bg-white text-black text-center text-sm font-medium py-2">
        {time}
      </div>

      <nav className="relative bg-slate-950 text-white sticky top-0 z-50 shadow-xl border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

          <div className="flex justify-between items-center h-20">

            
{/* Logo */}
<Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo.jpeg"
    alt="Adomako Agyenkwa Enterprise"
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
  />

  <div>
    <h1 className="font-bold text-sm sm:text-base md:text-lg">
      Adomako Agyenkwa
    </h1>

    <p className="text-xs text-gray-400">
      Genuine Automobile Parts
    </p>
  </div>
</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">

              <a
                href="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>

              <a
                href="/gallery"
                className="hover:text-yellow-400 transition duration-300"
              >
                Shop Gallery
              </a>

              <a
                href="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>

              <a
                href="https://wa.me/233243160227"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg font-semibold transition duration-300"
              >
                Inquire Product
              </a>

            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden ml-auto">

              <button
                onClick={() => setOpen(!open)}
                className="text-xl p-2"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>

            </div>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
  <div className="md:hidden absolute top-full right-0 w-72 bg-slate-900 border-l border-slate-800 shadow-2xl">

    <div className="px-6 py-6 flex flex-col gap-4">

      <Link
        to="/"
        className="hover:text-yellow-400"
        onClick={() => setOpen(false)}
      >
        Home
      </Link>

      <Link
        to="/gallery"
        className="hover:text-yellow-400"
        onClick={() => setOpen(false)}
      >
        Shop Gallery
      </Link>

      <Link
        to="/contact"
        className="hover:text-yellow-400"
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>

      <a
        href="https://wa.me/233243160227"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-black text-center py-3 rounded-lg font-semibold"
      >
        Inquire Product
      </a>

      <div className="border-t border-slate-700 pt-4">

        <p className="text-sm text-gray-400 mb-3">
          Follow Us
        </p>

        <div className="flex gap-5 text-xl">
          
<a
    href="https://www.facebook.com/share/1Bt5WLnWZm/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition duration-300"
  >
    <FaFacebook />
  </a>
          <a
            href="https://www.instagram.com/adomako_agyenkwa_enterprise?igsh=MW05aXdqMndtaHVseA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@adomako_agyenkwa_ent?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaTiktok />
          </a>

        </div>

      </div>

    </div>

  </div>
)}

      </nav>
    </>
  );
}

export default Navbar;

