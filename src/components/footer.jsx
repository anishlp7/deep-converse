import React from 'react';
import "../styles/footer.scss";

const Footer = () => {
    return(
        <footer className="dc-footer-container">
           <img className="footer-img-style"src={require('./../assets/dc.png')}  alt='Deep Converse Small' />
           <span className="footer-text-style">Powered by Deep Converse</span>
        </footer>
    );
}

export default Footer;