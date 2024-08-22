import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];
// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// const navigate = useNavigate();
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BOJyw54UVFM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const About = () => (
  // <div className="bg-background text-foreground min-h-dvh flex flex-col">
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    {/* <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24 grid gap-12 md:gap-16 lg:gap-20"> */}
    <section className="grid gap-6 md:gap-8 lg:gap-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Car Wash</h2>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
          Get your car looking its best with our professional car wash services.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Standard Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A basic wash to keep your car looking clean and fresh.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Premium Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A more thorough wash to remove tough dirt and grime.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Deluxe Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            The ultimate car wash experience for a showroom-ready finish.
          </p>
        </div>
      </div>
    </section>
    <section className="grid gap-6 md:gap-8 lg:gap-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Mobile Car Wash
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
          We bring the car wash to you, so you can enjoy a clean car without the
          hassle.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Standard Mobile Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A basic mobile car wash service to keep your car looking clean.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Premium Mobile Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A more thorough mobile car wash service to remove tough dirt and
            grime.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <CarIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Deluxe Mobile Wash
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            The ultimate mobile car wash experience for a showroom-ready finish.
          </p>
        </div>
      </div>
    </section>
    <section className="grid gap-6 md:gap-8 lg:gap-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          House Cleaning
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
          Coming soon: Professional house cleaning services to keep your home
          spotless.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <HomeIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Basic Cleaning
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A standard cleaning service to keep your home tidy.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <HomeIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Deep Cleaning
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A more thorough cleaning to remove built-up dirt and grime.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <HomeIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Move-In/Move-Out
          </h3>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
            A comprehensive cleaning service for your home before or after a
            move.
          </p>
        </div>
      </div>
    </section>
    {/* </main> */}
  </div>
);

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
const Hero = () => (
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        Welcome to <span className="text-gray-700">BrandName</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        We provide top-notch services to meet all your needs. Experience the
        difference with BrandName.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="/booking1"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
          >
            Book Service Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">Cleany</div>
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-black hover:text-gray-600 ${
                  activeLink === link.name ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-black hover:bg-gray-100 ${
                    activeLink === link.name ? "font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeLink === "Home" && <Hero />}
        {/* {activeLink === "Home" && (
          <h1 className="text-4xl font-bold mb-4">Welcome to Cleany</h1>
        )} */}
        {activeLink === "About" && <About />}
        {/* {activeLink === "About" && (
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
        )} */}
        {activeLink === "Services" && (
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        )}
        {activeLink === "Contact" && (
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        )}
        {/* <p className="text-black">
          This is the content area. It will change based on the selected
          navigation link.
        </p> */}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Cleany. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-600">
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;
