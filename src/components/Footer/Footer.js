import "./FooterStyles.css"

const Footer = () => {
    return (
        <footer>
            <section>
                <img src="https://saja-react.vercel.app/assets/img/logo/logo.png" />
                <h4>Phone:</h4>
                <a>(+88) 258 - 241 - 302</a>
                <h4>Email:</h4>
                <a>info@example.com</a>
                <h4>Location:</h4>
                <a>258712 Street Park, New York, USA</a>
            </section>
            <section>
                <h2>Information</h2>
                <li><a href="/services">Agency Overview</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/services">Developer Tech</a></li>
                <li><a href="/services">Contact Tech</a></li>
                <li><a href="/services">Careers</a></li>
                <li><a href="/services">Global Partner</a></li>
            </section>
            <section>
                <h2>Quick Links</h2>
                <li><a href="/about">About Company</a></li>
                <li><a href="/about">Team</a></li>
                <li><a href="/about">Features</a></li>
                <li><a href="/about">Documentation</a></li>
                <li><a href="/about">Resource</a></li>
                <li><a href="/about">Store Example</a></li>
            </section>
            <section>
                <h2>Newsletter</h2>
                <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <i className="fa fa-paper-plane"></i>
                </div>
                <button>Subscribe Now</button>
            </section>
        </footer>
    )
}
export default Footer;