import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import bgImage from '../../../assets/S3_Contract.jpg'
import bgImageMB from '../../../assets/S3_Contract-mb.jpg'
import { MenuLink } from '../LockerMenu/styles';
import { CA, dexToolsLink, uniSwapLink } from '../../../links';

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
    &:before{
        content: 'Fight4Trump';
        background: linear-gradient(180deg, black 20%, transparent);
        position: absolute;
        font-size: 1px;
        color: transparent;
        z-index: 1;
        top: 0;
        right: 0;
        left: 0;
        min-height: 60vh;
    }
    @media(max-width: 650px){
        background: url(${bgImageMB});
        background-size: cover;
        background-position: center;
    }
`;

const InnerBox = emotionStyled(Box)`
    position: relative;
    z-index: 2; 
    min-height: 100vh;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 80px 0;

`
function S3_Contract() {
  return (
    <SectionCover>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <InnerBox>
                        <Typography variant='h3' maxWidth={600} textAlign='center' color="#fff" fontFamily="impact">Dear Diary, Today I learnt that Arthritis and Guns do NOT go hand in hand.</Typography>
                        <Box width="100%" maxWidth={350} marginTop={4} textAlign="center">
                            <Typography variant='h3' maxWidth={600} marginBottom={3} textAlign='center' color="#fff" fontFamily="impact">Contract: {CA}</Typography>
                            <Typography variant='boddy2' maxWidth={600} textAlign='center' color="#fff" fontFamily="impact">Network: Ethereum</Typography>
                        </Box>
                    </InnerBox>
                </Grid>
            </Grid>
        </Container>
    </SectionCover>
  )
}

export default S3_Contract