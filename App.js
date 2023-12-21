import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";

export default function App() {
  // const getData = async() => {
  //   const { data } = await axios.get("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  //   console.log(data)
  // }

  // getData();

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
