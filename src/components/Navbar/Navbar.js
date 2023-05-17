import "./NavbarStyles.css"
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

    useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    const [clicked, setClicked] = useState(false);
    return (
        <header className={scrollPosition > 0 ? "scrolled" : ""}>
            <img src="https://saja-react.vercel.app/assets/img/logo/logo.png" />
            <div className="menu-icons-search">
            <button className="search-navbar mobile" onClick={() => setOpenSearch(true)}><i className="fa fa-search"></i></button>
            <ul className={`nav-links ${clicked && `active`}`}>
            <div className='menu-icons' onClick={() => setClicked(!clicked)}>
                    <i className= "fas fa-times"></i>
                </div>    
                <div className="links-container">
                <Link className="links" to="/" onClick={() => setClicked(false)}>Home</Link>
                <Link className="links dropdown-link" onClick={() => setOpenDropDown(!openDropDown)}>About
                <i className="fa fa-chevron-down"></i>
                </Link>
                <div className={`dropdown-container ${openDropDown ? `active` : `inactive`}`}>
                    <Link className="links-dropdown" to="/about" onClick={() => setClicked(false)}>About Us</Link><br />
                    <Link className="links-dropdown" to="/about-me" onClick={() => setClicked(false)}>About Me</Link>
                </div>
                <Link className="links" to="/services"onClick={() => setClicked(false)}>Services</Link>
                <Link className="links" to="/blog"onClick={() => setClicked(false)}>Blog</Link>
                <Link className="links" to="/pages"onClick={() => setClicked(false)}>Pages</Link>
                <Link className="links" to="/contact"onClick={() => setClicked(false)}>Contact</Link>
                </div>
                <div className="right-section">
                <div className="contact-info">
            <h4>Contact Info</h4>
            <p><i className="fa fa-map-marker"></i>28/4 Palmal, London</p>
            <p><i className="fa fa-envelope"></i>info@saja.com</p>
            <p><i className="fa fa-phone"></i>333 888 200 - 05 </p>
            </div>
            <button className="search-navbar desktop" onClick={() => setOpenSearch(true)}><i className="fa fa-search"></i></button>
            <div className="brands-links">
                <i className="fa-brands fa-facebook-f"></i> 
                <i className="fa-brands fa-twitter"></i> 
                <i class="fa-brands fa-vimeo-v"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <button className="get-started">Get Started</button>
            </div>

            </ul>
            <i onClick={() => setClicked(!clicked)} className="fas fa-bars"></i>
            {openSearch && 
            <div className="search-area">
                <input type="search" placeholder="Search here..." />
                <i className="fa fa-close" onClick={() => setOpenSearch(false)}></i>
            </div>
            }
            </div>
        </header>
    )
}
export default Navbar;