import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from 'react-icons/ai'
import styled from 'styled-components'
const Wrap = styled.div``

const WrapChangeTypeCard = styled(Link) <any>`
    &:hover{
        svg {
            fill:#42bc0a;
        }
    }
    svg {
        width:28px;
        height:28px;
        fill:${({ activeTypeCard }) => activeTypeCard ? '#42bc0a' : '#7a7a7a'};
        
    }
    
`

const ChangeTypeCards = ({ activeTypeCard, handleActiveTypeCard }: any) => {


    return (
        <Wrap>
            <WrapChangeTypeCard href={'#'} onClick={() => handleActiveTypeCard(0)} activeTypeCard={activeTypeCard == 0} >
                <AiOutlineAppstoreAdd />
            </WrapChangeTypeCard>
            <WrapChangeTypeCard href={'#'} onClick={() => handleActiveTypeCard(1)} activeTypeCard={activeTypeCard == 1} >
                <AiOutlineAppstore />
            </WrapChangeTypeCard>
        </Wrap>
    )
}

export default ChangeTypeCards