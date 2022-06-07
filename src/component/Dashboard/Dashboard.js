import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "./Boostrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Row, Col, Nav, Sonnet, Tab } from "react-bootstrap";
import Header from "../SurveyList/Header";
import Mainbody from "../SurveyList/Mainbody";
import Card from "../Survey/Card";
import ListSurvey from "./ListSurvey";
import PaginatedItems from "./ListSurvey";
import Templates from "../SurveyList/Templates";
import ChartSurvey from "./ChartSurvey";
import axios from "axios";


export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const listItems = []
  const arrMonth =[];
  useEffect(() => {
    async function filenames() {
      // var request = await axios.get("https://localhost:44334/api/surveys")
      var request = await axios.get("http://localhost:3000/survey/");

      let files = request.data;
      setFiles(files);
    }
    filenames();
  }, []);
  files.map((ele,index)=>{
      listItems.push(index+1);
    })
    files.map((file,index)=>{
      arrMonth.push((new Date(file.endDate)))
    })
  return (
    <>
     <Header/>
      <div className="wrapper" style={{marginTop: "30px", backgroundColor: "#F4F4F9", minHeight:"100vh"}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="create_survey">
          <Row>
            <Col sm={3} style={{backgroundColor: "#efe9e9", minHeight:"100vh"}}>
              <Nav variant="pills" className="flex-column">
              <Nav.Item>
                  <Nav.Link eventKey="create_survey">Create Survey</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">Survey Report</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">List Survey</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="create_survey"><Templates/></Tab.Pane>
                <Tab.Pane eventKey="first"> <ChartSurvey arrMonth={arrMonth}/></Tab.Pane>
                <Tab.Pane eventKey="second">
                     {/* <Card/> */}
                     <PaginatedItems listFiles={files} listItems={listItems} itemsPerPage={4}/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
