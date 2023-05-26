import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import styled from 'styled-components'

const Wrap = styled.div`
    display:flex;
    align-items:center;
    margin-right:25px;
    
    user-select:none;
    svg{
    transform:translateY(3px);
    fill:#4ca300;
}
`

const RatingBlock = () => {
    return (
        <Wrap>
            <AiFillStar />
            5
        </Wrap>
    )
}

export default RatingBlock