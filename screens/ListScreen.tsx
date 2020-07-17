import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import EmptyView from '../components/EmptyView';
import { AntDesign } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';

export default ({ navigation }) => {
  const colorScheme = useColorScheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'リスト',
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerIconButton}
          onPress={() => alert('add!')}
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

  return (
    <View style={styles.container}>
      <EmptyView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconButton: {
    paddingHorizontal: 15,
  },
});
