import React from 'react'
import GetBooks from '../blocks/GetBooks'

export default function Library() {
    return (
        <div className="content-page content-page--library">
            <div className="content-page_inner">
                <div className="container container--flex container--center">
                    <div className="container_inner">
                        <GetBooks />
                    </div>
                </div>
            </div>
        </div>
    )
}
