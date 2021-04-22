import React, {useState} from 'react'
import Footer from '../Footer'
import AdminCrownIcon from '../../assets/images/admin-crown-icon.png';
import Header from '../Header';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import ItemManagement from './ItemManagement';

function AdminHome() {
    const [currentTab, setCurrentTab] = useState("dashboard");

    return (
        <React.Fragment>
            <Header />
            <section id="__user-profile-home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <div className="user-info">
                                <div className="content">
                                    <div className="image">
                                        <img src={AdminCrownIcon} alt="AdminCrownIcon"/>
                                    </div>
                                    <div className="text">
                                        <h1>Ian Vincent</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="user-menu">
                                <div className="border-top border-right ml-4 pr-4" style={{height: "100%"}}>
                                    <ul>
                                        <li onClick={() => setCurrentTab("dashboard")} style={{ color: currentTab == "dashboard" ? "black" : null }}>
                                            Dashboard
                                        </li>
                                        <li onClick={() => setCurrentTab("user-management")} style={{ color: currentTab == "user-management" ? "black" : null }}>
                                            User Management
                                        </li>
                                        <li onClick={() => setCurrentTab("item-management")} style={{ color: currentTab == "item-management" ? "black" : null }}>
                                            Item Management
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-content">
                                <div className="border-top pl-4 mr-4">
                                {
                                    currentTab == "dashboard" ?
                                        <Dashboard />
                                    :
                                    currentTab == "user-management" ?
                                        <UserManagement />
                                    :
                                    currentTab == "item-management" ?
                                        <ItemManagement />
                                    :
                                        null
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

export default AdminHome
