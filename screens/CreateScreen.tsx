import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { Text } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions/todos';
import { Todo } from '../store/reducers/todos';
import { HeaderBackButton } from '@react-navigation/stack';

export const CreateScreen: React.FC<any> = ({ navigation }) => {
  const dispatch = useDispatch();

  const colorScheme = useColorScheme();

  const [inputTodo, setInputTodo] = useState<string>('');

  const prevTodo = useSelector((state: any) =>
    state.todos?.todos ? state.todos.todos[state.todos.todos.length - 1] : null
  ) as Todo;

  const onSubmit = () => {
    if (!inputTodo) {
      return;
    }
    dispatch(addTodo({ todoValue: inputTodo, prevTodo }));
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Todoを作成',
      headerLeft: (props) => {
        return Platform.OS === 'ios' ? (
          <TouchableOpacity {...props}>
            <Text
              style={styles.buttonText}
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
            >
              キャンセル
            </Text>
          </TouchableOpacity>
        ) : (
          <HeaderBackButton {...props} />
        );
      },
      headerRight: () => {
        return (
          <TouchableOpacity onPress={onSubmit} disabled={!inputTodo}>
            <Text
              style={[
                styles.buttonText,
                styles.addButtonText,
                {
                  opacity: inputTodo ? 1 : 0.5,
                },
              ]}
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
            >
              追加
            </Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigator, onSubmit]);

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        style={textInputStyle(colorScheme)}
        onChangeText={(text) => setInputTodo(text)}
        value={inputTodo}
        placeholder="ToDoを入力…"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const textInputStyle = (colorScheme: 'light' | 'dark') => ({
  borderRadius: 5,
  backgroundColor: Colors[colorScheme].background,
  color: Colors[colorScheme].text,
  borderWidth: 1,
  borderColor: Colors[colorScheme].border,
  paddingHorizontal: 10,
  height: 40,
  fontSize: 20,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  buttonText: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  addButtonText: {
    fontWeight: 'bold',
  },
});

export default CreateScreen;
