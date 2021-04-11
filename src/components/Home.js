import React from 'react'
import ItemIcon from '../assets/images/7-2-motorcycle-png-clipart.png'
import FireIcon from '../assets/images/001-fire.png'
import BookmarkIcon from '../assets/images/bookmark-icon.png'
import MoneyIcon from '../assets/images/money-icon.png'
import ClockIcon from '../assets/images/clock-icon.png'
import WinIcon from '../assets/images/win-icon.png'
import BidsIcon from '../assets/images/bids-icon.png'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <section id="__bidding-home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-item text-center">
                <div className="header text-center">
                  <p>INTRODUCING THIS MONTH'S</p>
                  <h1>TOP ITEM</h1>
                  <hr />
                </div>
                <div className="content">
                  <div className="item-title">
                    <p>HARLEY DAVIDSON</p>
                  </div>
                  <div className="item-featured-image">
                    <img src={ItemIcon} alt="ItemIcon" />
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
                  <img src={FireIcon} alt="FireIcon" />
                  <p>TODAY'S <span style={{ color: "red" }}>HOT ITEMS</span></p>
                  <hr />
                </div>
                <div className="item-list">
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                          <img src={ItemIcon} alt="ItemIcon" />
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <div className="how-bid-works text-center">
                <div className="header">
                  <p>HOW BIDDING GROUNDS WORK</p>
                  <hr />
                </div>
                <div className="content">
                  <div className="detail">
                    <div className="icon">
                      <img src={MoneyIcon} alt="MoneyIcon" />
                    </div>
                    <div className="text-content">
                      <p>EACH AUCTION STARTS AT $0. <span>AND EACH BID PLACED ADDS 1 PENNY TO THE  AUCTION PRICE.</span></p>
                    </div>
                  </div>
                  <div className="detail">
                    <div className="icon">
                      <img src={ClockIcon} alt="ClockIcon" />
                    </div>
                    <div className="text-content">
                      <p>THE AUCTION CLOCK <span>RESTARTS FROM 10 SECONDS EVERYTIME SOMEONE BIDS.</span></p>
                    </div>
                  </div>
                  <div className="detail">
                    <div className="icon">
                      <img src={WinIcon} alt="WinIcon" />
                    </div>
                    <div className="text-content">
                      <p>IF NO NEW BIDS BEFORE THE CLOCK RUNS OUT, <span>THE LAST BIDDER WIN.</span></p>
                    </div>
                  </div>
                  <div className="detail">
                    <div className="icon">
                      <img src={BidsIcon} alt="BidsIcon" />
                    </div>
                    <div className="text-content">
                      <p>BEFORE YOU TAKE PART IN ANY AUCTION YOU NEED TO BUY BIDS. <span>BIDS ARE CURRENTLY ON SALE FOR 13 CENTS EACH.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="__item-show-room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="header">
                <h1>LIVE AUCTIONS</h1>
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
                    <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="item-list">
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
                        <img src={ItemIcon} alt="ItemIcon" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Home
