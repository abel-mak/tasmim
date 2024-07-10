import { v4 } from "uuid";

export const getInputsArray = (data: { [key: string]: any }) => {
  const inputCount = data?.text_input || 0;
  const res = [];
  for (let i = 0; i < inputCount; i++) {
    res.push({
      placeholder: data[`text_input_${i}_placeholder`],
      type: data[`text_input_${i}_type`],
      name: data[`text_input_${i}_name`],
      required: data[`text_input_${i}_required`] !== "0",
      options: data[`text_input_${i}_options`]
        .replace(/(\r\n|\n)/g, "")
        .split(";")
        .map((opt: string) => ({
          opt,
          id: v4(),
        })),
      order: Number(data[`text_input_${i}_order`]),
      id: v4(),
    });
  }
  return res;
};
