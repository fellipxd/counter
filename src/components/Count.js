import React from 'react'
import { connect } from 'react-redux';
import { ADD_AMOUNT, LESS_AMOUNT, RESET_AMOUNT } from '../reducers';










const mapDispatchToProps = dispatch => ({
    addCount: (count) => dispatch({ type: ADD_AMOUNT, count }),
    lessCount: (count) => dispatch({type:LESS_AMOUNT, count}),
    resetCount: () => dispatch({type:RESET_AMOUNT})
  })
const CountComponent = ({addCount, resetCount, lessCount}) => {
    return (
        <div>
            <button onClick={()=> lessCount(1)}>-</button>
            <button onClick={resetCount} >Reset Count</button>
            <button onClick={()=> addCount(1)}>+</button>
        </div>
    )
}



export default connect(null, mapDispatchToProps)(CountComponent);
