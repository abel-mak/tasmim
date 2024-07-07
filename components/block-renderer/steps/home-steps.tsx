import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dataToArray = (data: any = {}) => {
  const stepCount = data.step;
  const res = [];

  for (let i = 0; i < stepCount; i++) {
    res.push({
      title: data[`step_${i}_title`],
      value: data[`step_${i}_value`],
    });
  }
  return res;
};

export const HomeSteps = ({ data }) => {
  const stepsArray = dataToArray(data);
  const colorIcon = [
    {
      color: "#01b9e6",
      icon: "calendar",
    },
    {
      color: "#F4801E",
      icon: "laptop",
    },
    {
      color: "#84C441",
      icon: "keyboard",
    },
    {
      color: "#8B7ACB",
      icon: "paper-plane",
    },
    {
      color: "#39bcab",
      icon: "shield-halved",
    },
  ];

  return (
    <div className="max-w-5xl mb-4 sm:mx-auto mx-5">
      {stepsArray.map((step, index) => {
        const indexPair = index % 2 != 0;
        const leftDivBorder = !indexPair
          ? "sm:border-r-[5px] border-l-[10px]"
          : "sm:border-l-[5px] border-r-0 border-l-[10px]";
        const rightDivBorder = !indexPair
          ? "sm:border-l-[5px] border-l-[10px]"
          : "sm:border-r-[5px] sm:border-l-0 border-l-[10px] border-r-0";
        return (
          <div
            className={`flex flex-wrap h-[280px] sm:h-48 md:h-40 lg:h-40 
          ${indexPair ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`${leftDivBorder} border-slate-300 sm:border-l-0 sm:flex-1 basis-full flex 
            ${indexPair ? "sm:justify-start" : "sm:justify-end"}`}
            >
              <div
                className="border-[10px] border-slate-300 rounded-[50%] w-28 h-28 flex justify-center  my-auto
          items-center sm:mr-5 ml-5"
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: colorIcon[index]?.color }}
                >
                  {index + 1}
                </span>
              </div>
            </div>
            <div className={`${rightDivBorder} border-slate-300 flex-1`}>
              <div className="flex shadow-xl mx-5  h-full">
                <div
                  style={{ backgroundColor: colorIcon[index]?.color }}
                  className={`flex justify-center items-center px-4 lg:px-6`}
                >
                  <FontAwesomeIcon
                    icon={`${colorIcon[index]?.icon || ""}` as IconProp}
                    className="text-5xl lg:text-7xl text text-white"
                  />
                </div>
                <div className="px-3 sm:py-1 py-4">
                  <h3
                    style={{ color: colorIcon[index]?.color }}
                    className={`font-bold `}
                  >
                    {step.title}
                  </h3>
                  <p>{step.value}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
