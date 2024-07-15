import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import bgImage from '../../../assets/S8_Launch.jpg'
import bgImageMB from '../../../assets/S8_Launch-mb.jpg'

const SectionCover = emotionStyled(Box)`
    min-height: 100vh;
    position: relative;
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    z-index: 2;
    &:after{
        content: 'Fight4Trump';
        background: linear-gradient(360deg, black 20%, transparent);
        position: absolute;
        font-size: 1px;
        color: transparent;
        z-index: 1;
        bottom: 0;
        right: 0;
        left: 0;
        min-height: 60vh;
    }
    @media(max-width: 650px){
        background: url(${bgImageMB});
    }
`;

const InnerBox = emotionStyled(Box)`
    position: relative;
    z-index: 2; 
    min-height: 100vh;   
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding: 80px 0;

`
function S8_Launch() {
  return (
    <SectionCover>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <InnerBox>
                        <Typography variant='h3' marginBottom={3} textAlign='center' color="#fff" fontFamily="impact">Bundle Snipers after we launch</Typography>
                    </InnerBox>
                </Grid>
            </Grid>
        </Container>
    </SectionCover>
  )
}

export default S8_Launch