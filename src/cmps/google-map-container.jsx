import React from 'react'
import { Marker } from '@react-google-maps/api';
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
}

const cities = [
    { name: 'madrid', pos: { lat: 40.4168, lng: -3.7 } },
    { name: 'fuenlabrada', pos: { lat: 40.2775, lng: -3.7943 } },
    { name: 'navalcarne', pos: { lat: 40.2775, lng: -3.9943 } }
]

export const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDJOS8Lw2pOyAk7dwu1HRePE9DHKTIiAE4"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(cities[0].pos)
        map.fitBounds(bounds)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    function panToPos(pos) {
        map.panTo(pos)
    }

    return isLoaded ? (
        <React.Fragment>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={cities[0].pos}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {cities.map(city => (
                    <Marker position={city.pos} />
                ))}
                <></>
            </GoogleMap>
            <div className="btns-container">
                {cities.map((city, idx) => (
                    <button key={idx}
                        className='nice-button'
                        onClick={() => { panToPos(city.pos) }}>
                        {city.name}
                    </button>
                ))}
            </div>
        </React.Fragment>
    ) : <></>
}