import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container row-footer">
                <div className="brand-footer">
                    <img src="" alt="" />
                </div>

                <div className="menu-container">
                    <ul className="menu-options">
                        <li><span className="footer-title-option">Menu</span> </li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <ul className="menu-options">
                        <li><span className="footer-title-option">Contact</span> </li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <ul className="menu-options">
                        <li><span className="footer-title-option">Company</span> </li>
                        <li><Link to={`/warranty`}>FAQ</Link></li>
                        <li><Link to={`/warranty`}>Terms & Conditions</Link></li>
                        <li><Link to={`/warranty`}>Warranty</Link></li>
                    </ul>
                </div>

            </div>
            <p className="rights">2022 ATX PROPERTY SERVICES: ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default Footer;
