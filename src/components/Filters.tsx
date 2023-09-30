import Document from "../assets/File_Document.svg";
import ArrowDown from "../assets/ArrowDown.svg";

const filtersArray = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity Filter",
  "Advanced Filter",
];
export default function Filters() {
  return (
    <section className="bg-white p-4 pb-0 mt-6 rounded-md">
      <div className="border-b border-solid flex justify-between place-items-center pb-4">
        <p>Filters</p>

        <p className="text-sm font-light">0 Selected</p>
      </div>

      {filtersArray.map((i) => (
        <div className="border-b border-solid flex justify-between place-items-center py-4">
          <div className="flex gap-2">
            <img src={Document} width={24} height={24} />
            <p>{i}</p>
          </div>
          <div className="text-indigo-800 font-light">
            <img src={ArrowDown} width={24} height={24} />
          </div>
        </div>
      ))}
    </section>
  );
}
