import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navigation extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
    return(
        
        <MDBNavbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">HomeGuru</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                        
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">Apply</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem ><Link to='/teacher'> As Teacher</Link></MDBDropdownItem>
                                <MDBDropdownItem ><Link to='/student'> As Student</Link></MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
        
    );
}}

export default Navigation;