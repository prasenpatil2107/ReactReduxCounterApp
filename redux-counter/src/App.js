import logo from './logo.svg';
import './App.css';
import { useSelector ,useDispatch } from 'react-redux';
import { decNumber, incNumber } from './actions';

function App() {

  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <button onClick={()=>dispatch(decNumber())}> - - </button>
      <input type='text' value={myState} />
      <button onClick={()=>dispatch(incNumber())}> + + </button>
    </div>
  );
}

export default App;
