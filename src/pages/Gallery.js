import React, {useState} from 'react'
import '../styles/Gallery.css';
import { images } from '../Helpers/GalleryData';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Gallery() {

    const [currImg, setCurrImg] = useState(1);

    return (
        <div className='gallery'>
            <div className="galleryInner"
            /* <img src={images[currImg].img} /> */
             style={{ backgroundImage: `url(${images[currImg].img})`}}
             >
                 <div className="left" 
                 onClick={() => {
                     currImg > 0 && setCurrImg(currImg - 1);
                }}
                >
                     <ArrowBackIosIcon style= {{ fontSize: 30 }} />
                 </div>
                 <div className="center">
                     {/* <h1>{images[currImg].title}</h1>
                     <p>{images[currImg].subtitle}</p> */}
                 </div>
                 <div className="right" onClick={() => {
                     currImg < images.length - 1 && setCurrImg(currImg + 1);
                }}
                >
                     <ArrowForwardIosIcon style= {{ fontSize: 30 }} />
                 </div>
             </div>
        </div>
    );
}

export default Gallery;


