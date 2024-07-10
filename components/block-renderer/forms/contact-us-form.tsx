import { useState } from "react";
import { v4 } from "uuid";
import { CallToActionBtn } from "../call-to-action-btn";
import { Heading } from "../heading";
import { getInputsArray } from "./forms-utils";


let inputArray = null;
export const ContactUsForm = ({ data }) => {
  /**
 * added this because of re-rendering causes getInputsArray
 * to be recalled and new id are generated for keys which mess up DOM
 */
  inputArray = (!inputArray) ? getInputsArray(data) : inputArray;

  return (
    <div
      style={{ backgroundColor: "#f2f0ff" }}
      className="p-7"
    >
      <Heading attributes={{ content: 'Envoyez-nous un message', level: 4 }} />
      <Heading attributes={{
        content: 'Vous cherchez un partenaire pour développer votre projet? Vous êtes au bon endroit !',
        level: 6,
        textColor: 'slate-500'
      }} />
      <h4></h4>
      <div className="grid grid-cols-2 gap-8 text-slate-600">

        {inputArray.map((input) => {
          if (input.type == "simple")
            return (
              <input
                key={input.id}
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
                key={input.id}
                className="bg-transparent border-[#ccc6f8] resize-none 
              border-b-2 focus:outline-none basis-full"
                placeholder={input.placeholder}
                name={input.name}
              />
            );
          }
          else if (input.type == "select") {
            const options = input.options
            const [isFocused, setIsFocused] = useState(false);
            const [value, setValue] = useState('');

            const handleFocus = () => {
              setIsFocused(true);
            };
            const handleBlur = () => {
              setTimeout(() => setIsFocused(false), 300);
            };
            const handleDoubleClick = () => {
              setValue('')
            }

            return (
              <div className="relative ">
                <input key={input.id} placeholder={input.placeholder} className="
                        focus:outline-none bg-transparent border-[#ccc6f8] 
                        border-b-2 cursor-default w-full"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onDoubleClick={handleDoubleClick}
                  value={value}
                  name={input.name}
                  readOnly />
                <div className={`absolute mr-1 ${isFocused ? 'block' : 'hidden'} w-[200%] `}>
                  {options.map(({opt, id}) => {
                    return <div key={id} onClick={() => { setValue(opt) }} className={` cursor-default pl-2 hover:bg-blue-500 bg-white
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
      <CallToActionBtn data={{ label: 'Envoyer' }}></CallToActionBtn>
    </div>
  );
};
