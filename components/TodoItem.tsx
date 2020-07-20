import React from 'react';
import { Todo } from '../store/reducers/todos';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from './Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type Props = {
  todo: Todo;
  onPress: (todo: Todo) => {};
};

const TodoItem: React.FC<Props> = ({ todo, onPress }) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableHighlight
      underlayColor={Colors[colorScheme].panelActive}
      style={[
        styles.container,
        {
          backgroundColor: Colors[colorScheme].panel,
        },
      ]}
      onPress={() => {
        onPress(todo);
      }}
    >
      <Text
        style={styles.todoValue}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
      >
        {todo.value}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  todoValue: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default TodoItem;
