import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Header />
      <h1 className="text-xl font-bold">Welcome to TrackMyMeds</h1>
      <p>Your keep track of all your medications!</p>
      <Footer />
    </main>
  );
}

export default Home;
