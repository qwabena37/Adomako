
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Company Information */}
          <div>

            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Adomako Agyenkwa Enterprise
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Your trusted source for genuine automobile spare parts.
              We supply quality parts for Toyota, Honda, Hyundai,
              Nissan, BMW, Mercedes-Benz and many other vehicle brands.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="/"
                className="hover:text-yellow-500 transition duration-300"
              >
                Home
              </a>

              <a
                href="/gallery"
                className="hover:text-yellow-500 transition duration-300"
              >
                Shop Gallery
              </a>

              <a
                href="/contact"
                className="hover:text-yellow-500 transition duration-300"
              >
                Contact Us
              </a>

              <Link
                to="/admin/login"
                className="hover:text-yellow-500 transition duration-300"
              >
                Admin Portal
              </Link>

            </div>

          </div>

          {/* Contact Information */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500" />
                <span>+233 59 219 4931</span>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <span>WhatsApp Support</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Ghana</span>
              </div>

            </div>

            {/* Social Media */}
            <div className="flex gap-5 mt-6 text-xl">

              <a
                href="https://www.facebook.com/share/1Bt5WLnWZm/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/adomako_agyenkwa_enterprise?igsh=MW05aXdqMndtaHVseA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@adomako_agyenkwa_ent?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition duration-300"
              >
                <FaTiktok />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

          <p>
            © 2026 Adomako Agyenkwa Enterprise. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Genuine Automobile Parts • Quality Service • Customer Satisfaction
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

