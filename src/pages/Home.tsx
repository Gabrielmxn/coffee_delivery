import { CoffeeMain } from "../components/Coffee";
import { HeaderContent } from "../components/HeaderContent";
import { TitleComponent } from "../components/TitleComponent";


export function Home(){
  return(
    <>
      <TitleComponent title="Home"/>
      <HeaderContent />
      <CoffeeMain />
    </>
  )
}