import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false // скрывает заголовок для всех экранов
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

