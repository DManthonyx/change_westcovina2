
import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import {
    Div,
    Button,
    Img,
    Pin
} from './style'

const Mapbox = (props) => {
    const [viewport, setViewport] = useState({
        latitude: 34.057450,
        longitude: -117.908000,
        width: '45vw',
        height: 'calc(80vh - 80px)',
        zoom: 12
    })

    const [selectedResource, setSelectedResource] = useState(null);

    return (
        <Div>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
        >
            {props.resources.map((resource, index) => {
                return (
                    <Marker
                    key={index}
                    latitude={resource.lat}
                    longitude={resource.long}
                    >
                        <Pin onClick={() => {
                            setSelectedResource(resource)
                        }}></Pin>
                    </Marker>
                )
            })}
            {selectedResource ? (
                <Popup
                latitude={selectedResource.lat}
                longitude={selectedResource.long}
                onClose={()=> {
                    setSelectedResource(null)
                }}
                >
                    <div>
                        <h2>{selectedResource.name}</h2>
                        <p>{selectedResource.address}</p>
                        <p>{selectedResource.city}</p>
                        <p>{selectedResource.zipCode}</p>
                        <p>{selectedResource.phoneNumber}</p>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>
        </Div>
    )
};

export default Mapbox
