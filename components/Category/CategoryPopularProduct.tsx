import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const CategoryTopWrap = styled.div`
    margin-bottom:50px;
`


const CategoryTop = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
`
const CategoryTopList = styled.ul<any>`
    display:flex;
    max-width: 1000px;
    flex-wrap: wrap;
    height:${({ visibleCategoryTop }): any => visibleCategoryTop ? "" : "50px"};
    overflow:${({ visibleCategoryTop }): any => visibleCategoryTop ? "auto" : "hidden"};
    transition:overflow ease .5s;
    overflow: hidden;
    -webkit-transition: overflow ease .5s;
    transition: overflow ease .5s;
    padding-top: 10px;
    padding-left: 10px;
`
const CategoryTopListItem = styled.li<any>`
        margin-bottom:10px;
        margin-right:10px;
    /* padding:3px; */
    transition:border ease .8s;
    position:relative;
    background-color:${({ active }) => active ? "#96ec8c" : "transparent"} ;
    border:${({ active }) => active ? "" : "1px dashed grey"} ;
    box-sizing:border-box;
    transition:background-color ease .1s;
    transition:border ease .1s;
    &:after{
        content:'';
        position:absolute;
        top:-2px;
        left:-2px;
        width:100%;
        height:100%;
        border:${({ active }) => active ? "2px solid #6bc44d " : ""} ;
        border-radius:3px;
        box-sizing:content-box;
        transition:border ease .1s;
        
    }
    &:hover{
        &:after{
            border:2px solid #6bc44d;
        }
        
    }
`
const CategoryTopLeft = styled.div`
`
const CategoryTopLink = styled(Link) <any>`
    background-color:transparent;
    padding:8px 10px;
    font-size:14px;
    white-space:nowrap;
    cursor:pointer;
    display:flex;
    width:100%;
    height:100%;
    border:none;
`
const CategoryTopButton = styled.button <any>`
    background-color:transparent;
    padding:8px 10px;
    font-size:14px;
    white-space:nowrap;
    cursor:pointer;
    display:flex;
    width:100%;
    height:100%;
    border:none;
`
const CategoryPopularProduct = ({ categoryTop, activeCategoryTop, setActiveCategoryTop }: any) => {
    const [visibleCategoryTop, setVisibleCategoryTop] = useState(false);

    const router = useRouter();
    console.log(router)
    return (
        <CategoryTopWrap>
            <CategoryTop>
                <CategoryTopList visibleCategoryTop={visibleCategoryTop} >
                    {categoryTop.map(({ id, name }, i) =>
                        <CategoryTopListItem key={i} onClick={() => { setActiveCategoryTop(id) }} active={id === activeCategoryTop && "active"}>
                            <CategoryTopLink href="/">{name}</CategoryTopLink>
                        </CategoryTopListItem>
                    )}
                </CategoryTopList>
                <CategoryTopLeft>
                    <CategoryTopButton onClick={() => { setVisibleCategoryTop(prev => !prev) }}>+ Еще подборки</CategoryTopButton>
                </CategoryTopLeft>
            </CategoryTop >
        </CategoryTopWrap>
    )
}

export default CategoryPopularProduct