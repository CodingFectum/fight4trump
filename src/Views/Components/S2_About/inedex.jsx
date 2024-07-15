import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import bgImage from '../../../assets/about.jpg'
import bgImageMB from '../../../assets/about-mb.jpg'
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
        background-size: cover;
        background-position: bottom;
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
function S2About() {
  return (
    <SectionCover>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <InnerBox>
                        <Typography variant='h3' maxWidth={350} textAlign="right" color="#fff" fontFamily="impact">This is where you were supposed to shoot, bitch.</Typography>
                        <Box width="100%" maxWidth={350} marginTop={4} display='flex' justifyContent='space-between'>
                            <MenuLink href={uniSwapLink} width="unset" target='_blank' style={{backgroundColor: '#3C3B6E'}}>Buy now</MenuLink>
                            <MenuLink href={dexToolsLink} width="unset" target='_blank' style={{backgroundColor: '#B22234'}}>Chart</MenuLink>
                        </Box>
                    </InnerBox>
                </Grid>
            </Grid>
        </Container>
    </SectionCover>
  )
}

export default S2About