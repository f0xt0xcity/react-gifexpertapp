import React from 'react';
import '../index.css'

export const GifGridItem = ({ title, id, url}) => {
    
  return (
    <div className="card animate__animated animate__bounce animate__jello">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  );
};
