import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '../src/styles/Global.scss';
import ItemIcon from './assets/images/7-2-motorcycle-png-clipart.png'
import FireIcon from './assets/images/001-fire.png'

function App() {
  return (
    <React.Fragment>
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-item text-center">
                <div className="header text-center">
                  <p>INTRODUCING THIS MONTH'S</p>
                  <h1>TOP ITEM</h1>
                  <hr/>
                </div>
                <div className="content">
                  <div className="item-title">
                    <p>HARLEY DAVIDSON</p>
                  </div>
                  <div className="item-featured-image">
                    <img src={ItemIcon} alt="ItemIcon"/>
                  </div>
                  <div className="item-details">
                    <div className="header">
                      <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                    </div>
                    <div className="price-bid-time">
                      <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                    </div>
                    <div className="uploader-name">
                      <p>MARVIN@ADMIN</p>
                    </div>
                  </div>
                  <div className="item-actions">
                    <div>
                      <button className="btn btn-primary">BID NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hot-items">
                <div className="hot-item-header text-center">
                  <img src={FireIcon} alt="FireIcon"/>
                  <p>TODAY'S <span style={{color: "red"}}>HOT ITEMS</span></p>
                  <hr/>
                </div>
                <div className="item-list">
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card text-center">
                    <div className="header text-center">
                      <p>HARLEY DAVIDSON</p>
                      <hr/>
                    </div>
                    <div className="content">
                      {/* <div className="item-title">
                        <p>HARLEY DAVIDSON</p>
                      </div> */}
                      <div className="item-featured-image">
                        <img src={ItemIcon} alt="ItemIcon"/>
                      </div>
                      <div className="item-details">
                        {/* <div className="header">
                          <p>RETAILS FOR $50. GET IT HERE FOR LESS</p>
                        </div> */}
                        <div className="price-bid-time">
                          <p><span className="price">$ 2958.36</span> <span className="divider">|</span> <span className="bid-time">00:00:10</span></p>
                        </div>
                        <div className="uploader-name">
                          <p>MARVIN@ADMIN</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <button className="btn btn-primary">BID NOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
