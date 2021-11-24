import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Metatag from './Metatag';
import './card.scss'

export default function Card(opts) {
    const metatags = opts.metatags;

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
                    <div className="card-item_metatags">
                        {
                            metatags.map((item, idx) => {
                                console.log(item)
                                console.log(idx)
                                if (item !== null && item !== 'undefined') {
                                    return <Metatag key={idx} label={item.name} value={item.value}/>
                                }
                            })
                        }
                    </div>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
        </div>
    )
}
