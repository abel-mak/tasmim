import { useState } from "react";
import { v4 } from "uuid";
import { Heading } from "../heading";
import { getInputsArray } from "./forms-utils";


export const ContactUsForm = ({ data }) => {
  const inputArray = getInputsArray(data);
  console.log(inputArray);
  return (
    <div
      style={{ backgroundColor: "#f2f0ff" }}
      className="p-7"
    >
      <Heading attributes ={{ content: 'Envoyez-nous un message', level: 4}}/>
      <Heading attributes ={{ 
        content: 'Vous cherchez un partenaire pour développer votre projet? Vous êtes au bon endroit !', 
        level: 6,
        textColor: 'slate-500'}}/>
      <h4></h4>
      <div className="grid grid-cols-2 gap-8 text-slate-600">

        {inputArray.map((input) => {
          if (input.type == "simple")
            return (
              <input
                key={v4()}
                className="bg-transparent border-[#ccc6f8] border-b-2
              focus:outline-none"
                type="text"
                placeholder={input.placeholder}
                name={input.name}
              />
            );
          else if (input.type == "textarea") {
            return (
              <textarea
                key={v4()}
                className="bg-transparent border-[#ccc6f8] resize-none 
              border-b-2 focus:outline-none"
                placeholder={input.placeholder}
                name={input.name}
              />
            );
          }
          else if (input.type == "select") {
            const options = input.options.replace(/(\r\n|\n)/g, '').split(';')
            const [isFocused, setIsFocused] = useState(false);
            const [value, setValue] = useState('');

            const handleFocus = () => {
              setIsFocused(true);
            };

            const handleBlur = () => {
              setTimeout(() => setIsFocused(false), 300);
            };
            return (
              <div>
                <input placeholder={input.placeholder} className="
                        focus:outline-none bg-transparent border-[#ccc6f8] 
                        border-b-2 cursor-default"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={value}
                  name={input.name}
                  readOnly />
                <div className={`absolute mr-1 ${isFocused ? 'block' : 'hidden'} `}>
                  {options.map((opt) => {
                    return <div key={v4()} onClick={() => { setValue(opt) }} className={` cursor-default pl-2 hover:bg-blue-500 bg-white
                   hover:text-white`}
                    >
                      {opt}
                    </div>
                  })}
                </div>
              </div>)
          }
        })}
      </div>
    </div>
  );
};
