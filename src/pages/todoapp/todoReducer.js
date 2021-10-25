export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => item !== action.payload);
    case "toggle":
      const newState = [...state];
      const index = state.indexOf(action.payload);
      newState[index].done = true;
      return newState;
    default:
      return state;
  }
};
