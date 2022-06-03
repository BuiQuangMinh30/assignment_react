import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../Common/Chip';
import './style.css';

const BlogItem = ({
  blog: {
    doc_desc,
    title,
    document_name,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src="/assets/images/graphic-design-trends.png" alt='cover' />
      <Chip label={document_name} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{doc_desc}</p>
      <footer>
        <div className='blogItem-author'>
          <img src="/assets/images/make-it-personal.jpg" alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            {/* <p>{createdAt}</p> */}
          </div>
        </div>
        <Link className='blogItem-link' to={`/report/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
