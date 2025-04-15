import React from 'react';
import './map.css'; 

const Map = () => {
    return ( 
        <div className="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d317.2969912832115!2d74.5937491871761!3d42.85180009185495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGIS%20pro%20kg!5e0!3m2!1sru!2skg!4v1743619197000!5m2!1sru!2skg"
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default Map;
