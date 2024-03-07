import { Dispatch, SetStateAction, useState } from 'react'
import { Tela2 } from './src/screens/Tela2'
import { useFonts } from 'expo-font';

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page,setPage] = useState(2)
  let [fontsLoaded] = useFonts({
    
  })
  if (!fontsLoaded) {
    return null
  }
  return (
   <Tela2 setPage={setPage} />
  );
}

