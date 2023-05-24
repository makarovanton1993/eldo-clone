import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Li, TypographyH2, Ul } from '../../styles/components/component'
// import styles from './SectionBrand.module.scss'

const Title = styled(TypographyH2)`
    margin-bottom: 10px;
`
const WrapSectionBrand = styled.section`

`
const WrapBrands = styled.section`
    margin-bottom: 15px;
`
const SectionBrandList = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    max-width: 850px;
    width: 100%;
`
const SectionBrandItem = styled(Li)`
    max-width: 160px;
    width: 126px;
    height: 56px;
    background-color: #f5f5f5;
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 7px;
    border: 2px solid transparent;
    transition: border-color background-color .7s;
    &:hover{
      border-color: green; 
      background-color: #fff;
    }
    img{
        object-fit: none;
        max-width: 100%;
        width: 100%;
    }
`
const SectionBrand = () => {
  return (
    <WrapSectionBrand>
        <Title>
            Бренды
        </Title>
        <WrapBrands>
            <SectionBrandList>
                <SectionBrandItem>
                    <Link href="/samsung">
                        <img src="https://static.eldorado.ru/upload/newbx/ac6/ac65c6f554253b5f007abb2aa3568e24.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/samsung">
                        <img src="https://static.eldorado.ru/upload/newbx/ac6/ac65c6f554253b5f007abb2aa3568e24.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/w">
                        <img src="	https://static.eldorado.ru/upload/newbx/6d9/6d9006877aa7f8e39c105fbf8e1b906f.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/h">
                        <img src="	https://static.eldorado.ru/upload/newbx/5b5/5b5dcd0e29c7294d55819fbb0ce5855e.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/haier">
                        <img src="	https://static.eldorado.ru/upload/newbx/c67/c67ea6dd52f39e791344a93fc2d6fd4b.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/tefal">
                        <img src="	https://static.eldorado.ru/upload/newbx/79a/79a7615941d2413b91a06b8dc807dbb2.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/rowenta">
                        <img src="https://static.eldorado.ru/upload/newbx/5d6/5d667332c75f45697676aa2b1a4adde8.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/honor">
                        <img src="https://static.eldorado.ru/upload/newbx/2af/2af186a0fc9c00d0a69b18f70a1f8d84.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/huawei">
                        <img src="https://static.eldorado.ru/upload/newbx/78e/78e724d0f5e6fb044ce7ac5e301d63d6.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/hyper">
                        <img src="https://static.eldorado.ru/upload/newbx/ac6/ac65c6f554253b5f007abb2aa3568e24.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/artel">
                        <img src="https://static.eldorado.ru/upload/newbx/ac6/ac65c6f554253b5f007abb2aa3568e24.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
                <SectionBrandItem>
                    <Link href="/oral">
                        <img src="https://static.eldorado.ru/upload/newbx/ac6/ac65c6f554253b5f007abb2aa3568e24.png/resize/126x60/" alt="" />
                    </Link>
                </SectionBrandItem>
            </SectionBrandList>
        </WrapBrands>
    </WrapSectionBrand>
  )
}

export default SectionBrand