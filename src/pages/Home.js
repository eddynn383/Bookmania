import React from 'react';
import AddBooks from '../blocks/AddBooks';

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome!!!</h1>
            <div className="container container--flex container--center">
                <div className="container_inner">
                    <AddBooks />
                </div>
            </div>
        </div>
    )
}
