import React from 'react'
import AdminUserMngmntIcon from '../../assets/images/admin-user-mngmnt-icon.png'
import ExportCSVIcon from '../../assets/images/export-csv-icon.png'
import Shield1Icon from '../../assets/images/061-shield-1.png'
import Shield2Icon from '../../assets/images/069-shield-2.png'
import MailIcon from '../../assets/images/050-mail.png'
import Shield1Icon1 from '../../assets/images/061-shield-1-1.png'
import Shield2Icon1 from '../../assets/images/069-shield-2-1.png'
import MailIcon1 from '../../assets/images/050-mail-1.png'
import {Table} from 'react-bootstrap';
import { CSVLink, CSVDownload } from "react-csv";
import moment from 'moment';

function UserManagement() {
    // <td>1</td>
    //                             <td>Mark</td>
    //                             <td>Otto</td>
    //                             <td>@mdo</td>
    //                             <td className="active">ACTIVE</td>
    //                             <td>Mark</td>
    //                             <td>Otto</td>
    //                             <td><img src={Shield1Icon1} alt="Shield1Icon1"/></td>
    //                             <td><img src={Shield2Icon1} alt="Shield2Icon1"/></td>
    //                             <td><img src={MailIcon1} alt="MailIcon1"/></td>
    // <th>date joined</th>
    //                             <th>user id</th>
    //                             <th>username</th>
    //                             <th>email address</th>
    //                             <th>account status</th>
    //                             <th>bid points</th>
    //                             <th>number of wins</th>
    //                             <th><img src={Shield1Icon} alt="Shield1Icon"/></th>
    //                             <th><img src={Shield2Icon} alt="Shield2Icon"/></th>
    //                             <th><img src={MailIcon} alt="MailIcon"/></th>
    const users = [
        {
            "date_joined": "10/10/21",
            "user_id": "69",
            "username": "Ian Pelea",
            "email": "ian@email.com",
            "account_status": "ACTIVE",
            "bid_points": "666",
            "num_wins": "1000",
        },
        {
            "date_joined": "10/10/21",
            "user_id": "69",
            "username": "Ian Pelea",
            "email": "ian@email.com",
            "account_status": "ACTIVE",
            "bid_points": "666",
            "num_wins": "1000",
        },
        {
            "date_joined": "10/10/21",
            "user_id": "69",
            "username": "Ian Pelea",
            "email": "ian@email.com",
            "account_status": "ACTIVE",
            "bid_points": "666",
            "num_wins": "1000",
        }
    ]
    return (
        <div className="row admin-management">
            <div className="col-lg-12">
                <div className="site-report-card">
                    <div className="header">
                        <div className="icon">
                            <img src={AdminUserMngmntIcon} alt="AdminUserMngmntIcon"/>
                        </div>
                        <div className="text">
                            <h1>user accounts</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="site-report-card pt-1">
                    <div className="content">
                        <p>HERE'S A LIST OF THE ITEMS UPLOADED TO THE SITE. ADD, REMOVE, AND RE-ORGANIZE HERE.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="table-action-wrap text-lg-right">
                    <div className="action-text">
                        <p>EXPORT AS CSV FILE:</p>
                    </div>
                    <div className="icon">
                        <CSVLink 
                            data={users}
                            filename={`users-${moment().format("MM-DD-YYYY")}.csv`}
                        >
                            <img src={ExportCSVIcon} alt="ExportCSVIcon"/>
                        </CSVLink>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="data-list-table mt-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>date joined</th>
                                <th>user id</th>
                                <th>username</th>
                                <th>email address</th>
                                <th>account status</th>
                                <th>bid points</th>
                                <th>number of wins</th>
                                <th><img src={Shield1Icon} alt="Shield1Icon"/></th>
                                <th><img src={Shield2Icon} alt="Shield2Icon"/></th>
                                <th><img src={MailIcon} alt="MailIcon"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.date_joined}</td>
                                            <td>{value.user_id}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td className="active">{value.account_status}</td>
                                            <td>{value.bid_points}</td>
                                            <td>{value.num_wins}</td>
                                            <td><img src={Shield1Icon1} alt="Shield1Icon1"/></td>
                                            <td><img src={Shield2Icon1} alt="Shield2Icon1"/></td>
                                            <td><img src={MailIcon1} alt="MailIcon1"/></td>
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

export default UserManagement
