import Arrow from "../assets/Arrow-Chevron_Right.svg";
import Calendar from "../assets/Calendar_Check.svg";
import Document from "../assets/File_Document.svg";
import House from "../assets/House.svg";
import Settings from "../assets/Interface-Settingssetting.png";
import Share from "../assets/Share.svg";
import Notebook from "../assets/Notebook.svg";
import Users_Group from "../assets/Users_Group.svg";
import Heart from "../assets/Heart.svg";

export default function SideNAV() {
  return (
    <nav className="z-10 w-20 h-full sticky bg-white shadow-md text-center justify-center flex py-12 place-items-center">
      <div className="flex flex-col gap-12 m-auto justify-center place-items-center">
        <div className="w-12 h-12 m-auto flex justify-center place-items-center bg-gray-300 rounded-3xl"></div>

        <div className="w-12 h-12 m-auto flex justify-center place-items-center bg-indigo-100 rounded-xl p-3">
          <img src={House} width={24} height={24} />
        </div>
        <img src={Users_Group} width={24} height={24} />
        <img src={Calendar} width={24} height={24} />

        <img src={Share} width={24} height={24} />

        <img src={Document} width={24} height={24} />
        <img src={Notebook} width={24} height={24} />
        <img src={Heart} width={24} height={24} />
        <img src={Arrow} width={24} height={24} />
        <div className="flex  flex-col gap-12 mt-56 place-items-center">
          <img src={Settings} width={24} height={24} />
          <div className="w-8 h-8 m-auto flex  justify-center  place-items-center bg-indigo-100 rounded-2xl p-3 text-xs text-indigo-300 ">
            AS
          </div>
        </div>
      </div>
    </nav>
  );
}
