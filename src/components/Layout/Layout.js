import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import classes from "./Layout.css";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideBar from "../UI/Navigation/SideBar/SideBar"

class Layout extends Component {

    state= {
        showSidebar :false
    }

    handleSidebarShow = () => {
        let show = this.state.showSidebar;
        this.setState({showSidebar: !show});
    }

    render() {
        return (
            <Aux>
                <SideBar show={this.state.showSidebar} closed={this.handleSidebarShow}></SideBar>
                <Toolbar clicked={this.handleSidebarShow}></Toolbar>
                <main className={classes.main}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout;