import {React, Component} from 'react';
import { NavLink}  from 'react-router-dom'
import './Navbar.css';
import logo from '../../../img/BE.png';

class Navbar extends Component{
    render(){
        return(
            <header>
                <div className="menu-logo">
                    <img src={logo} alt="Beautiful You logo"/>
                </div>
                <nav clasName="topmenu">
                    <ul className="nav">
                        
                        <li>
                            <NavLink exact={true} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} to='/products'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} to='/contact'>Contact</NavLink>
                        </li>
                    </ul>

                    <div className="cart">
                    <i title="shopping cart" class="fas fa-shopping-cart fa-2x"></i>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar
