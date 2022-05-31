import React,{useState,useEffect} from 'react'
import "./Mainbody.css"
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { IconButton } from '@material-ui/core';
import Card from "../Survey/Card" 
import axios from "axios";

function Mainbody() {
    const [files,setFiles]=useState([]);
  
    useEffect(() => {
        async function filenames(){
            
            var request = await axios.get("http://localhost:3000/survey")
            let files = request.data;
            console.log("files",files)
           
            setFiles(files)
            console.log('typeof', typeof(setFiles))
           
        }
        filenames()
        
    },[])

    
    return (
        <div className="mainbody">
            <div className="main_top">
              <div className="main_top_left" style={{fontSize:"16px",fontWeight:"500"}}>Recent forms</div>
             

                <div className="main_top_right">
                <div className="main_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone <ArrowDropDownIcon/></div>
                    <IconButton >
                       <StorageIcon style={{    fontSize: '16px',color:"black"}}/>
                    </ IconButton>
                    <IconButton >
                      <FolderOpenIcon style={{    fontSize: '16px',color:"black"}}/>
                    </ IconButton>
                </div>
            </div>
            <div className="main_docs">
                 {
                    files.map((ele,index)=>{
                        return (
                            <Card  key={index} name={ele}/>
                        )
                    })            
                 }
                 {/* <Card />    */}
            </div>
        </div>
    )
}

export default Mainbody
