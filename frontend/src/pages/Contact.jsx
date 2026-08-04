import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">

      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Contact Adomako Agyenkwa Enterprise
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We specialize in supplying genuine and quality automobile parts
            for Toyota, Honda, Hyundai, Nissan, Mercedes-Benz, Volvo,
            SsangYong, and other vehicle brands. Contact us for inquiries,
            quotations, and availability of spare parts.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Shop Location
                  </h3>

                  <p className="text-gray-600">
                    Abossey Okai Spare Parts Market,
                    Accra, Greater Accra Region,
                    Ghana.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone Number
                  </h3>

                  <p className="text-gray-600">
                    +233 24 316 0227
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email Address
                  </h3>

                  <p className="text-gray-600">
                    info@adomakoagyenkwa.com
                  </p>
                </div>

              </div>

            </div>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/233243160227"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition duration-300"
            >
              <FaWhatsapp size={22} />
              Chat With Us on WhatsApp
            </a>

            {/* Social Media */}

            <div className="mt-10">

              <h3 className="font-semibold text-lg mb-4">
                Connect With Us
              </h3>

              <div className="flex gap-5 text-2xl">

                <a
                  href="https://www.facebook.com/share/1Bt5WLnWZm/?mibextid=wwXIfr#" 
                  className="text-blue-600 hover:scale-110 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/adomako_agyenkwa_enterprise?igsh=MW05aXdqMndtaHVseA=="
                  className="text-pink-600 hover:scale-110 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@adomako_agyenkwa_ent?is_from_webapp=1&sender_device=pc"
                  className="hover:scale-110 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>

                <a
                  href="https://wa.me/233243160227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold text-gray-900">
                Find Us
              </h2>

              <p className="text-gray-600 mt-2">
                Visit our shop at Abossey Okai, Ghana's leading automobile
                spare parts business hub.
              </p>

            </div>

            <iframe
              title="Abossey Okai Map"
              src="https://maps.google.com/maps?q=Abossey%20Okai%20Accra%20Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;