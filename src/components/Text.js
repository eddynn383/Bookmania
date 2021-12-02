import React from 'react'

export default function Text(opts) {
    let type = "";
    switch (opts.type) {
        case "h1": type = <h1 className={opts.className}>{opts.children}</h1>
            break;
        case "h2": type = <h2 className={opts.className}>{opts.children}</h2>
            break;
        case "h3": type = <h3 className={opts.className}>{opts.children}</h3>
            break;
        case "h4": type = <h4 className={opts.className}>{opts.children}</h4>
            break;
        case "h5": type = <h5 className={opts.className}>{opts.children}</h5>
            break;
        case "p": type = <p className={opts.className}>{opts.children}</p>
            break;
        default: type = <span className={opts.className}>{opts.children}</span>
            break;
    }
    return type;
}
