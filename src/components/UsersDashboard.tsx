import CheckBox from "../assets/Checkbox.svg";
import { User } from "../usersData";

type Props = {
  users: User[];
};
export default function UsersDashboard({ users }: Props) {
  return (
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
      {users.map((user, index) => (
        <div key={index} className="border-b border-solid mx-4">
          <div className="flex place-items-center px-4 py-6 gap-8 ">
            <div className="flex place-items-center">
              <img src={CheckBox} width={16} height={16} />
            </div>
            <div className="w-16 h-16 flex font-semibold justify-center place-items-center bg-indigo-100 rounded-full p-3 text-2xl text-indigo-200 ">
              AS
            </div>

            <div>
              <p className="font-semibold">{user.name}</p>
              <p>{user.city}</p>
              <p className="font-light my-2">{user.qualification} </p>
              <div>
                <span className="text-blue-700">#top_candidate</span>{" "}
                <span className="text-blue-700">#top_candidate</span>
              </div>
              <div className="pt-2 flex gap-2">
                <span className="text-xs text-center rounded-2xl px-3 py-1 bg-cyan-50 text-cyan-800 font-normal">
                  Marketing
                </span>
                <span className="text-xs text-center rounded-2xl px-3 py-1 bg-cyan-50 text-cyan-800 font-normal">
                  Design
                </span>
                <span className="text-xs text-center rounded-2xl px-3 py-1 bg-cyan-50 text-cyan-800 font-normal">
                  Branding
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
