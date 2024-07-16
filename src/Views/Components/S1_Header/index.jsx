import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import bgImage from '../../../assets/shooter.mp4'
import logo from '../../../assets/logo.png'

const SectionCover = emotionStyled(Box)`
    min-height: 100vh;
    position: relative;
    z-index: 2;
    &:after{
        content: 'Fight4Trump';
        background: linear-gradient(360deg, black, transparent);
        position: absolute;
        font-size: 1px;
        color: transparent;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 60vh;
    }
`;
const InnerBox = emotionStyled(Box)`
    position: relative;
    z-index: 2; 
    min-height: 100vh;   
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 100px 0;

`
const AbsoluiteBackgroundVideo = emotionStyled.video`
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    position: absolute;
    bottom: 0%;
    left: 0%;
    z-index: 1;  
`;

const IMG = emotionStyled.img`
    height: 150px;
    width: auto;
    position: absolute;
    left: -90px;
    top: -100px;

    @media (max-width: 650px) {
        height: 120px !important;
        width: auto;
        position: absolute;
        top: -120px !important;
        left: 0 !important;
        right: 0;
        margin: auto;
    }
`
function S1header() {
    const [open, setOpen] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // This effect will run when the component mounts
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    window.close();
  };

  const handlePlayVideo = () => {
    setOpen(false);
    setPlayVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <SectionCover>
        <Modal
            open={open}
            onClose={handlePlayVideo}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center',
                    borderRadius: '40px',
                    background: '#0e1d3a'
                }}
            >
                <Box style={{position:'relative'}}>
                    <IMG src={logo} />
                    <Typography id="modal-title" color="#fff" variant="h6" fontFamily="impact" component="h2">
                    FIGHT 4 TRUMP
                    </Typography>
                    
                    <Typography id="modal-title" color="#fff" variant="h4" fontFamily="impact" component="h2">
                    Did Biden do it?
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Button variant="contained" style={{background:'#00d029'}} onClick={handlePlayVideo} sx={{ m: 1 }}>YES</Button>
                    <Button variant="contained" style={{background:'#d10000'}} onClick={handlePlayVideo} sx={{ m: 1 }}>YES, but in red</Button>
                </Box>
            </Box>
        </Modal>
        <AbsoluiteBackgroundVideo ref={videoRef} src={bgImage} />
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <InnerBox>
                        <Typography variant='h3' maxWidth={520} color="#fff" fontFamily="impact">I WONDER WHY TRUMP WON'T PICK UP THE PHONE..</Typography>
                    </InnerBox>
                </Grid>
            </Grid>
        </Container>
    </SectionCover>
  )
}

export default S1header