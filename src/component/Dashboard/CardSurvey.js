import React from "react";
// import "./Card.css"
import StorageIcon from "@material-ui/icons/Storage";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc_image from "./../../image/t-shirt.png";
import { useHistory } from "react-router-dom";
import { CardGroup, Card, Row, Col, Nav, Sonnet, Tab } from "react-bootstrap";

export default function CardSurvey({ name }) {
  console.log("CardSurvey",name)
  const history = useHistory();
  function navigate_to(docname) {
    history.push("/survey/" + docname);
  }
  return (
    <div  onClick={(e)=>{
      // navigate_to(name.ID)
      navigate_to(name.id)
      // console.log('e',e)
  }}>
     
        <Card>
          <Card.Img variant="top" src="https://thuthuatoffice.net/wp-content/uploads/2021/08/googledocs.webp" />
          <Card.Body>
            <Card.Title>{name ? name.document_name : " Tài liệu không có tiêu đề" }</Card.Title>
            <Card.Text>
            {name ? name.doc_desc : " Tài liệu không có tiêu đề" }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
       
    </div>
  );
}
