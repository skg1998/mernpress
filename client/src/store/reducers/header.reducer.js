
export function headerReducer( action = {} , state ={sidebarShow: 'responsive'}){
  switch (action.type) {
    case 'set':
      return {...state}
    default:
      return state
  }
} 