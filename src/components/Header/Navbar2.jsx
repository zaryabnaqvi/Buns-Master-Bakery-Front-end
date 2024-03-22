import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Navbar.css"

const Navbar2 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Navbar2>
            <div className="container">
                <input type="checkbox" name="" id="check" checked={isChecked} onChange={toggleCheckbox} />

                <div className="logo-container">
                    <h3 className="logo">Brand<span>Name</span></h3>
                </div>

                <div className="nav-btn">
                    <div className="nav-links">
                        <ul> 
                            <li className="nav-link" style={{ '--i': '.6s' }}> 
                                <a href="#">Home</a>
                            </li>
                            <li className="nav-link" style={{ '--i': '.85s' }}>
                                <a href="#">Menu<FontAwesomeIcon icon={faCaretDown} /></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="#">Link 1</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 2</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 3<FontAwesomeIcon icon={faCaretDown} /></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 1</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 2</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 3</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">More<FontAwesomeIcon icon={faCaretDown} /></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 4</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.1s' }}>
                                <a href="#">Services<FontAwesomeIcon icon={faCaretDown} /></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="#">Link 1</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 2</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 3<FontAwesomeIcon icon={faCaretDown} /></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 1</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 2</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 3</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">More<FontAwesomeIcon icon={faCaretDown} /></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 4</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.35s' }}>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="log-sign" style={{ '--i': '1.8s' }}>
                        <a href="#" className="btn transparent">Log in</a>
                        <a href="#" className="btn solid">Sign up</a>
                    </div>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </Navbar2>
    );
};

export default Navbar2;
