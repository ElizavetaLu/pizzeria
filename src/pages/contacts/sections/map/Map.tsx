import { useRef } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import config from "../../../../config.json";
import "./Map.scss";

const containerStyle = {
    width: '100%',
    height: '100%'
};


const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: config.REACT_APP_GOOGLE_API_KEY
    })


    const mapRef = useRef(null)

    const onLoad = (map: any) => {
        mapRef.current = map
    }
    const onUnmount = (map: any) => {
        mapRef.current = null
    }

    if (!isLoaded) return <div className='loader-container'>  Loading...</div>

    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ 
                    lat: 42.321862,
                    lng: 12.588564,
                }}
                zoom={18}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <MarkerF
                    position={{
                        lat: 42.321862,
                        lng: 12.588564,
                    }} 
                />
            </GoogleMap>
        </div>
    );
};

export default Map;