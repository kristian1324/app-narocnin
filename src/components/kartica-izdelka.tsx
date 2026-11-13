import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme';

type KarticaIzdelkaProps = {
  naslov: string;
  opis: string;
};

export function KarticaIzdelka({ naslov, opis }: KarticaIzdelkaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{naslov}</Text>
      <Text style={styles.description}>{opis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.card,
    shadowColor: colors.text,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
});
