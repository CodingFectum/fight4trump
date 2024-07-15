import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import bgImage from '../../../assets/lookat.jpg'
import bgImageMB from '../../../assets/lookat-mb.jpg'
import { MenuLink } from '../LockerMenu/styles';
import { dexToolsLink, uniSwapLink } from '../../../links';

const SectionCover = emotionStyled(Box)`
    min-height: 100vh;
    position: relative;
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    z-index: 2;
    &:after{
        content: 'Fight4Trump';
        background: linear-gradient(270deg, black 20%, transparent);
        position: absolute;
        font-size: 1px;
        color: transparent;
        z-index: 1;
        bottom: 0;
        top: 0;
        right: 0;
        min-width: 60vw;
    }
    @media(max-width: 650px){
        background: url(${bgImageMB});
        background-position: center;
        background-size: cover;
    }
`;

const InnerBox = emotionStyled(Box)`
    position: relative;
    z-index: 2; 
    min-height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 80px 0;

`
function S4_Lookat() {
  return (
    <SectionCover>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <InnerBox>
                        <Typography variant='h3' textAlign="right" maxWidth={400} color="#fff" fontFamily="impact">Ay look guys, this thing's got Trump's name on it</Typography>
                    </InnerBox>
                </Grid>
            </Grid>
        </Container>
    </SectionCover>
  )
}

export default S4_Lookat