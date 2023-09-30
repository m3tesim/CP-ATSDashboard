import Filters from "./components/Filters";
import Search from "./components/Search";
import SideNAV from "./components/SideNAV";
import TopNAV from "./components/TopNAV";

export default function App() {
  return (
    <div className="flex bg-indigo-50">
      <SideNAV />
      <div className="flex flex-col m-8 w-full">
        <TopNAV />
        <main className="flex w-1/2">
          <div className="w-7/12">
            <Search />
            <Filters />
          </div>
          <div>Users Feed</div>
        </main>
      </div>
    </div>
  );
}
