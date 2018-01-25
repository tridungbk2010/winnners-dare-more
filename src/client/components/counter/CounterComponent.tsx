import * as React from 'react';
import { RootState } from '../../../rootReducer';
import { connect, Dispatch } from 'react-redux';
import {
  CounterAction,
  decrement,
  incrementAsync,
} from '../../actions/counter';

interface CProps {
  countTest: number;
  loading: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const CounterComponent = ({
  loading,
  countTest,
  onIncrement,
  onDecrement,
}: CProps) => {
  return (
    <div className="counter-container">
      <button onClick={onIncrement}>Increment</button>
      {loading ? <h1>...Loading</h1> : <h1>{countTest}</h1>}
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = ({ counter }: RootState) => ({
  countTest: counter.counter,
  loading: counter.loading,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  onIncrement: () => dispatch(incrementAsync()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
