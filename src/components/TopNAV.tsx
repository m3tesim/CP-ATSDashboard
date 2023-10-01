import Tag from "../assets/topNAVIcons/Tag.svg";
import Mail from "../assets/topNAVIcons/Mail.svg";
import UserCheck from "../assets/topNAVIcons/User_Check.svg";
import UserClose from "../assets/topNAVIcons/User_Close.svg";
import UserVoice from "../assets/topNAVIcons/User_Voice.svg";
import { useState } from "react";
import Dropdown from "../components/DropDown";

const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3", value: "" },
];

const Opportunities = [
  { label: "Applied", value: "1745" },
  { label: "Shortlisted", value: "1453" },
  { label: "Technical Interview", value: "123" },
  { label: "Opportunity Browsing", value: "243" },
  { label: "Video Interview I", value: "25" },
  { label: "Video Interview II", value: "25" },
  { label: "Video Interview III", value: "25" },
  { label: "Video Interview III", value: "25" },
  { label: "Offer", value: "25" },
  { label: "Withdrawn", value: "25" },
];
const icons = [Tag, Mail, UserCheck, UserClose, UserVoice];
type Option = { label: string; value?: string };

export default function TopNAV() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option | null) => {
    setSelectedOption(option);
  };

  return (
    <nav className="w-full  mb-8">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-blue-800 text-xl font-semibold">
            London Internship Program
          </h1>
          <p>London</p>
        </div>
        <div className="flex mx-8">
          <div className="flex place-items-center">
            <Dropdown
              options={Opportunities}
              onSelect={handleSelect}
              title="Opportunity Browsing"
              classNames="bg-white text-blue-800 font-semibold flex gap-8"
            />
          </div>
          <div className="flex gap-2 mx-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-12 h-12 m-auto flex justify-center place-items-center bg-white rounded-xl p-3"
              >
                <img src={icon} width={24} height={24} />
              </div>
            ))}
          </div>

          <div className="flex place-items-center">
            <Dropdown
              options={options}
              onSelect={handleSelect}
              title="Move To Video Interview I"
              classNames="bg-blue-800 text-white font-normal"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
