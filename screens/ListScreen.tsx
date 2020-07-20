import * as React from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import { Text, View, useThemeColor } from '../components/Themed';
import Colors from '../constants/Colors';
import EmptyView from '../components/EmptyView';
import { AntDesign } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../store/reducers/todos';
import TodoItem from '../components/TodoItem';
import { FlatList } from 'react-native-gesture-handler';
import { removeTodo } from '../store/actions/todos';

export default ({ navigation }) => {
  const colorScheme = useColorScheme();

  const todos = useSelector((store: any) => store.todos.todos) as Todo[];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'リスト',
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerIconButton}
          onPress={() => navigation.navigate('Create')}
        >
          <AntDesign
            name="pluscircleo"
            size={20}
            color={Colors[colorScheme].tint}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading, setIsLoading]);

  const dispatch = useDispatch();

  const onPressitem = React.useCallback(
    (todo: Todo) => {
      dispatch(removeTodo({ todo }));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onPress={() => {
                onPressitem(item);
              }}
            />
          )}
          style={styles.todosList}
          contentContainerStyle={styles.todosListContainer}
          keyExtractor={(todo) => todo.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
              tintColor={Colors[colorScheme].muted}
              colors={[Colors[colorScheme].muted]}
            />
          }
        />
      ) : (
        <EmptyView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerIconButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  todosList: {
    width: '100%',
  },
  todosListContainer: {
    padding: 15,
    alignItems: 'stretch',
  },
});
