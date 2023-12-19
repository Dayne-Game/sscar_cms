import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import BK_LOGO from '../assets/bk_banner_2.png';
import SSCAR_LOGO from '../assets/logo_sscar_02.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 20;

            if (scrollPosition > threshold && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollPosition <= threshold && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    return (
        <div className="header" style={{ backgroundColor: (!isScrolled) ? 'transparent' : '#000' }}>
            <div className="main_container">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={SSCAR_LOGO} alt="SSCAR Logo" className="header_logo" role="button" onClick={() => navigate('/')} />

                    <div className="header_links">
                        <LinkContainer to="/driver/123">
                            <a>Latest News</a>
                        </LinkContainer>
                        <LinkContainer to="/schedule">
                            <a>Schedule</a>
                        </LinkContainer>
                        <LinkContainer to="/results">
                            <a>Results & Standings</a>
                        </LinkContainer>
                        <LinkContainer to="/drivers">
                            <a>Drivers</a>
                        </LinkContainer>
                    </div>

                    <div className="mobile_menu_icon_container" role="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <i className='bx bx-x menu_icon'></i> : <i className='bx bx-menu menu_icon' ></i>}
                    </div>

                </div>
            </div>

            {isMobileMenuOpen && (

                <div className="mobile_menu">
                    <div className="mobile_menu_links">
                        <LinkContainer to="/driver/123">
                            <a>Latest News</a>
                        </LinkContainer>
                        <LinkContainer to="/schedule">
                            <a>Schedule</a>
                        </LinkContainer>
                        <LinkContainer to="/results">
                            <a>Results & Standings</a>
                        </LinkContainer>
                        <LinkContainer to="/drivers">
                            <a>Drivers</a>
                        </LinkContainer>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Header;
