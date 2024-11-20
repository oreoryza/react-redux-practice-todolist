import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  SUCCESS_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
} from "./action";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  isSuccess: false,
  isEdit: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null, isSuccess: false };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUCCESS_TODO:
        return { ...state, isSuccess: true, loading: false };
    case EDIT_TODO:
        return { ...state, isEdit: true, loading: false}
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
