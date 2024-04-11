import { Dispatch, SetStateAction, useState } from 'react'
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';
import Navigation from './src/navigation';


export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export default function App() {
  return (
    <Navigation/>
  );

  //const [fontsLoaded] = useFonts({
    //RubikMonoOne_400Regular
  //});
  //if (!fontsLoaded) {
    //return null;
  //}

  
  

}

