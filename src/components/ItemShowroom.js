import React from 'react'
import ItemIcon from '../assets/images/7-2-motorcycle-png-clipart.png'
import BookmarkIcon from '../assets/images/bookmark-icon.png'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function ItemShowroom() {
  const elements = ["0","0","0","0","0","0","0","0"]
  const elements1 = ["0","0","0","0","0","0","0","0","0","0","0","0"]
  return (
    <React.Fragment>
      <Header />
      <section id="__item-show-room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="header">
                <h1>ITEM SHOWROOM</h1>
                <hr />
                <p>START BUYING FOR LESS. BID NOW.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="top-item">
                <div className="item-bookmark">
                  <img src={BookmarkIcon} alt="BookmarkIcon" />
                </div>
                <div className="item-details">
                  <div className="header">
                    <h3>HARLEY DAVIDSON</h3>
                    <hr />
                  </div>
                  <div className="item-featured-image">
                    <Link to="item-highlight" >
                      <img src={ItemIcon} alt="ItemIcon" /> 
                    </Link>
                  </div>
                  <div className="item-actions">
                    <div>
                      <button className="btn btn-primary">BID NOW</button>
                    </div>
                  </div>
                </div>
                <div className="item-retail-price">
                  <p>RETAILS FOR $500	</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="item-list">
                {
                  elements.map((value, index) => {
                    return (
                      <div className="item-card text-center">
                        <div className="item-bookmark">
                          <img src={BookmarkIcon} alt="BookmarkIcon" />
                        </div>
                        <div className="item-details">
                          <div className="header text-center">
                            <p>HARLEY DAVIDSON</p>
                            <hr />
                          </div>
                          <div className="content">
                            <div className="item-featured-image">
                              <Link to="item-highlight" >
                                <img src={ItemIcon} alt="ItemIcon" /> 
                              </Link>
                            </div>
                            <div className="item-details">
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
                        <div className="item-retail-price">
                          <p>RETAILS FOR $500	</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="row more-items">
            <div className="col-lg-12">
              <div className="item-list">
              {
                elements1.map((value, index) => {
                  return (
                    <div className="item-card text-center">
                      <div className="item-bookmark">
                        <img src={BookmarkIcon} alt="BookmarkIcon" />
                      </div>
                      <div className="item-details">
                        <div className="header text-center">
                          <p>HARLEY DAVIDSON</p>
                          <hr />
                        </div>
                        <div className="content">
                          <div className="item-featured-image">
                            <Link to="item-highlight" >
                              <img src={ItemIcon} alt="ItemIcon" /> 
                            </Link>
                          </div>
                          <div className="item-details">
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
                      <div className="item-retail-price">
                        <p>RETAILS FOR $500	</p>
                      </div>
                    </div>
                  )
                })
              }  
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>

  )
}

export default ItemShowroom
