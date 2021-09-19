import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MilestoneScreen } from './components/Milestone/MilestoneScreen';

export const AppKinedu = () => {
  return (
    <Provider store={store}>
      <MilestoneScreen />
    </Provider>
  );
}