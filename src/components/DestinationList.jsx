import Container from "react-bootstrap/Container"
import { journeyData} from "../helper/cityData";
import { Col, Row } from "react-bootstrap";
import {RiDeleteBin2Line} from 'react-icons/ri';

const DestinationList = () => {

  console.log(journeyData)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Destination List
      </h3>
      
    {journeyData.map(({id,visitor,day,visited,city})=>(
      <div key={id} className= {visited ? "journey visited" : "journey"}>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={12} md={6}>
          <h4>{visitor}</h4>
          <h5>{city}</h5>
          </Col>
          <Col>
          <h5>{day}</h5>
          </Col>
          <Col className="text-end">
          <RiDeleteBin2Line className="text-danger fs-3 dltIcon" type="button" />
          </Col>
        </Row>

      </div>
    ))}
    

    </Container>
  )
}

export default DestinationList;
