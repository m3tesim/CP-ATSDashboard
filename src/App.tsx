import { useState } from "react";
import Filters from "./components/Filters";
import Search from "./components/Search";
import SideNAV from "./components/SideNAV";
import TopNAV from "./components/TopNAV";
import UsersDashboard from "./components/UsersDashboard";
import { allUsers } from "./usersData";

export default function App() {
  const [users, setUsers] = useState(allUsers);

  return (
    <div className="flex bg-indigo-50">
      <SideNAV />
      <div className="flex flex-col m-8 w-full mt-10">
        <TopNAV />
        <main className="flex w-full">
          <div className="w-4/12">
            <Search users={users} setUsers={setUsers} />
            <Filters />
          </div>
          <UsersDashboard users={users} />
        </main>
      </div>
    </div>
  );
}
