import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ItemIcon from '../assets/images/7-2-motorcycle-png-clipart.png'
import BookmarkIcon from '../assets/images/bookmark-icon.png'

function ItemHighlight() {
    const elements = ['one', 'two', 'three'];
    return (
        <React.Fragment>
            <Header />
            <section id="__item-highlight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-3">
                            <div className="selected-item">
                                <div className="item-list">
                                    <div className="item-card text-center">
                                        <div className="item-details">
                                            <div className="header text-center">
                                            <h2>HARLEY DAVIDSON</h2>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 pb-2">
                            <div className="selected-item-details">
                                <div className="text text-center">
                                    <p>TEST</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="other-items">
                                <div className="item-list">
                                    {
                                        elements.map((value, index) => {
                                        return <React.Fragment>
                                                    <div className="item-card text-center mb-2">
                                                        <div className="item-details">
                                                            <div className="header text-center">
                                                            <h5>HARLEY DAVIDSON</h5>
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
                                                    </div>
                                                </React.Fragment>
                                        })
                                    }
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

export default ItemHighlight
