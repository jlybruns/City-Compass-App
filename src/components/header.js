import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.svg'
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <Navbar color='primary' sticky='top' expand='md'>
            <NavbarBrand classname='ms-5' href='/'>
                <img src={Logo} alt='City Compass Logo' className='float-start' />
                <h1 className='mt-1'>City Compass</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                             Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                             About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                             Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

//Need to add the location of the files /about /contact otherwise it breaks

export default Header;
