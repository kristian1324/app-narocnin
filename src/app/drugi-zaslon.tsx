import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme';

export default function DrugiZaslon() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Navigacija je uspela.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
