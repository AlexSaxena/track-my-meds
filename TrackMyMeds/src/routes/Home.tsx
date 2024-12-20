import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Home")({
  component: Home,
});

function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold">Welcome to TrackMyMeds</h1>
      <p>Your keep track of all your medications!</p>
    </main>
  );
}

export default Home;
