import Warning from "../assets/Warning.svg";
import SearchIcon from "../assets/Search.svg";

export default function Search() {
  return (
    <div className="flex bg-white px-4 rounded-lg">
      <img src={SearchIcon} width={20} height={20} />
      <input
        placeholder="Serach by name, edu, exp or #tag"
        type="text"
        className="p-4 mx-2  w-full border-none focus:outline-none focus:border-none"
      />
      <img src={Warning} width={20} height={20} />
    </div>
  );
}
