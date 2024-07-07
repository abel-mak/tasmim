import { useState } from "react";
import { v4 } from "uuid";
import { getInputsArray } from "./forms-utils";
import styles from './home-form.module.css'
export const HomeForm = ({ data }) => {
  const inputArray = getInputsArray(data);

  return (
      <div className="flex flex-col xl:w-1/2 mx-auto justify-center text-white h-full">
        {inputArray.map((input) => {
          if (input.type == "simple")
            return (
          <div key={v4()} className="flex flex-col">
            <label className="text-[#373a8e] font-bold">{input.placeholder}</label>
            <input
              className={`bg-transparent border-2  my-2
            focus:outline-none px-2 font-bold ${styles.myInput}`}
              type="text"
              name={input.name}
            />
          </div>
            );
          else if (input.type == "textarea") {
            return (
              <div key={v4()} className="flex flex-col">
                <label className="text-[#373a8e] font-bold">{input.placeholder}</label>
                <textarea
                  className={`bg-transparent resize-none 
                border-2  flex-1 my-2 focus:outline-none px-2 font-bold ${styles.myTextarea}`}
                  name={input.name}
                />
              </div>
            );
          } else if (input.type == "select") {
            const options = input.options.replace(/(\r\n|\n)/g, "").split(";");
            const [isFocused, setIsFocused] = useState(false);
            const [value, setValue] = useState("");

            const handleFocus = () => {
              setIsFocused(true);
            };

            const handleBlur = () => {
              setTimeout(() => setIsFocused(false), 300);
            };
            return (
              <div key={v4()} className="flex flex-col" >
                <label className="text-[#373a8e] font-bold">{input.placeholder}</label>
                <input
                  className={`
                        focus:outline-none px-2 font-bold bg-transparent 
                        border-2  flex-1 my-2 cursor-default ${styles.myInput}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={value}
                  name={input.name}
                  readOnly
                />
                <div
                  className={`absolute mr-1 ${isFocused ? "block" : "hidden"} top-[12rem]`}
                >
                  {options.map((opt) => {
                    return (
                      <div
                        onClick={() => {
                          setValue(opt);
                        }}
                        className={` cursor-default pl-2 hover:bg-blue-500 bg-white text-black
                   hover:text-white`}
                    key={v4()}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
  );
};
