/*
action - an object with 2 fields:
  1. (MANDATORY) type - the type of the action (AS A STRING)
  2. (OPTIONAL) payload: the payload of the action
*/

export default function appReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      console.log("state", state);
      return [...state, action.payload];
    case "DELETE":
      return state.filter((product) => product.id != action.payload);

    default:
      return state;
  }
}
