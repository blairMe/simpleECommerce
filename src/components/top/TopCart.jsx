import React from 'react'
import Tdata from './Tdata';

const TopCart = () => {
    return (
      <>
        {Tdata.map((value, index) => {
          return (
            <div className="box product" key={index}>
              <div className="nametop d_flex">
                <span className="tleft">{value.para}</span>
                <span className="tright">{value.desc}</span>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default TopCart;