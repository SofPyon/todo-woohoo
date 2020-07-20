import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function EmptyView() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        lightColor={Colors.light.muted}
        darkColor={Colors.dark.muted}
      >
        あれ、わくわくしてないの？
      </Text>
      <Text
        style={styles.body}
        lightColor={Colors.light.muted}
        darkColor={Colors.dark.muted}
      >
        右上の[+]をタップして{'\n'}
        ToDo を作成しましょう
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
});
