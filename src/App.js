import { Area } from './components/Area';
import { Milestones } from './components/Milestones';

function App() {
  return (
    <div className="container container-wrapper">
      <div className="card shadow">
        <Area className="card-body" />
        <Milestones className="card-body" />
      </div>
    </div>
  );
}

export default App;
