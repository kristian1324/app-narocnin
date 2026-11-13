import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { KarticaIzdelka } from '@/components/kartica-izdelka';
import { colors } from '@/theme';

export default function ZacetniZaslon() {
  const [stevec, setStevec] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Začetni zaslon</Text>
        <Text style={styles.counter}>Števec: {stevec}</Text>
        <Button
          title="Povečaj števec"
          onPress={() => setStevec((trenutnaVrednost) => trenutnaVrednost + 1)}
          color={colors.primary}
        />
        <KarticaIzdelka
          naslov="Izdelek"
          opis="To je primer kartice izdelka z naslovom in kratkim opisom."
        />
        <Link href="/drugi-zaslon" style={styles.link}>
          Odpri drugi zaslon
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 24,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  counter: {
    color: colors.text,
    fontSize: 18,
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 8,
  },
});
