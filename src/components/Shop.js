import React from 'react'
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../state/Index';
import { useSelector } from 'react-redux'

const Shop = () => {
const dispatch =useDispatch();
const balance=useSelector(state=>state.amount)

const {withdrawMoney,depositMoney}=bindActionCreators(actionCreator,dispatch);

return (
    <div>
        <h2>Deposit/WithDraw</h2>
        {/**
         *  <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreator.depositMoney(100))}}>+</button>
 */ }

        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance : {(balance)} Rupees.
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>

    </div>
  )
}

export default Shop