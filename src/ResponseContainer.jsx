import { Box, Grid, styled, TextField } from '@mui/material';
import React from 'react';
import { CircleIcon } from './components/CircleIcon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { ResponseContainerHeader } from './components/ResponseContainerHeader';
import { AwaitingComment } from './components/AwaitingComment';
import { RespondComment } from './components/RespondComment';
import { useRef } from 'react';
import { useEffect, useState} from 'react';

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: '30px'
    }
});

export const ResponseContainer = () => {
    const stickyRef = useRef(null);
    const [comment, setComment] = useState('');
    // const [stickyHeight, setStickyHeight] = useState(0);
    useEffect(() => {
        stickyRef.current.scrollIntoView({behavior: "smooth"})
    })

    return (
        <Box sx = {{width: '60%', background: 'transparent', borderRadius: '20px'}}>
            <Box sx = {{position: 'sticky', top: 0, background: 'white', width: '100%', boxSizing: 'border-box', borderRadius: '20px 20px 0px 0px', border: '1px solid #c2c2c2de'}}>
                    <ResponseContainerHeader orderId={123} productName = {'GitHub'} />
            </Box>
            <Box sx = {{width: '100%', background: '#f3f3f3', height: '70vh', overflow: 'auto', boxSizing: 'border-box', borderLeft: '1px solid #c2c2c2de', borderRight: '1px solid #c2c2c2de'}}>
                <Box sx = {{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem', boxSizing: 'border-box'}}>
                    <AwaitingComment commentedBy={'Akilvishnu.M@wellsfargo.com'} time = {'11.53PM'}/>
                    <RespondComment />
                    <AwaitingComment commentedBy={'Akilvishnu.M@wellsfargo.com'} time = {'11.53PM'}/>
                    <RespondComment />
                </Box>
                <div ref = {stickyRef} />
            </Box>
            
            <Box sx = {{position: 'sticky', width: '100%', bottom: 0, display: 'flex', zIndex: 100,  padding: '0.77rem 0.5rem', boxSizing: 'border-box', border: '1px solid #c2c2c2de', background: 'white', borderRadius: '0 0 20px 20px'}}>
                <Grid container sx = {{display: 'flex', alignItems: 'flex-end'}} spacing = {1}>
                    <Grid item xs = {10}>
                            <StyledTextField 
                            multiline
                            maxRows = '7'
                            style={{width: '100%', background: 'white'}}
                            onChange = {(e) => setComment(e?.target.value)}
                            placeholder = 'Your response...'
                            />
                    </Grid>
                    <Grid item xs = {1} sx = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <CircleIcon 
                            icon = {<AttachFileIcon onClick = {() => {}} />}
                            customStyles = {{color: '#4f4f4fde', border: '0.119rem solid #4f4f4fde', boxSizing: 'border-box', background: 'transparent'}}
                        />
                    </Grid>
                    <Grid item xs = {1}>
                        <CircleIcon 
                            icon = {<SendIcon onClick = {() => {}} />}
                            customStyles = {{color: 'white'}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
