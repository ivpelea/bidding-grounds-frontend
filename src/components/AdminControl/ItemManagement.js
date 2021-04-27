import React from 'react'
import AdminUserMngmntIcon from '../../assets/images/admin-user-mngmnt-icon.png'
import AdminItemShowroomIcon from '../../assets/images/admin-item-showroom-icon.png'
import ExportCSVIcon from '../../assets/images/export-csv-icon.png'
import Shield1Icon from '../../assets/images/061-shield-1.png'
import Shield2Icon from '../../assets/images/069-shield-2.png'
import MailIcon from '../../assets/images/050-mail.png'
import Shield1Icon1 from '../../assets/images/061-shield-1-1.png'
import Shield2Icon1 from '../../assets/images/069-shield-2-1.png'
import MailIcon1 from '../../assets/images/050-mail-1.png'
import Shipped from '../../assets/images/027-shipped.png'
import Shipped2 from '../../assets/images/027-shipped2.png'
import DeleteItem from '../../assets/images/delete-item.png'
import DisableItem from '../../assets/images/disable-icon.png'
import ItemSettings from '../../assets/images/item-settings.png'
import ImportProductIcon from '../../assets/images/import-product-icon.png'
import ExportProductIcon from '../../assets/images/export-product-icon.png'
import AddItemIcon from '../../assets/images/add-item-icon.png'
import {Table} from 'react-bootstrap';
import { CSVLink, CSVDownload } from "react-csv";
import moment from 'moment';
import CSVReader from 'react-csv-reader'

function ItemManagement() {
    // <th>date | live</th>
    // <th>id</th>
    // <th>product name</th>
    // <th>retail price</th>
    // <th>cureent bid price</th>
    // <th>bid placed</th>
    // <th>sold to</th>
    // <th>bid status?</th>
    // <th>time | live</th>
    // <th>loop</th>
    const users = [
        {
            "date": "10/10/21",
            "id": "69",
            "product_name": "My Product",
            "retail_price": "$2000",
            "bid_price": "$2000",
            "bid_placed": "666",
            "sold_to": "Ian Pelea",
            "bid_stat": "SOLD",
            "time_live": "10/10/21",
            "loop": "NO",
        },
        {
            "date": "10/10/21",
            "id": "69",
            "product_name": "My Product",
            "retail_price": "$2000",
            "bid_price": "$2000",
            "bid_placed": "666",
            "sold_to": "Ian Pelea",
            "bid_stat": "SOLD",
            "time_live": "10/10/21",
            "loop": "NO",
        },{
            "date": "10/10/21",
            "id": "69",
            "product_name": "My Product",
            "retail_price": "$2000",
            "bid_price": "$2000",
            "bid_placed": "666",
            "sold_to": "Ian Pelea",
            "bid_stat": "SOLD",
            "time_live": "10/10/21",
            "loop": "NO",
        },{
            "date": "10/10/21",
            "id": "69",
            "product_name": "My Product",
            "retail_price": "$2000",
            "bid_price": "$2000",
            "bid_placed": "666",
            "sold_to": "Ian Pelea",
            "bid_stat": "SOLD",
            "time_live": "10/10/21",
            "loop": "NO",
        },
    ]
    return (
        <div className="row admin-management">
            <div className="col-lg-12">
                <div className="site-report-card">
                    <div className="header">
                        <div className="icon">
                            <img src={AdminItemShowroomIcon} alt="AdminItemShowroomIcon"/>
                        </div>
                        <div className="text">
                            <h1>ITEM MANAGEMENT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="site-report-card pt-1">
                    <div className="content">
                        <p>HERE'S A LIST OF THE ITEMS UPLOADED TO THE SITE. ADD, REMOVE, AND RE-ORGANIZE HERE.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="table-action-wrap text-lg-right">
                    <div className="action-text">
                        <p>SEARCH: <input type="text" placeholder="ITEM NAME, ID, OR DESCRIPTION"/></p>
                    </div>
                    <div className="icon mr-2">
                        <img src={AddItemIcon} alt="AddItemIcon"/>
                    </div>
                    <div className="icon mr-2">
                        {/* <img src={ImportProductIcon} alt="ImportProductIcon"/> */}
                        {/* <label htmlFor="">test</label> */}
                        {/* <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} /> */}
                        <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
                        {/* <div class="overlay-layer">Upload photo</div> */}
                    </div>
                    <div className="icon">
                    
                        <CSVLink 
                            data={users}
                            filename={`products-${moment().format("MM-DD-YYYY")}.csv`}
                        >
                            <img src={ExportProductIcon} alt="ExportProductIcon"/>
                        </CSVLink>
                      
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="data-list-table mt-4">
              
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>date | live</th>
                                <th>id</th>
                                <th>product name</th>
                                <th>retail price</th>
                                <th>cureent bid price</th>
                                <th>bid placed</th>
                                <th>sold to</th>
                                <th>bid status?</th>
                                <th>time | live</th>
                                <th>loop</th>
                                <th><img src={Shipped2} alt="Shipped2"/></th>
                                <th><img src={DeleteItem} alt="DeleteItem"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.date}</td>
                                            <td>{value.id}</td>
                                            <td>{value.product_name}</td>
                                            <td>{value.retail_price}</td>
                                            <td >{value.bid_price}</td>
                                            <td>{value.bid_placed}</td>
                                            <td>{value.sold_to}</td>
                                            <td className="active">{value.bid_stat}</td>
                                            <td>{value.time_live}</td>
                                            <td>{value.loop}</td>
                                            <td><img src={Shipped} alt="Shipped" style={{width: "30px"}}/></td>
                                            <td><img src={ItemSettings} alt="ItemSettings"/><span className="mr-2"></span><img src={DisableItem} alt="DisableItem"/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ItemManagement
