import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'

const BonusLink = styled(Link)`
    display:inline-flex;
    border-radius:4px;
    margin-right:2px;
    margin-bottom:6px;
    padding:1px 4px;
    font-size:14px;
    font-weight:bold;
    border:1px solid #000;
`
const BonusItemBlock = ({ name }: any) => {
    return (
        <BonusLink href={'#'}>{name}</BonusLink>
    )
}

export default BonusItemBlock