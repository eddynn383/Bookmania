import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Metatag from './Metatag';
import './style/card.scss'

export default function Card(opts) {
    const metatags = opts.metatags;
    console.log(opts)

    return (
        <div className={"card-item card-item--" + opts.type}>
            <div className="card-item_cover">
                <img src={opts.cover} alt={opts.title} />
            </div>
            <div className="card-item_desc">
                <div className="card-item_desc-inner">
                    <div className="card-item_title">
                        <h3>{opts.title}</h3>
                    </div>
                    <div className="card-item_subtitle">
                        <span>{opts.subtitle}</span>
                    </div>
                    <div className="card-item_description">
                        <span>{opts.description}</span>
                    </div>
                    <div className="card-item_metatags">
                        {/* {
                            metatags.filter(item => item !== null).map((item, idx) => {
                                return <Metatag key={idx} label={item.name} value={item.value}/>
                            })
                        } */}
                    </div>
                </div>
                <button type="submit" className="card-item_button"><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
        </div>
    )
}
