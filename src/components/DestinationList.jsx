import Container from "react-bootstrap/Container"
import { Col, Row } from "react-bootstrap";
import {RiDeleteBin2Line} from 'react-icons/ri';

const DestinationList = ({destinations, setDestinations}) => {

  const handleDelete=(id)=>{
    setDestinations(destinations.filter((item)=>item.id !==id))

 }

 const handleDoubleClick = (id) =>{
  setDestinations(destinations.map((item)=>item.id == id ? {...item, consulted: !item.consulted}:item))
}
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Destination List
      </h3>

    {destinations.length<1 && <img src="./img/turkeylogo.png" width="100%" alt="img"/>}
      
    {destinations.map(({id,visitor,day,visited,city})=>(
      <div key={id} className= {visited ? "journey visited" : "journey"}
      onDoubleClick={()=>handleDoubleClick(id)}>

        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={12} md={6}>
          <h4>{visitor}</h4>
          <h5>{city}</h5>
          </Col>
          <Col>
          <h5>{day}</h5>
          </Col>
          <Col className="text-end">
          <RiDeleteBin2Line 
          onClick={()=>handleDelete(id)}
          className="text-danger fs-3 dltIcon" type="button" />
          </Col>
        </Row>

      </div>
    ))}
    

    </Container>
  )
}

export default DestinationList;
