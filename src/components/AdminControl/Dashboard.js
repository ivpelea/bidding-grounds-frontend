import React from 'react'
import { Link } from 'react-router-dom'
import AdminUserMngmntIcon from '../../assets/images/admin-user-mngmnt-icon.png'
import AdminItemShowroomIcon from '../../assets/images/admin-item-showroom-icon.png'
import AdminSiteIncomeIcon from '../../assets/images/admin-site-income-icon.png'
import AdminSiteReportIcon from '../../assets/images/admin-site-report-icon.png'

function Dashboard(props) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-4">
                    <div className="site-report-card">
                        <div className="header">
                            <div className="icon">
                                <img src={AdminUserMngmntIcon} alt="AdminUserMngmntIcon"/>
                            </div>
                            <div className="text">
                                <h1>user accounts</h1>
                            </div>
                        </div>
                        <div className="content">
                            <p>current user account:</p>
                            <Link to="#user-management" className="total" onClick={() => {props.setCurrentTab("user-management")}}>32</Link>
                        </div>
                        <div className="content">
                            <p>user registered this month:</p>
                            <p className="total"><Link to="#user-management" className="total" onClick={() => {props.setCurrentTab("user-management")}}>32</Link></p>
                        </div>
                    </div>
                    <div className="site-report-card">
                        <div className="header">
                            <div className="icon">
                                <img src={AdminItemShowroomIcon} alt="AdminItemShowroomIcon"/>
                            </div>
                            <div className="text">
                                <h1>Item showroom</h1>
                            </div>
                        </div>
                        <div className="content">
                            <p>current item count:</p>
                            <p className="total"><Link to="#item-management" className="total" onClick={() => {props.setCurrentTab("item-management")}}>50</Link></p>
                        </div>
                        <div className="content">
                            <p>live item count:</p>
                            <p className="total"><Link to="#item-management" className="total" onClick={() => {props.setCurrentTab("item-management")}}>48</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="site-report-card">
                        <div className="header">
                            <div className="icon">
                                <img src={AdminSiteIncomeIcon} alt="AdminSiteIncomeIcon"/>
                            </div>
                            <div className="text">
                                <h1>site income</h1>
                            </div>
                        </div>
                        <div className="content">
                            <p>total income for this month:</p>
                            <p className="total">$3392.42</p>
                        </div>
                        <div className="content">
                            <p>total income for this year:</p>
                            <p className="total">$3212.22</p>
                        </div>
                        <div className="content">
                            <p>total income since launch:</p>
                            <p className="total">$32.1231</p>
                        </div>
                    </div>
                    <div className="site-report-card">
                        <div className="header">
                            <div className="icon">
                                <img src={AdminSiteReportIcon} alt="AdminSiteReportIcon"/>
                            </div>
                            <div className="text">
                                <h1>site report</h1>
                            </div>
                        </div>
                        <div className="content">
                            <p>total visits for this day:</p>
                            <p className="total">32</p>
                        </div>
                        <div className="content">
                            <p>total visits for this week:</p>
                            <p className="total">32</p>
                        </div>
                        <div className="content">
                            <p>total visits for this month:</p>
                            <p className="total">32</p>
                        </div>
                        <div className="content">
                            <p>total visits for this year:</p>
                            <p className="total">32</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard
