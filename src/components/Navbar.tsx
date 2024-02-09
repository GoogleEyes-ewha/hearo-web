import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import loginButton from '../assets/images/loginButton.png';


const Navbar: React.FC = () => {
    return (
        <nav>
            <div>
                <Link to="/main">
                    <img src={logo} alt='로고'/>
                </Link>
                <Link to="/login"> {/* Link 컴포넌트를 사용하여 로그인 페이지로 이동 */}
                    <img src={loginButton} alt='로그인 버튼'/>
                </Link>          
            </div>
        </nav>
    );
};

export default Navbar;