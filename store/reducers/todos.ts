export type Todo = {
  value: string;
  id: number;
  is_done: boolean;
};

export type TodosState = {
  todos: Todo[];
};

export type TodoAction = {
  type: 'ADD_TODO' | 'REMOVE_TODO' | 'TOGGLE_DONE';
  todo: Todo;
};

export type ClearAllAction = {
  type: 'CLEAR_ALL';
};

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action: TodoAction | ClearAllAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => (todo as Todo).id !== action.todo.id
        ),
      };
    // case 'TOGGLE_DONE':
    //   return {
    //     ...state,
    //     todos: state.todos.map(
    //       (todo) => todo.id === action.todo.id ? (todo as Todo).is_done
    //     ),
    //   };
    case 'CLEAR_ALL':
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default reducer;
