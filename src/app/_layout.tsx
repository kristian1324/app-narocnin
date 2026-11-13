import { Stack } from 'expo-router';

import { colors } from '@/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Začetni zaslon' }} />
      <Stack.Screen name="drugi-zaslon" options={{ title: 'Drugi zaslon' }} />
    </Stack>
  );
}
