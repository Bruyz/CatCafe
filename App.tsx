import { Dispatch, SetStateAction, useState } from 'react'
import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';


export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page,setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    RubikMonoOne_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }

  if (page == 1){
    return <Tela1 setPage={setPage} />
  } else if (page == 2) {
    return <Tela2 setPage={setPage} />
  }

}

