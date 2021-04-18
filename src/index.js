import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';


const App = () => {
    const [lat, setLat] = useState({ latitude: null, longitude: null });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (postion) => setLat(
                {
                    ...lat,
                    latitude: postion.coords.latitude,
                    longitude: postion.coords.longitude
                }
            ),
            (err) => setErrorMessage(err.message)
        );
    }, []);


    const renderBody = () => {
        if (errorMessage && !lat.latitude) {
            return (
                <div>
                    Error {errorMessage}
                </div>
            )
        }

        if (!errorMessage && lat.latitude) {
            return (
                <SeasonDisplay latitude={lat.latitude} />
            )
        }

        return <Spinner message="Please accept location request" />
    }

    return (
        <div className='border red'>
            {renderBody()}
        </div>
    )


}

ReactDOM.render(<App />, document.querySelector('#root'));