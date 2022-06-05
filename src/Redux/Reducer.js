const initState = [
  { id: 0, description: "coding", done: false },
  { id: 1, description: "meeting my mom", done: true },
];
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((elt) => elt.id != action.payload);
    case "UPDATE_TASK":
      return state.map((elt) => {
        if (elt.id == action.payload.id) {
          return {
            ...elt,
            description: action.payload.description,
            done: false,
          };
        } else {
          return elt;
        }
      });
      case 'DONE_TASK': return state.map((elt)=>{
          if(elt.id==action.payload &&elt.done==false) {
              return {...elt,done:true}
          }
          else{
            return {...elt,done:false}
          }
      })

    default:
      return state;
  }
};
export default Reducer;
