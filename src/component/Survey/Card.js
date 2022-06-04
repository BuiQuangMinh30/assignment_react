import React from 'react'
import "./Card.css"
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "./../../image/t-shirt.png"
import { useHistory } from "react-router-dom";


function Card({name}) {
    console.log('name',name)
    const history = useHistory();
    function navigate_to(docname){
        history.push("/survey/" + name.ID)

    }
    return (
        <div className="doc_card" onClick={(e)=>{
            console.log('e', e)
            // navigate_to(name.ID)
            navigate_to(name.ID)
            // console.log('e',e)
        }}>
             <img src={doc_image} className="doc_card_image"></img>
             <div className="doc_card_content">
                <h5 style={{overFlow:"ellipsis"}}>{name ? name.Description : " Tài liệu không có tiêu đề" }</h5>
                <div className="doc_content">
                    <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                    <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/> {name.CreatedAt}
                    </div>
                    
                     <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                </div>
             </div>
        </div>
       
    )
}

export default Card
