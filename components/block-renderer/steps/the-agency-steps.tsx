import { ArrowSvg } from "./svgs/arrow-svg"
import { BubbleSvg } from "./svgs/bubble-svg"
import { dataToArray } from "./utils";

const getBubbleColor = (index: number) => {
  switch (index) {
    case 0:
      return {
        topColor: ' rgb(149,229,255)',
        botColor: 'rgb(56,72,149)'
      }
    case 1:
      return {
        topColor: 'rgb(149,255,241)',
        botColor: 'rgb(107,94,233) '
      }
    case 2:
      return {
        topColor: ' rgb(228,142,192)',
        botColor: 'rgb(221,96,168)'
      }
    case 3:
      return {
        topColor: 'rgb(255,254,148)',
        botColor: 'rgb(244,122,20)'
      }
    default:
      return "rgb(56,72,149)"
  }
}

const getColor = (index: number) => {
  switch (index) {
    case 1:
      return 'rgb(107,94,233)'
    case 2:
      return 'rgb(221, 96, 168)'
    case 3:
      return 'rgb(244,122,20)'
    default:
      return "rgb(56,72,149)"
  }
}

export const TheAgencySteps = ({ data }) => {
  const stepsArray = dataToArray(data);

  return <div className="max-w-5xl mx-auto flex justify-center sm:flex-nowrap flex-wrap">
    {
      stepsArray.map((step, index) => {
        const indexPair = index % 2;
        const containerDiv = (!indexPair) ? 'sm:flex-col-reverse flex-col' : 'flex-col'
        const rotate = (!indexPair) ? 'sm:rotate-180' : 'rotate-0'
        const {topColor, botColor} = getBubbleColor(index);
        return <div className={`sm:w-48 flex ${containerDiv} basis-full`}>
          <div className={`flex justify-center relative h-36 ${rotate} ${(indexPair) ? 'm-2' : ''}`}>
            <span className={`absolute text-4xl top-8 font-bold text-white ${rotate}`}>{index + 1}</span>
            <BubbleSvg topColor={topColor} botColor={botColor}></BubbleSvg>
          </div>
          <div className={`${(indexPair) ? '' : 'mb'}`}>
            <ArrowSvg color={getColor(index)}></ArrowSvg>
          </div>
          <div className={`h-36 flex justify-center text-2xl font-bold
          ${(!indexPair) ? 'sm:items-end' : ''}`}>
            <span className="py-4">{step.title}</span>
          </div>
        </div>
      })
    }

  </div>
}
