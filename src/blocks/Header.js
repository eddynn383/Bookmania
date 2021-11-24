import React from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Profile from './Profile';
import Cart from './Cart';

import './header.scss';

export default function Header() {
    return (
        <div className="header_block">
            <div className="header_block-inner flex justify_sb align_center">
                <div className="header_left">
                    <Logo />
                </div>
                <div className="header_right flex align_end gap-20">
                    <div className="header_right-top flex gap-10">
                        <div className="header_group header_group--one">
                            <Search />
                        </div>
                        <div className="header_group header_group--two">
                            <Profile />
                            <Cart />
                        </div>
                    </div>
                    <div className="header_right-bottom">
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
}
