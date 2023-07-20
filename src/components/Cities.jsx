import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { useState } from "react"
import AddModal from "./AddModal"

const Cities = ({cities,setDestinations,destinations}) => {
  const [search, setSearch] = useState("")
  const [show, setShow] = useState(false);
  const [cityName,setCityName]=useState("")

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const filteredCities= cities.filter((item)=>item.cityName.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))

 

  return (
    <Container className="p-2">
      <input onChange={handleChange} type="text" className="form-control" placeholder="Search a destination place..." />
      <h3 className="display-6 mt-5 title" >
        Journey Destinations
      </h3>
      <h6 className=" mb-5">Where would you like to visit in Turkey?</h6>

      <Row className="justify-content-center">
      {
        filteredCities.map(({id,cityName,photo,location})=>(
          <Col key={id} xs={6} sm={4} md={3}>
            <img 
            src={photo} 
            alt={cityName} 
            className="img-thumbnail city-img" 
            onClick={()=>{setShow(true)
            setCityName(cityName)}}/>

            <h5>{cityName}</h5>
            <h6>{location}</h6>

          </Col>
        ))
      }
      <AddModal 
        cityName={cityName} 
        show={show} 
        handleClose={handleClose} 
        cities={cities} 
        destinations={destinations} 
        setDestinations={setDestinations}/>
        
      </Row>
    </Container>
  )
}

export default Cities
