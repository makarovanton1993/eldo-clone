import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Div } from '../../styles/components/component'

const WrapCart = styled(Div)`
    display: flex;
    align-items:center;
    position:relative;
    &:hover{
        color:var(--main-color);
        & svg {
            & path{
                fill:var(--main-color);
            }
        }
    }
    svg{
        margin-right: 9px;
    }
  `

const CartBlock = () => {
    return (
        <Link href='/personal/basket'>
            <WrapCart>
                <svg aria-hidden="true" width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.2315 17.915c-1.6704 0-3.0294 1.3649-3.0294 3.0424 0 1.6776 1.359 3.0425 3.0294 3.0425 1.6704 0 3.0294-1.3649 3.0294-3.0425 0-1.6775-1.359-3.0424-3.0294-3.0424zm0 4.2594c-.6682 0-1.2117-.5458-1.2117-1.217 0-.6711.5435-1.2169 1.2117-1.2169.6683 0 1.2118.5458 1.2118 1.2169 0 .6712-.5435 1.217-1.2118 1.217zM23.8065 4.48784c-.1721-.22118-.4359-.35018-.7155-.35018H5.60987L4.79192.70065C4.69407.289944 4.3284 0 3.90792 0H.908815C.40686-.00004765 0 .408561 0 .912675c0 .504115.40686.912725.908815.912725H3.19058l2.95365 14.0802c.09785.4111.46352.7007.884.7007H20.8795c.4178 0 .7819-.286.8822-.6931l2.2115-10.64351c.0669-.27254.0054-.56068-.1667-.78185zm-3.638 10.29306H7.74557L6.04425 5.9631H21.9298l-1.7613 8.8178zM8.23935 17.915c-1.67044 0-3.02939 1.3649-3.02939 3.0424 0 1.6776 1.359 3.0425 3.02939 3.0425 1.67038 0 3.02935-1.3649 3.02935-3.0425 0-1.6775-1.35897-3.0424-3.02935-3.0424zm0 4.2594c-.66828 0-1.21176-.5458-1.21176-1.217 0-.6711.54348-1.2169 1.21176-1.2169.66827 0 1.21175.5458 1.21175 1.2169 0 .6712-.54348 1.217-1.21175 1.217z"></path></svg>
                Корзина
                {/* {cartItemslength !== 0 && <CartSpan>{cartItemslength}</CartSpan>} */}
            </WrapCart>
        </Link>
    )
}

export default CartBlock