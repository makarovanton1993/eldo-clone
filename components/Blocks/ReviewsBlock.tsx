import Link from 'next/link'
import React from 'react'
import { MdOutlineReviews } from 'react-icons/md'
import styled from 'styled-components'

const Wrap = styled.div`
display:flex;
align-items:center;
svg{
    transform:translateY(3px);
    fill:#4ca300;
    margin-right:5px;
}`

const ReviewsBlock = () => {
    return (
        <Wrap><Link href={'#'}>
            <MdOutlineReviews />
            110 отзывов
        </Link></Wrap>
    )
}

export default ReviewsBlock