import { Todo, TodoAction } from '../reducers/todos';
import { useSelector } from 'react-redux';

export const addTodo = ({
  todoValue,
  prevTodo,
}: {
  todoValue: string;
  prevTodo: Todo;
}): TodoAction => {
  return {
    type: 'ADD_TODO',
    todo: {
      value: todoValue,
      id: prevTodo ? prevTodo.id + 1 : 0,
    },
  };
};

export const removeTodo = ({ todo }: { todo: Todo }): TodoAction => {
  return {
    type: 'REMOVE_TODO',
    todo,
  };
};
