import { useState } from "react";

type Props = {
  options: Option[];
  onSelect: (option: Option | null) => void;
  classNames: string;
  title: string;
};

type Option = { label: string; value?: string };
const Dropdown = ({ options, onSelect, classNames, title }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`inline-flex justify-between px-4 text-sm ${classNames} rounded-2xl focus:outline-none  flex place-items-center`}
        >
          <span className="border-white border-r-2 w-48 border-solid py-3 pr-4 h-full">
            {selectedOption ? selectedOption.label : title}
          </span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute mt-2 w-full shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block px-4 text-left py-4 border-b border-solid border-gray-100  w-full text-sm font-semibold text-gray-600 hover:bg-indigo-50 hover:text-blue-800 justify-between flex"
                role="menuitem"
              >
                <span>{option.label}</span>
                {option.value && (
                  <span className="bg-gray-100 rounded-xl px-2 py-1 hover:bg-indigo-200 hover:text-indigo-600">
                    {option.value}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
