import medicalLogo from "/medical_logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="w-10">
          <img src={medicalLogo} alt="Vite logo" />
        </div>
        <h1 className="text-3xl text-orange-500 font-bold underline">
          Track My Meds!
        </h1>
      </div>
    </>
  );
}

export default App;
