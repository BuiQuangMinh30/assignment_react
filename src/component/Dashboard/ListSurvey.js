import React, { useState, useEffect } from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import CardSurvey from "./CardSurvey";
import axios from "axios";
import {
  Container,
  Button,
  Navbar,
  Row,
  Col,
  Nav,
  CardGroup,
  Tab,
} from "react-bootstrap";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const listItems = []
export default  function PaginatedItems({ itemsPerPage, listItems,listFiles }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(listFiles);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function filenames() {
      // var request = await axios.get("https://localhost:44334/api/surveys")
      var request = await axios.get("http://localhost:3000/survey/");

      let files = request.data;
      setFiles(files);
    }
    filenames();
  }, []);
  // files.map((ele,index)=>{
  //   listItems.push(index+1);
  // })
  // console.log('listItems',listItems)

  useEffect(() => {
    // console.log('hehe')
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(listItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listItems.length / itemsPerPage));
  }, [listItems, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListSurvey listFiles={listFiles} currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function ListSurvey({listFiles, currentItems}) {
  return (
    <>
      <div>
        <Container>
          <Row>
            {currentItems.map((ele, index) => {
              return (
                <Col style={{ float: "left" }} md={4} sm={4}>
                  <CardSurvey className="col-4" key={index} name={ele} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
