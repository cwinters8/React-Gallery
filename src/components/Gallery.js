import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {
                    props.data.map(pic => {
                        return(<GalleryItem desc={pic.title} img={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} />)
                    })
                }
            </ul>
        </div>
    )
}

export default Gallery;