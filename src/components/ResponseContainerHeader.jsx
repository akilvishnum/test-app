import { Box } from '@mui/material';
import React from 'react';
import { CircleIcon } from './CircleIcon';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';

export const ResponseContainerHeader = ({orderId, productName}) => {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'row', gap: '1rem', padding: '0.77rem 0.5rem'}}>
            <CircleIcon icon={<AutoAwesomeTwoToneIcon />} customStyles = {{ color: 'white'}}/>
            <Box sx = {{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <p style = {{fontWeight: 600, margin: 0}}>{orderId}</p>
                <p style = {{margin: 0}}>{productName}</p>
            </Box>
        </Box>
    )
}
