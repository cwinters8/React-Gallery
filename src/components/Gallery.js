import React from 'react';

// app components
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';
import Loading from './Loading';

const Gallery = (props) => {
  let pics;
  // return a gallery item to render for each photo found in props data
  // if none found, render NoResults element
  if (props.data.length > 0) {
    pics = props.data.map(pic => {
      return (<GalleryItem desc={pic.title} key={pic.id} img={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} />)
    })
  } else if (!props.loading) {
    pics = <NoResults />
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      {
        (props.loading)
        ? <Loading />
        : <ul>{pics}</ul>
      }
    </div>
  )
}

export default Gallery;