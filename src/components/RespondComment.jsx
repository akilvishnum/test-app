import { Box } from '@mui/material';
import React from 'react';

export const RespondComment = ({comment}) => {
    return (
        <Box sx = {{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '0.77rem'}}>
            <Box sx = {{width: '70%', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end'}}>
            <p style = {{margin: 0, fontWeight: 600}}>
                You | 12:06AM
            </p>
                <Box sx = {{borderRadius: '20px', background: 'blue', padding: '1rem', color: 'white'}}>
                    <p style = {{margin: 0}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut pharetra. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Urna neque viverra justo nec ultrices. Justo laoreet sit amet cursus sit amet dictum sit.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}
