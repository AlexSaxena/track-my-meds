import Header from "../components/Header";
import Footer from "../components/Footer";

function MedicationList() {
  return (
    <main>
      <Header />
      <h1 className="text-xl font-bold">Medication List</h1>
      <p>View all your medications here.</p>
      <Footer />
    </main>
  );
}

export default MedicationList;
