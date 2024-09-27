import ApiComponent from "./02_api/02_fetch-then";
import AxiosCallComponent from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-emoji";
import Container from "./03_data-component/01_rendering-component";
import Weather from "./03_data-component/02_weather-promise";
import WeatherAwait from "./03_data-component/03_weater-await";


function App() {
  return (
    <>
      {/* <ApiComponent/> */}
      {/* <AxiosCallComponent/> */}
      {/* <EmojiContainer/> */}
      {/* <Container/> */}
      {/* <Weather/> */}
      <WeatherAwait/>
    </>
  );
}

export default App;
