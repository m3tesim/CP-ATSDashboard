import SideNAV from "./components/SideNAV";
import TopNAV from "./components/TopNAV";

export default function App() {
  return (
    <div className="flex bg-indigo-50">
      <SideNAV />
      <div className="flex flex-col m-8 w-full ">
        <TopNAV />
        <main className="flex ">
          <div>Side Tabs</div>
          <div>Users Feed</div>
        </main>
      </div>
    </div>
  );
}
