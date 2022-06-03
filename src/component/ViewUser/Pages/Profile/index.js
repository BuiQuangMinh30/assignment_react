import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../DetailView/Home/Header';
import './style.css';
import { Link } from 'react-router-dom';
import avatar from '../../../../image/unnamed.jpg'
import {Form} from 'react-bootstrap'

const index = () => {
  return (
    <>
    <Header/>
     <div className='container emp-profile'>
         <Form>
             <div className='row mt-4'>
                 <div className='col-md-4'>
                     <img src={avatar} alt='' srcSet='' width='100%'/>
                     
                 </div>
                 <div className='col-md-8'>
                     <div className='profile-text row'>
                         <div className='col-md-4'>hehe</div>
                         <div className='col-md-8'>hahahahaah</div>
                     </div>
                 </div>
             </div>
           </Form> 
           
     </div>
    </>
  );
};

export default index;
