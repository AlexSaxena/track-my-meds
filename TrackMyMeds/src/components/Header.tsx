import { Link } from "@tanstack/react-router";
import medicalLogo from "/medical_logo.svg";

function Header() {
  return (
    <nav>
      <div className="w-10">
        <img src={medicalLogo} alt="Vite logo" />
      </div>
      <Link
        to="/"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="text-gray-300 hover:text-white transition-colors duration-300"
      ></Link>
      <Link
        to="/Home"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        to="/AddMedication"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        Add Medication
      </Link>
      <Link
        to="/MedicationList"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        Medication List
      </Link>
      <Link
        to="/History"
        activeProps={{ className: "font-bold underline" }}
        activeOptions={{ exact: true }}
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        History
      </Link>
    </nav>
  );
}

export default Header;
