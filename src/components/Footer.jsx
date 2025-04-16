import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const sitemapLinks = [
    "careers",
    "hero",
    "about",
    "services",
    "portfolio",
    "contact",
  ];
  const exploreLinks = ["Careers", "Network Consulting"];

  return (
    <footer className="bg-[#4e4e52] text-[#adb3bd] py-12 px-6 md:px-20 font-semibold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Contact + Map */}
        <div>
          <h3 className="text-[#fb5c2c] text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-sm text-[#9fa4b1] leading-6 mb-4">
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
          </p>
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
        </div>

        {/* Column 2: Sitemap */}
        <div>
          <h3 className="text-[#fb5c2c] text-lg font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            {sitemapLinks.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  className="cursor-pointer hover:text-[#fb5c2c] transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Career & Services */}
        <div>
          <h3 className="text-[#fb5c2c] text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((item) => (
              <li
                key={item}
                className="hover:text-[#fb5c2c] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center border-t border-[#6b7373] pt-4 text-sm text-[#adb3bd] relative">
        <div className="flex flex-col justify-center ">
          {" "}
          <span>
            {" "}
            &copy; {new Date().getFullYear()} HydraTech Homeland Security. All
            rights reserved.
          </span>{" "}
          <span>Developer details: @KhalidShakeel</span>
        </div>
        <ScrollLink
          to="hero"
          smooth={true}
          offset={-70}
          duration={200}
          className="absolute right-2 bottom-0  md:right-4 md:top-2 text-[#fb5c2c] text-2xl hover:scale-110 transition cursor-pointer"
        >
          ▲
        </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer;
