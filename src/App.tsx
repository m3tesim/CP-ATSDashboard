import Filters from "./components/Filters";
import Search from "./components/Search";
import SideNAV from "./components/SideNAV";
import TopNAV from "./components/TopNAV";
import UsersDashboard from "./components/UsersDashboard";

export default function App() {
  return (
    <div className="flex bg-indigo-50">
      <SideNAV />
      <div className="flex flex-col m-8 w-full mt-10">
        <TopNAV />
        <main className="flex w-full">
          <div className="w-4/12">
            <Search />
            <Filters />
          </div>
          <UsersDashboard />
        </main>
      </div>
    </div>
  );
}
