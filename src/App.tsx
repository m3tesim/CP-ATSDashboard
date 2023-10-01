import Filters from "./components/Filters";
import Search from "./components/Search";
import SideNAV from "./components/SideNAV";
import TopNAV from "./components/TopNAV";
import CheckBox from "./assets/Checkbox.svg";

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
          <div className="bg-white rounded-lg mx-8 w-10/12">
            <div className="p-4 border-b border-solid mx-4">
              <nav className="flex place-items-center justify-between">
                <div className="flex gap-8">
                  <img src={CheckBox} width={16} height={16} />
                  <p className="text-blue-700 font-semibold">247 Candidates</p>
                </div>

                <div className="flex gap-4">
                  <p className="text-blue-700 font-medium">Qualified</p>
                  <p className="border-solid border-l-2 pl-4">
                    Task
                    <span className="text-xs ml-4 font-light text-center rounded-2xl p-1 bg-indigo-50">
                      25
                    </span>
                  </p>
                  <p className="border-solid border-l-2 pl-4">
                    Disqualified
                    <span className="text-xs ml-4 font-light text-center rounded-2xl p-1 bg-indigo-50">
                      78
                    </span>
                  </p>
                </div>
              </nav>
            </div>
            <div className="border-b border-solid mx-4">
              <div className="flex place-items-center px-8 w-7/12 py-6 ">
                <div className="flex place-items-center">
                  <img src={CheckBox} width={16} height={16} />
                </div>
                <div className="w-16 h-16 m-auto flex font-semibold justify-center place-items-center bg-indigo-100 rounded-full p-3 text-2xl text-indigo-300 ">
                  AS
                </div>

                <div>
                  <p className="font-semibold">Aaliyah Sanderson</p>
                  <p>Riyadh, Saudi Arabia</p>
                  <p className="font-light">
                    Bachelor - Cambridge University (2023 - 2023)
                  </p>
                  <div>
                    <span className="text-blue-700">#top_candidate</span>{" "}
                    <span className="text-blue-700">#top_candidate</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-light text-center rounded-2xl px-3 py-1 bg-cyan-50 text-cyan-900 font-medium">
                      New York
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
