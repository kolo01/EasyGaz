import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import { TamaguiProvider } from '@tamagui/core'
import { config } from '@/tamagui.config';
import Toast from 'react-native-toast-message';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={config}>
      <Toast />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="slide/index" options={{ headerShown: false }} />
        <Stack.Screen name="slide/slide2" options={{ headerShown: false }} />
        <Stack.Screen name="slide/slide3" options={{ headerShown: false }} />
        <Stack.Screen name="slide/slide4" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="logged/index" options={{ headerShown: false, gestureEnabled: false, headerLeft: () => null}} />
        <Stack.Screen name="logged/near" options={{ headerShown: false }} />
        <Stack.Screen name="logged/map" options={{ headerShown: false }} />
        <Stack.Screen name="logged/compte" options={{ headerShown: false }} />
        <Stack.Screen name="logged/selected" options={{ headerShown: false }} />
        <Stack.Screen name="logged/details" options={{ headerShown: false }} />
        <Stack.Screen name="logged/paiement" options={{ headerShown: false }} />

        
        <Stack.Screen name="seller/index" options={{ headerShown: false }} />
        <Stack.Screen name="seller/confirmation" options={{ headerShown: false }} />
        <Stack.Screen name="seller/details" options={{ headerShown: false }} />
        <Stack.Screen name="seller/map" options={{ headerShown: false }} />
        <Stack.Screen name="seller/selectLivreur" options={{ headerShown: false }} />
        <Stack.Screen name="seller/yourStock" options={{ headerShown: false }} />
        

        <Stack.Screen name="settings/editProfils" options={{ headerShown: false }} />
        <Stack.Screen name="logged/confirmation" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </TamaguiProvider>
    </ThemeProvider>
   
  );
}
