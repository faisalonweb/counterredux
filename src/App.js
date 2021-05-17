import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';
import './App.css';



function App() {
  const counter = useSelector(state => state.counter);
  const loggedStatus = useSelector(state => state.islogged);
  const dispatch = useDispatch();

  const onClickDispatch = () => {
     dispatch({type:increment});
  }
  const onClickDispatchDE = () => {
    dispatch({type:decrement});
 }
  
  return (
    <div className="App">
      <div className="secApp">
      <div className="result"> 
     <h1>Counter : {counter}</h1>
     </div>  
     <div className="btn-class">
     <button className="add-btn" onClick={onClickDispatch}>+</button>
     <button className="del-class" onClick={onClickDispatchDE}>-</button>
     </div>
     <div className="status">
      {loggedStatus ? <h3>logged in</h3> : <h3>logged out</h3>} 
      </div>
      </div>
    </div>
  );
}

 export default App;

