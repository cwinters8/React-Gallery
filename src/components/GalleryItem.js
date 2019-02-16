import React from 'react';

const GalleryItem = props => {
    return (
        <li>
            <img alt={props.desc} src={props.img}></img>
        </li>
    )
}

export default GalleryItem;