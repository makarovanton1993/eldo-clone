import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
const TitleLink = styled(Link)`
    display:flex;
    transition:color ease .5s;
    margin-bottom:15px;
    &:hover{
        color:#4ca300;
    }
`
const TitleProductBlock = (name: any) => {
    return (
        <TitleLink href={''}> Смартфон HUAWEI nova 10 Pro 8+256GB Starry Black (GLA-LX1)</TitleLink>
    )
}

export default TitleProductBlock