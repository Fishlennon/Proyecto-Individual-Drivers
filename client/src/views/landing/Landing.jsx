import {Link } from "react-router-dom"
import './Landing.styles.css';

const Landing = ()=> {
    return(
        <div className="landing-container">
            <img className="logo" src="https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg" alt="" />
            <img className="background-image" src="https://r4.wallpaperflare.com/wallpaper/437/769/272/mclaren-mclaren-p1-lm-mclaren-f1-lm-orange-cars-supercars-hd-wallpaper-2930b80d514acd7b96d7580f805196dd.jpg" alt="" />
            <Link to='/home' className=''>
                <button className='ingresar-button'>INGRESAR</button>
            </Link>
        </div>
    )
}

export default Landing