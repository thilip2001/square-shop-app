import React, { useContext } from 'react'
import { Cartcontext } from '../context/Context';

const CartButton = ({type, payload, icon}) => {
      const GlobalState = useContext(Cartcontext);
      const dispatch = GlobalState.dispatch;
  return (
    <button
      type="button"
      variant="light"
      className="qty-btn"
      onClick={() => dispatch({ type: type, payload: payload })}
    >
     {icon}
    </button>
  );
}

export default CartButton