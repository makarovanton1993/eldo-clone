import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from 'react-icons/ai'
import styled from 'styled-components'
const Wrap = styled.div`
display:flex;`

const LinkChangeTypeCardInner = styled.div <any>`
    &:hover{
        svg {
            fill:#42bc0a;
        }
    }
    svg {
        width:28px;
        height:28px;
        fill:${({ activeType }) => activeType ? '#42bc0a' : '#7a7a7a'};
    }
`
const LinkChangeTypeCard = styled(Link) <any>``

const ChangeTypeCards = ({ activeTypeCard, handleActiveTypeCard }: any) => {
    const activeType = activeTypeCard
    return (
        <Wrap>
            <LinkChangeTypeCard href='#' onClick={() => handleActiveTypeCard(0)}  >
                <LinkChangeTypeCardInner activeType={activeType === 0}>
                    <AiOutlineAppstoreAdd />
                </LinkChangeTypeCardInner>
            </LinkChangeTypeCard>
            <LinkChangeTypeCard href='#' onClick={() => handleActiveTypeCard(1)}  >
                <LinkChangeTypeCardInner activeType={activeTypeCard === 1}>
                    <AiOutlineAppstore />
                </LinkChangeTypeCardInner>
            </LinkChangeTypeCard>
        </Wrap>
    )
}

export default ChangeTypeCards