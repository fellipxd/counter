export const ADD_AMOUNT = 'ADD_AMOUNT'
export const LESS_AMOUNT = 'LESS_AMOUNT'
export const RESET_AMOUNT = 'RESET_AMOUNT'

const initialState = {
  count: 0,
  name: 'Philip'
}
export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      
      return {
        ...state,
        counter: state.counter + action.count,
      }

      case LESS_AMOUNT:
        
      return {
        ...state - 1,
        counter:  state.counter - action.count,
      }

    case RESET_AMOUNT:
      return {
        ...state,
        counter: 0,
      }

    default:
      return state;
  }
}