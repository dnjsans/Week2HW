// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";
// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};
// Initial State
const initialState = {
  todo: [
    { id: 1, title: "react1", body: "react과제", isDone: false },
    { id: 2, title: "react2", body: "react과제", isDone: true },
  ],
};
// Reducer
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      }; //push

    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todos) => todos.id !== action.payload),
      };

    case CHANGE_TODO:
      return {
        ...state,
        todo: state.todo.map((todos) => {
          if (todos.id === action.payload) {
            return {
              ...todos,
              isDone: !todos.isDone,
            };
          } else {
            return todos;
          }
        }),
      };
    default:
      return state;
  }
};

export default todo;
// export default reducer
