import { Navbar, NavbarBrand } from 'reactstrap';
import Logo from '../images/Logo.svg'

const Header = () => {
    
    return(
        <Navbar fixed='top' expand='md' className='nav'>
            <NavbarBrand classname='ms-5 bg-dark' href='/'>
                <img src={Logo} alt='City Compass Logo' className='float-start me-3' width='50px' height='50px'/>
                <h4 className='mt-2 brand'>City Compass</h4>
            </NavbarBrand>
        </Navbar>
    );
};

//Need to add the location of the files /about /contact otherwise it breaks

export default Header;
