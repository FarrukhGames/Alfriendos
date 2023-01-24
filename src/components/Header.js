import logo from '../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <h1 className="title">Allfriendos</h1>
        </header>
    );
}

export default Header;