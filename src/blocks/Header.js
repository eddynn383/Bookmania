import React, { useState } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Profile from './Profile';
import Cart from './Cart';

import './style/header.scss';

export const HeaderContext = React.createContext();

export default function Header() {
    const [profileVisibility, setProfileVisibility] = useState(false);
    const [cartVisibility, setCartVisibility] = useState(false);
    // const [headerData, setHeaderData] = useState({
    //     profileVisibility,
    //     cartVisibility
    // });
    const profileToggle = () => {
        setProfileVisibility(!profileVisibility);
        setCartVisibility(false);
    }
    const cartToggle = () => {
        setCartVisibility(!cartVisibility);
        setProfileVisibility(false);
    }
    return (
        // <HeaderContext.Provider value={true}>
            <div className="header_block">
                <div className="header_block-inner flex justify_sb align_center">
                    <div className="header_left">
                        {/* <Logo /> */}
                        <Nav />
                    </div>
                    <div className="header_right flex align_end gap-20">
                        <div className="header_right-top flex gap-10">
                            <div className="header_group header_group--one">
                                <Search />
                            </div>
                            <div className="header_group header_group--two">
                                <Profile onClick={profileToggle} toggle={profileVisibility} />
                                <Cart onClick={cartToggle} toggle={cartVisibility}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </HeaderContext.Provider>
    )
}
