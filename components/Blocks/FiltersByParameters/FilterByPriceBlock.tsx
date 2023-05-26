import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'


import SliderMultiRange from '../../sliders/SliderMultiRange';
const FilterByPrice = styled.div`
    
`
const FilterByPriceTop = styled.div<any>`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
    svg{
        transform: rotate(${({ visibleFilterByPrice }) => visibleFilterByPrice ? '0' : '180deg'});
    }
`
const FilterByPriceTitle = styled.h4`
cursor: pointer;
&:hover{
    color:#1f7806;
}`
const FilterByPriceCounts = styled.div`
    display:flex;
    justify-content:space-between;
    overflow:hidden;
    margin-bottom:30px;
`
const FilterByPriceCountTitle = styled.label`
    margin-right:5px;
`
const FilterByPriceCountInput = styled.input`
    width:100%;
    border:none;
    outline:none;
`
const FilterByPriceCountBlock = styled.div<any>`
    display:flex;
    align-items: baseline;
    border:1px solid ${({ activeFilterByPriceBlock }) => activeFilterByPriceBlock ? "#1a8b01" : "#d5d5d5"};
    padding:10px 10px;
    border-radius:4px;
    &:first-child{
        margin-right:10px;
    }
`


const FilterByPriceRangePrice = styled.div`
position:relative;

`

const FilterByPriceRangePriceTrack = styled.div`
    width:100%;
    height:3px;
    background-color:#2c7d00;
    position:relative;
    z-index:-1;
`
const FilterByPriceRangePriceDots = styled.div`
    width:25px;
    height:25px;
    border-radius:50%;
    border:3px solid #208a00;
    position:absolute;
    z-index:-1;
    background-color:#fff;
`
const FilterByPriceRangePriceDotsStart = styled(FilterByPriceRangePriceDots)`
top:-10px;
left:0;
`
const FilterByPriceRangePriceDotsEnd = styled(FilterByPriceRangePriceDots)`
top:-10px;
right:0;
`
const Btn = styled.button`
    padding:14px;
    color:#fff;
    background-color:#058218;
    border-radius:4px;
    border:none;
`
const FilterByPriceBlock = ({ visibleFilterByPrice, setVisibleFilterByPrice, activeFilterByPriceBlock, setActiveFilterByPriceBlock }: any) => {

    const [currentRange, setCurrentRange] = useState(50);
    return (
        <FilterByPrice >
            <FilterByPriceTop visibleFilterByPrice={visibleFilterByPrice} onClick={() => setVisibleFilterByPrice(!visibleFilterByPrice)}>
                <FilterByPriceTitle>
                    Цена
                </FilterByPriceTitle>
                <IoIosArrowDown />
            </FilterByPriceTop>
            {visibleFilterByPrice && <FilterByPriceCounts>
                <FilterByPriceCountBlock activeFilterByPriceBlock={activeFilterByPriceBlock == 1} onClick={() => setActiveFilterByPriceBlock(1)}>
                    <FilterByPriceCountTitle>
                        от
                    </FilterByPriceCountTitle>
                    <FilterByPriceCountInput placeholder='55' />
                </FilterByPriceCountBlock>
                <FilterByPriceCountBlock activeFilterByPriceBlock={activeFilterByPriceBlock == 2} onClick={() => setActiveFilterByPriceBlock(2)}>
                    <FilterByPriceCountTitle>
                        до
                    </FilterByPriceCountTitle>
                    <FilterByPriceCountInput placeholder='415 900' />
                </FilterByPriceCountBlock>
            </FilterByPriceCounts>}
            <FilterByPriceRangePrice>
                <FilterByPriceRangePriceTrack />
                <FilterByPriceRangePriceDotsStart />
                <FilterByPriceRangePriceDotsEnd />
            </FilterByPriceRangePrice>
            <SliderMultiRange
                min={0}
                max={7}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            <Btn>Применить</Btn>
        </FilterByPrice>
    )
}

export default FilterByPriceBlock