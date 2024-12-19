import medicalLogo from "/medical_logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={medicalLogo} className="logo" alt="Vite logo" />
        <h1>Track My Meds!</h1>
      </div>
    </>
  );
}

export default App;
