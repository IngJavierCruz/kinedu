import { Area } from './components/Area';
import { Milestones } from './components/Milestones';

function App() {
  return (
    <div className="container container-wrapper">
      <div className="card shadow">
        <Area className="card-body" />
        <Milestones className="card-body" />
        <button className="btn-next">Next</button>
      </div>
    </div>
  );
}

export default App;
