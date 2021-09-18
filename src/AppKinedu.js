import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Milestones } from './components/Milestones';
import { Area } from './components/Area';

export const AppKinedu = () => {
  return (
    <Provider store={store}>
      <div className="container container-wrapper">
        <div className="card shadow">
          <Area className="card-body" />
          <Milestones className="card-body" type={"physical"} />
          <button className="btn-next">Next</button>
        </div>
      </div>
    </Provider>
  );
}