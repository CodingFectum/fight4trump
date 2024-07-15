import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import S1header from '../../Components/S1_Header'
import S2About from '../../Components/S2_About/inedex'
import S3_Contract from '../../Components/S3_Contract/inedex'
import S4_SecretService from '../../Components/S5_SecretService/inedex'
import S5_Lookat from '../../Components/S4_Lookat/inedex'
import S6_NewNews from '../../Components/S6_NewNews/inedex'
import S7_Sniper from '../../Components/S7_Sniper/inedex'
import S8_Launch from '../../Components/S8_Launch/inedex'
import S9_Joinus from '../../Components/S9_Joinus/inedex'

const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <S1header />
        <S2About />
        <S3_Contract />
        <S4_SecretService />
        <S5_Lookat />
        <S6_NewNews />
        <S7_Sniper />
        <S8_Launch />
        <S9_Joinus />
    </PageWrapper>
  )
}

export default MainPage