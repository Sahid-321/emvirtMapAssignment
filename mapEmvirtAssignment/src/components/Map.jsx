import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import CustomM from '../assets/CustomM.png'
const Map = (props) => {
    const { isLoaded } = props;

    const containerStyle = {

        width: '100%',
        height: '700px'
    };

    const center = {
        lat: 26.9124,
        lng: 75.7873
    };

    const markers = [{
        name: "location-1",
        location: {
            lat: 26.9124,
            lng: 75.7873
        }
    },
    {
        name: "location-2",
        location: {
            lat: 26.7983,
            lng: 75.6324
        }
    },
    {
        name: "location-3",
        location: {
            lat: 26.6035,
            lng: 75.9436
        }
    },
    {
        name: "location-4",
        location: {
            lat: 26.8419,
            lng: 76.0521
        }
    }]

    const onLoad = polyline => {
        console.log('polyline: ', polyline)
    };

    const path = [
        {
            lat: 26.9124,
            lng: 75.7873
        },
        {
            lat: 26.7983,
            lng: 75.6324
        },
        {
            lat: 26.6035,
            lng: 75.9436
        }, {
            lat: 26.8419,
            lng: 76.0521
        }
    ];

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: [
            {
                lat: 26.9124,
                lng: 75.7873
            },
            {
                lat: 26.7983,
                lng: 75.6324
            },
            {
                lat: 26.6035,
                lng: 75.9436
            }, {
                lat: 26.8419,
                lng: 76.0521
            }
        ],
        zIndex: 1
    };

    return isLoaded && (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}

            >
                {
                    markers.map((elem) => {
                        return (
                            <div key={elem.name}>
                                <Marker position={elem.location}
                                    options={{
                                        icon: CustomM,
                                    }} />




                            </div>
                        )
                    })
                }
                <Polyline
                    onLoad={onLoad}
                    path={path}
                    options={options}
                />
            </GoogleMap>
        </>
    )
}
export default Map