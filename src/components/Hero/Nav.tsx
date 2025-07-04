import Button from "../UI/Button";

function Nav(){
    return(
        <nav className="fixed w-full top-0 left-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-black/5 px-6 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="Surplus Visuals"
                className="h-8 w-auto object-contain"
              />
              <span className="text-white text-lg font-semibold hidden sm:inline">
                SurplusVisuals
              </span>
            </a>
            <div className="hidden md:flex-1 md:flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                >
                  Testimonials
                </a>
              </div>
            </div>
            <Button link="#" className="hidden md:inline-block">
              Get in Touch
            </Button>
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-white">
              <i className="ri-menu-line ri-lg"></i>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Nav;