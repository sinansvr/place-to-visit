import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { useState } from "react"

const Cities = ({cities}) => {
  const [search, setSearch] = useState("")

// console.log(cities)

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const filteredCities= cities.filter((item)=>item.cityName.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))

  // console.log(filteredCities)
  

  return (
    <Container className="p-2">
      <input onChange={handleChange} type="text" className="form-control" placeholder="Search city in Türkiye..." />
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Cities
      </h3>

      <Row className="justify-content-center">
      {/* {doctorData.map(({id,img,dep,name})=>(
        <Col key={id} xs={6} sm={4} md={3} >
          <img src={img} alt={name} className="img-thumbnail doctor-img"  onClick={()=>{
            setShow(true)
            setDrName(name)}} />
          <h5>{name}</h5>
          <h6>{dep}</h6>
        </Col>
      ))} */}
      {
        filteredCities.map(({id,cityName,photo,location})=>(
          <Col key={id} xs={6} sm={4} md={3}>
            <img src={photo} alt={cityName} className="img-thumbnail city-img"/>
            <h5>{cityName}</h5>
          <h6>{location}</h6>

          </Col>
        ))
      }
        
      </Row>
    </Container>
  )
}

export default Cities
