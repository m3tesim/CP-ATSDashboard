import Warning from "../assets/Warning.svg";
import SearchIcon from "../assets/Search.svg";
import { allUsers, User } from "../usersData";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

export default function Search({ users, setUsers }: Props) {
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Changes ", value, value.length);

    if (value.length === 0) return setUsers(allUsers);

    const searchResult = users.filter((user) =>
      JSON.stringify(user).includes(value)
    );
    setUsers(searchResult);
  };
  return (
    <div className="flex bg-white px-4 rounded-lg">
      <img src={SearchIcon} width={20} height={20} />
      <input
        onChange={(e) => handelChange(e)}
        placeholder="Serach by name, edu, exp or #tag"
        type="text"
        className="p-4 mx-2  w-full border-none focus:outline-none focus:border-none"
      />
      <img src={Warning} width={20} height={20} />
    </div>
  );
}
