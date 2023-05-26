import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
`
const SortSpan = styled.span`
    font-size:14px;
    margin-right:5px;
    color:#7a7a7a;
    `
const SortList = styled.ul`
    display:flex;
    
    `
const SortItem = styled.li<any>`
margin-right:10px;
transition:color ease .5s;
color:${({ activeItem }: any) => activeItem ? '#000' : '#7a7a7a'};
font-size:${({ activeItem }: any) => activeItem ? '16px' : '14px'};
font-weight:${({ activeItem }: any) => activeItem && 'bold'};
&:hover{
    color:#239621;
}`
const SortProductBlock = ({ activeSortItem, setActiveSortItem, handleChangeActiveSortItem }: any) => {
    const sortItem = [{ name: 'По популярности' }, { name: 'По цене' }, { name: 'По рейтингу' }, { name: 'По отзывам' }, { name: 'По размеру скидки' }, { name: 'По новизне' },]

    return (
        <Wrap>
            <SortSpan>Cортировать:</SortSpan>
            <SortList>
                {sortItem.map(({ name }, i) =>
                    <SortItem key={i} onClick={() => { handleChangeActiveSortItem(i) }} activeItem={activeSortItem == i}>
                        <Link href='#'>
                            {name}
                        </Link>
                    </SortItem>
                )}
            </SortList>
        </Wrap>
    )
}

export default SortProductBlock