import React, {useState} from 'react'
import Footer from '../Footer'
import AdminCrownIcon from '../../assets/images/admin-crown-icon.png';
import Header from '../Header';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import ItemManagement from './ItemManagement';
import { Link } from 'react-router-dom';

function AdminHome() {
    const [currentTab, setCurrentTab] = useState(window.location.toString().split('#')[1]);
    
    const showUserManagement = () => {
        // alert(text);
    }
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
                                        <li onClick={() => setCurrentTab("dashboard")} >
                                            <Link style={{ color: currentTab == "dashboard" ? "black" : null }} to="#dashboard">Dashboard</Link>
                                        </li>
                                        <li onClick={() => setCurrentTab("user-management")} >
                                            
                                            <Link style={{ color: currentTab == "user-management" ? "black" : null }} to="#user-management">User Management</Link>
                                        </li>
                                        <li onClick={() => setCurrentTab("item-management")} >
                                            <Link style={{ color: currentTab == "item-management" ? "black" : null }} to="#item-management">Item Management</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-content">
                                <div className="border-top pl-4 mr-4 mb-5">
                                {
                                    currentTab == "dashboard" ?
                                        <Dashboard setCurrentTab={setCurrentTab} />
                                    :
                                    currentTab == "user-management" ?
                                        <UserManagement />
                                    :
                                    currentTab == "item-management" ?
                                        <ItemManagement />
                                    :
                                        <Dashboard setCurrentTab={setCurrentTab} />
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
