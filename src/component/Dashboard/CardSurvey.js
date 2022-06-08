import React,{useRef} from "react";
// import "./Card.css"
import StorageIcon from "@material-ui/icons/Storage";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc_image from "./../../image/t-shirt.png";
import { useHistory } from "react-router-dom";
import { CardGroup, Card, Row, Col, Nav, Sonnet, Tab } from "react-bootstrap";
import moment from 'moment';


export default function CardSurvey({ data }) {
  console.log("CardSurvey",data)
  // const inputDate = new Date().toISOString();

function timeCalc(date) {
  return moment(date).fromNow()
}
function TimeCalc({date}) {
  console.log("TimeCalc",timeCalc(date))
  return <h4>{timeCalc(date)}</h4>
}

  const history = useHistory();
  function navigate_to(data) {
    history.push("/survey/" + data);
  }
  return (

        <Col md={3} sx={4}  onClick={(e)=>{navigate_to(data.id)}}>
          <Card.Img variant="top" src="https://thuthuatoffice.net/wp-content/uploads/2021/08/googledocs.webp" />
          <Card.Body>
            <Card.Title>{data ? data.document_name : " Tài liệu không có tiêu đề" }</Card.Title>
            <Card.Text>
            {data ? data.doc_desc : " Tài liệu không có tiêu đề" }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><TimeCalc date={data.endDate}/> </small>
          </Card.Footer>
        </Col>
       
    // </div>
  );
}
