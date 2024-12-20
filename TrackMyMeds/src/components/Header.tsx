import { Link } from "@tanstack/react-router";
import medicalLogo from "/medical_logo.svg";

function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img src={medicalLogo} alt="TrackMyMeds Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800">TrackMyMeds</h1>
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          activeProps={{ className: "font-bold underline" }}
          activeOptions={{ exact: true }}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/AddMedication"
          activeProps={{ className: "font-bold underline" }}
          activeOptions={{ exact: true }}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          Add Medication
        </Link>
        <Link
          to="/MedicationList"
          activeProps={{ className: "font-bold underline" }}
          activeOptions={{ exact: true }}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          Medication List
        </Link>
        <Link
          to="/History"
          activeProps={{ className: "font-bold underline" }}
          activeOptions={{ exact: true }}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          History
        </Link>
      </div>

      <Link
        to="/Auth"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
        title="Login"
      >
        <span>Login</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m-7-7l7 7-7 7"
          />
        </svg>
      </Link>
    </nav>
  );
}

export default Header;
