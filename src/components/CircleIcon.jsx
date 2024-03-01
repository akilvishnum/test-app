import { Box } from '@mui/material';
import React from 'react';

export const CircleIcon = ({icon, customStyles}) => {
    return (
        <Box sx = {{width: '3rem', borderRadius: '50%', aspectRatio: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', ...customStyles}}>
            {icon}
        </Box>
    )
}