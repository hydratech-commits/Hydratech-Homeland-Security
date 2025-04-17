import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdMail } from "react-icons/io";
import Reveal from "./Reveal";

function AdvancedContactForm() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .sendForm(
        "service_puyfyoa",
        "template_8kpowro",
        form.current,
        "8OpvyMiLUIQYhbdTF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setError(
            "An error occurred while sending the email. Please try again later."
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="bg-gray-950 text-gray-300 py-20 px-4 sm:px-10">
      <div className="max-w-full mx-auto flex flex-col justify-center items-center gap-10">
        {/* Column 1: Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start flex-col gap-6 md:w-2/3"
        >
          <h3 className="text-[#fb5c2c] text-lg sm:text-2xl font-semibold sm:font-bold  ">
            Contact Us
          </h3>
          <div className="flex flex-col sm:flex-row items-start gap-x-3 gap-y-2 justify-center text-sm text-[#9fa4b1]">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#fb5c2c] mt-1"
              />
              <span>
                HydraTech Homeland Security W.L.L
                <br />
                Level 44, office 4401
                <br />
                East tower,
                <br />
                Bahrain Financial Harbour,
                <br />
                19191, Manama,
                <br /> Kingdom Of Bahrain.
              </span>
            </div>
            <div className="flex items-start justify-center gap-3 ">
              <FontAwesomeIcon icon={faPhone} className="text-[#fb5c2c]" />
              <span>+973-17233339</span>
            </div>
            <div className="flex items-start gap-3">
              <a
                href="mailto:info@hydratech.bh"
                className="flex justify-center items-start gap-x-2 text-lg font-semibold text-neutral-400 hover:underline"
              >
                <IoMdMail className="text-[#fb5c2c]" /> info@hydratech.bh
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden border border-[#6b7373] shadow-lg">
            <iframe
              title="Hydratech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7363596207056!2d50.571444173951626!3d26.237754588773235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a58b15842417%3A0xc79293d8ed74ec31!2sHarbour%20Towers%20East!5e0!3m2!1sen!2sbh!4v1744631350762!5m2!1sen!2sbh"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Column 2: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-transparent border border-gray-600 text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#fb5c2c] col-span-1"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-transparent border border-gray-600 text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#fb5c2c] col-span-1"
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
              className="bg-transparent border border-gray-600 text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#fb5c2c] col-span-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-transparent border border-gray-600 text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#fb5c2c] col-span-2"
            ></textarea>
            <input
              type="submit"
              value={loading ? "Sending..." : "Send Message"}
              className="bg-[#fb5c2c] hover:bg-[#e84d1f] text-black font-bold py-3 rounded-md col-span-2 cursor-pointer transition duration-300"
              disabled={loading}
            />
            {done && (
              <p className="text-green-400 text-sm font-semibold mt-2 col-span-2">
                Thanks for contacting us!
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm font-semibold mt-2 col-span-2">
                {error}
              </p>
            )}
          </form>

          <Reveal>
            <div className="w-full mx-auto flex flex-col justify-center items-center mt-8">
              <span className="text-neutral-300 text-xl font-bold">Or</span>
              <span className="text-neutral-400 text-sm px-4 mt-2">
                For business inquiries or further information, feel free to
                contact us via email.
              </span>
              <a
                href="mailto:info@hydratech.bh"
                className="flex justify-center items-center gap-x-2 text-lg font-semibold text-neutral-400 mt-2 hover:underline"
              >
                <IoMdMail className="text-[#fb5c2c]" /> info@hydratech.bh
              </a>
              <div className="flex justify-center items-center gap-x-4 mt-4 text-2xl">
                <a
                  href="https://www.linkedin.com/company/hydratechbh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </div>
  );
}

export default AdvancedContactForm;
