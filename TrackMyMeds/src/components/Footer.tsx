import { Link } from "@tanstack/react-router";
import medicalLogo from "/medical_logo.svg";

function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={medicalLogo} alt="TrackMyMeds Logo" className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              TrackMyMeds
            </span>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024
          <Link to="/" className="hover:underline">
            TrackMyMeds™
          </Link>
          . No Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
