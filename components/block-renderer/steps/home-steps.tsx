import { faCalendar, faCalendarAlt, faR, fas, faS, IconPrefix } from "@fortawesome/free-solid-svg-icons";
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
  const step = stepsArray[0];

  console.log(stepsArray);
  return (
    <div className="max-w-5xl mx-auto mb-4 flex flex-wrap">
      <div className="sm:border-r-[5px] border-l-[10px] border-slate-400 sm:border-l-0 sm:flex-1 basis-full flex sm:justify-end ">
        <div className="h-full border border-[10px] border-slate-400 rounded-full w-24 h-24 flex justify-center 
        items-center sm:mr-5 ml-5">
          <span className="text-3xl">1</span>
        </div>
      </div>
      <div className="sm:border-l-[5px] border-l-[10px] border-slate-400 flex-1">
        <div className="flex shadow-xl mx-5">
          <div className="flex-33 flex justify-center items-center px-4 lg:px-10 bg-blue-400">
            <FontAwesomeIcon  icon={faCalendar} className="text-4xl text text-white"/>
          </div>
          <div className="px-3 sm:py-1 py-4">
            <h3 className="text-blue-400 font-bold ">{step.title}</h3>
            <p>{step.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
