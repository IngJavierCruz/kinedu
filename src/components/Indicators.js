import { genereKeyDummy } from './../helpers/genereKeyDummy';
export const Indicators = ({ color, title, areaPrevieOrNext }) => {
  const { title: titleSecundary, isFirst } = areaPrevieOrNext || {};
  const classIndicators = ["indicator--left", "indicator--rigth"];

  const indicatorActive = { 
    style: { backgroundColor: "#ffffff",  color },
    title
  };

  const indicatorSecundary = { 
    style: {
      backgroundColor: "transparent", 
      color: "#ffffff"
    },
    title: titleSecundary,
  };
  const indicators = [
    ...((isFirst 
      && [indicatorSecundary, indicatorActive]) 
      || [indicatorActive, indicatorSecundary]
    )].flat();

  return (
    <div className="indicator">
      {
        indicators.map((x, i) => 
        <div key={ genereKeyDummy() } className={`indicator-item ${classIndicators[i]}`} style={x.style}>
          { x.title }
          </div>
        )
      }
    </div>
  )
}