import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Map from './components/Map';
import { Box, styled } from '@mui/material';

const DivStyle = styled(Box)`
background:white;
display:flex

`

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'AIzaSyCtB96paU6Ju9v1FxUhYLsGpgtSlQGi2fM',
    googleMapsApiKey: "AIzaSyCtB96paU6Ju9v1FxUhYLsGpgtSlQGi2fM"
  })

  return (
    <DivStyle >
     
      <Map isLoaded={isLoaded} />
    </DivStyle>
  )
}

export default App