import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo';
import Header from 'components/Header'
import React from 'react'
import { useGetGeographyQuery } from 'state/api';
import { geoData } from 'state/geoData';


const Geography = () => {
    const theme = useTheme();
    const {data, isLoading} = useGetGeographyQuery();

  return (
    <Box m="1.5rem 2rem">
        <Header title="Geography" subtitle="Get Geography.."    />
        
    </Box>
  )
}

export default Geography;