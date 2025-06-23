import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './src/lib/firebase'
import { useAuthStore } from './src/stores/useAuthStore'
import { useEffect } from 'react';
import { Appearance } from 'react-native'
import { useThemeStore } from './src/shared/theme/useTheme'

useEffect(() => {
  const sub = Appearance.addChangeListener(() => {
    useThemeStore.getState().setSystemTheme()
  })
  return () => sub.remove()
}, [])

useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user)
  })
  return unsub
}, [])

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
