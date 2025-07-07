import React from "react";
import {
  Mail,
  MapPin,
  Globe,
  Github,
  Twitter,
  // Discord,
  User,
} from "lucide-react";
import Squares from "./Squares/Squares";

const Contact: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#211F2E] -z-10" />
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#ffffff69"
          hoverFillColor="#970707"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-blue-500/40 blur-2xl opacity-60 pointer-events-none" />
      <div className="max-w-[80vw] w-full mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-2">
          <span className="glow-text">
            Get In <span className="text-primary">Touch</span>
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out to me.
        </p>
      </div>
      <div className="w-full max-w-[80vw] grid md:grid-cols-[2fr_1fr] gap-10 relative z-10">
        {/* Left: Contact Form */}
        <div className="bg-gray-900 rounded-2xl p-10 shadow-lg flex-1 flex flex-col gap-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">
            <span className="glow-text">Send Me a Message</span>
          </h3>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Your Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Message</label>
              <textarea
                className="w-full bg-gray-800 border border-primary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-full transition-all mt-2 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Right: Info & Socials */}
        <div className="flex flex-col gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 mb-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary" size={20} />
                <span>Email</span>
                <a
                  href="mailto:email@boluwatife.tech"
                  className="ml-auto text-primary hover:underline"
                >
                  email@boluwatife.tech
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-primary" size={20} />
                <span>Location</span>
                <span className="ml-auto">Ogbomosho, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="text-primary" size={20} />
                <span>Website</span>
                <a
                  href="https://boluwatife.tech"
                  className="ml-auto text-primary hover:underline"
                >
                  boluwatife.tech
                </a>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 mb-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary/20 rounded-full p-3 text-gray-300"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary/20 rounded-full p-3 text-gray-300"
              >
                {/* <Discord size={22} /> */}
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary/20 rounded-full p-3 text-gray-300"
              >
                <Twitter size={22} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary/20 rounded-full p-3 text-gray-300"
              >
                <User size={22} />
              </a>
            </div>
          </div>
          {/* Availability */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Availability
            </h3>
            <p className="text-gray-300 mb-2">
              I'm currently available for freelance work and open to full-time
              opportunities.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="text-green-400 text-sm">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
