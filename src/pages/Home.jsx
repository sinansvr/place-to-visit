import DestinationList from "../components/DestinationList"
import Cities from "../components/Cities"
import { cities } from "../helper/cityData"

const Home = () => {
  return (
    <main className="text-center mt-2">
      
      <img src="./img/bannerlogo.png" alt="türkiye banner" width={"25%"}/>
      <h1 className="display-5 text-danger">VISIT TURKIYE</h1>
      <Cities cities={cities}/>
      <DestinationList />
    </main>
  )
}

export default Home
