import React from 'react';
import { CircleIcon } from './CircleIcon';
import TagTwoToneIcon from '@mui/icons-material/TagTwoTone';
import { Box } from '@mui/material';

const AwaitingCommentHeader = ({commentedBy, time}) => {
    return(
        <Box sx = {{display: 'flex', alignItems: 'center', gap: '0.33rem'}}>
            <p style = {{fontWeight: 600, margin: 0}}>{commentedBy}</p>
            <p style = {{fontWeight: 600, margin: 0}}>|</p>
            <p style = {{fontWeight: 600, margin: 0}}>{time}</p>
        </Box>
    )
}
export const AwaitingComment = ({commentedBy, time, comment, team}) => {
    return (
        <Box sx = {{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.77rem'}}>
            <CircleIcon 
                icon = {<TagTwoToneIcon />}
                customStyles = {{color: 'white'}}
            />
            <Box sx = {{width: '70%', display: 'flex', flexDirection: 'column', gap: '0.5rem', }}>
                <AwaitingCommentHeader commentedBy = {commentedBy} time = {time} />
                <Box sx = {{borderRadius: '20px', background: 'white', padding: '1rem', }}>
                    <p style = {{margin: 0}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut pharetra. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Urna neque viverra justo nec ultrices. Justo laoreet sit amet cursus sit amet dictum sit.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}
