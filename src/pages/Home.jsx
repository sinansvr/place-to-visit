import DestinationList from "../components/DestinationList"
import Cities from "../components/Cities"
import { cities, journeyData } from "../helper/cityData"
import { useState } from "react"

const Home = () => {

  const [destinations, setDestinations] = useState(journeyData)

  return (
    <main className="text-center mt-2">
      
      <img src="./img/bannerlogo.png" alt="türkiye banner" width={"25%"}/>
      
      <Cities cities={cities} destinations={destinations} setDestinations={setDestinations} />
      <DestinationList destinations={destinations} setDestinations={setDestinations} />
    </main>
  )
}

export default Home
