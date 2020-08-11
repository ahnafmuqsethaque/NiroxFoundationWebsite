import React, { Component } from 'react';
import '../styles/footer.css';

var style = {
  backgroundColor: "rgb(236, 196, 149)",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  color: "rgb(59, 61, 61)"
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              <p>NIROXarts 2020</p>
          </div>
      </div>
  )
}

export default Footer
