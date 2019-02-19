import React from 'react';

// app components
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = (props) => {
    let pics;
    // console.log(props);
    if (props.data.length > 0) {
        pics = props.data.map(pic => {
            return(<GalleryItem desc={pic.title} key={pic.id} img={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} />)
        })
    } else {
        pics = <NoResults />
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>{pics}</ul>
        </div>
    )
}

export default Gallery;