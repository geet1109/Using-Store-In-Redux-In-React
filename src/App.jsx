import { useDispatch,useSelector } from 'react-redux';
import {withdrawAmount} from './Redux/actions'
import './App.css'

export default function App() {
  const balance=useSelector((state)=>state.balance);
  const dispatch=useDispatch();

  const handleWithdraw=(amount)=>{
    dispatch(withdrawAmount(amount));
  }
  return (
    <div className='maindiv'>
      {/* <h1>Hii</h1> */}
      <div className='photo'></div>
      <label> Hello Jii! </label>
      <div id="totalAmount">
        ${balance.toLocaleString()} <br/>
        <span>Total Amount</span>
      </div>
     <div className='btn-container'>
       <div className='text'>Clicking this button decreases the total amount by 10,000 above </div>
        <div>
          <button onClick={()=>handleWithdraw(10000)} className='btn'>
            WITHDRAW $10,000</button>
          <button onClick={()=>handleWithdraw(5000)} className='btn'>
            WITHDRAW $5,000</button>
        </div>
     </div>
    </div>
  );
}
