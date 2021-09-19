import { genereKeyDummy } from './../helpers/genereKeyDummy';
import { changeAreaSkillById } from './../actions/indicator';
import { useDispatch } from 'react-redux';


export const Indicators = ({ id, color, title, areaPrevieOrNext }) => {

  const dispatch = useDispatch();

  const { title: titleSecundary, isFirst } = areaPrevieOrNext || {};
  const classIndicators = ["indicator--left", "indicator--rigth"];

  const indicatorActive = { 
    id,
    style: { backgroundColor: "#ffffff",  color },
    title
  };

  const indicatorSecundary = { 
    ...areaPrevieOrNext,
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

  const navegateSection = (id) => {
    dispatch( changeAreaSkillById( id ));
  }

  return (
    <div className="indicator">
      {
        indicators.map((x, i) => 
        <div 
          key={ genereKeyDummy() } 
          className={`indicator-item pointer ${classIndicators[i]}`} 
          style={x.style}
          title="navegar"
          onClick={ () => navegateSection(x.id) }
        >
          { x.title }
          </div>
        )
      }
    </div>
  )
}