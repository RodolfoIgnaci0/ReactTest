import React from 'react'
import ImgNotFound from '../../assets/img/notFound.png';

const NotFound = () => (
  <div style={{display:`block`,textAlign:`center`}}>
    <img src={ImgNotFound} alt="no encontrado" />
  </div>
)

export default NotFound;