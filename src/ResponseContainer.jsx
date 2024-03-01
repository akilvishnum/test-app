import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import { CircleIcon } from './components/CircleIcon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { ResponseContainerHeader } from './components/ResponseContainerHeader';
import { AwaitingComment } from './components/AwaitingComment';
import { RespondComment } from './components/RespondComment';
import { useRef } from 'react';
import { useEffect, useState} from 'react';

export const ResponseContainer = () => {
    const stickyRef = useRef(null);
    const [comment, setComment] = useState('');
    // const [stickyHeight, setStickyHeight] = useState(0);
    // useEffect(() => {
    //     setStickyHeight(stickyRef.current.clientHeight + 15);
    // }, [comment])

    return (
        <Box sx = {{width: '65%', minHeight: '100vh', background: '#dddddd', borderRadius: '20px', border: '1px solid #c2c2c2de'}}>
            <Box sx = {{width: '100%', minHeight: '100px'}}>
                    <ResponseContainerHeader orderId={123} productName = {'GitHub'} />
            </Box>
            <Box sx = {{width: '100%'}}>
                <Box sx = {{width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem', boxSizing: 'border-box'}}>
                    <AwaitingComment commentedBy={'Akilvishnu.M@wellsfargo.com'} time = {'11.53PM'}/>
                    <RespondComment />
                    <AwaitingComment commentedBy={'Akilvishnu.M@wellsfargo.com'} time = {'11.53PM'}/>
                    <RespondComment />
                    <RespondComment />
                </Box>
            </Box>
            <Box sx = {{position: 'sticky', width: '100%', bottom: 0, display: 'flex', zIndex: 100,  padding: '0.77rem 0.5rem', boxSizing: 'border-box', borderTop: '1px solid #c2c2c2de', background: '#dddddd', borderRadius: '0 0 20px 20px'}}>
                <Grid container sx = {{display: 'flex', alignItems: 'flex-end'}} spacing = {1}>
                    <Grid item xs = {1} sx = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <CircleIcon 
                            icon = {<AttachFileIcon onClick = {() => {}} />}
                            customStyles = {{color: 'white', background: 'black'}}
                        />
                    </Grid>
                    <Grid item xs = {10}>
                            <TextField 
                            multiline
                            maxRows = '7'
                            style={{width: '100%', background: 'white'}}
                            onChange = {(e) => setComment(e?.target.value)}
                            />
                    </Grid>
                    <Grid item xs = {1}>
                        <CircleIcon 
                            icon = {<SendIcon onClick = {() => {}} />}
                            customStyles = {{color: 'white', background: 'black'}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
