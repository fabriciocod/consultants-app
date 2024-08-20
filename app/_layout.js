import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
    const [loaded, error] = useFonts({
        'JejuGothic-Regular' : require('../assets/fonts/JejuGothic-Regular.ttf')
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
  return <Slot />;
}
