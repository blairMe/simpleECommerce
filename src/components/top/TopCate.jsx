import React from 'react';
import TopCart from './TopCart';

const TopCate = () => {
    return (
      <>
        <section className="topcat background">
          <div className="container">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <i className="fa fa-border-all"></i>
                <h2>Top Category</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
              </div>
            </div>
          <TopCart />
          </div>
        </section>
      </>
    );
}

export default TopCate;