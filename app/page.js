import Add from "./components/Add";
import Card from "./components/Card";
import Search from "./components/Search";

export default function Home() {
  return (
    <main className="mx-4 sm:mx-40 mb-40">
      <Add />
      <Search />
      <Card />
    </main>
  );
}
