import React from 'react';

const PortfolioItems = ({ items }) => {
  return items.map((item) => (
  <div className={`column ${item.category}`} key={item.title} style={{display: 'block'}}>
    <div className="content">
      <a href={item.link}>
        <img className="content-Image" src={item.image} alt={item.alt} />
        <div className="content-Text">
          <h4>
            {item.hasFafa ? (<span>{item.title} <i className="fa fa-link" /></span>) : item.title }
          </h4>
          <p style={{ marginTop: '-10px' }}>{item.description}</p>
        </div>
        </a>
    </div>
    
  </div>
  ))
}

export default PortfolioItems;