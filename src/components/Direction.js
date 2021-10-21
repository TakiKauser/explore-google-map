import React, { useState } from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';

// required
const location = {
    lat: 24.810577,
    lng: 89.864194
}

const Direction = ({origin, destination}) => {

    const [response, setResponse] = useState(null);

    const directionsCallback = res => {
        if(res != null){
            setResponse(res);
        }
    }
  
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}
                    // required
                    center={location}
                    // required
                    zoom={10}
                >
                    <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: "WALKING"
                        }}
                        // required
                        callback={directionsCallback}

                    />
                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;