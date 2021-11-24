import React from 'react';
import AddBooks from '../blocks/AddBooks';

export default function Home() {
    return (
        <div className="content-page content-page--home">
            <div className="content-page_inner">
                <h1>Welcome!!!</h1>
                <div className="container container--flex container--center">
                    <div className="container_inner">
                        <AddBooks />
                    </div>
                </div>
            </div>
        </div>
    )
}
