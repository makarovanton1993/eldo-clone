import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'

const SelectionCategoryTopWrap = styled.div`
    margin-bottom:50px;
`

const SelectionCategoryTopTitle = styled.h3`
    margin-bottom:10px;
`
const SelectionCategoryTop = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
`
const SelectionCategoryTopList = styled.ul<any>`
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
const SelectionCategoryTopListItem = styled.li<any>`
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
const SelectionCategoryTopLeft = styled.div`
`
const SelectionCategoryTopLink = styled(Link) <any>`
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
const SelectionCategoryTopButton = styled.button <any>`
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
const SectionSearchProduct = () => {
    const [visibleCategoryTop, setVisiblaCategoryTop] = useState(false);
    const [activeCategoryTop, setActiveCategoryTop] = useState(0);
    console.log(visibleCategoryTop)
    const categoryTopItem = [{ id: 0, name: 'Все', catTitle: "All" },
    { id: 1, name: 'дешевые', catTitle: "All" },
    { id: 2, name: '50 дюймов', catTitle: "All" },
    { id: 3, name: '22 дюйма', catTitle: "All" },
    { id: 4, name: '75 дюймов', catTitle: "All" },
    { id: 5, name: 'маленькие', catTitle: "All" },
    { id: 6, name: '60 дюймов', catTitle: "All" },
    { id: 7, name: 'телевизоры Hi', catTitle: "All" },
    { id: 8, name: 'на кухню', catTitle: "All" },
    { id: 9, name: '27 дюймов', catTitle: "All" },
    { id: 10, name: 'с большим экраном', catTitle: "All" },
    { id: 11, name: 'до 10 000 р.', catTitle: "All" },
    { id: 12, name: 'с хорошей картинкой', catTitle: "All" },
    { id: 13, name: '24 дюйма', catTitle: "All" },
    ]
    const router = useRouter();
    console.log(router)
    return (
        <SelectionCategoryTopWrap>
            <SelectionCategoryTopTitle>Телевизоры</SelectionCategoryTopTitle>
            <SelectionCategoryTop>
                <SelectionCategoryTopList visibleCategoryTop={visibleCategoryTop} >
                    {categoryTopItem.map(({ id, name }, i) =>
                        <SelectionCategoryTopListItem key={i} onClick={() => { setActiveCategoryTop(id) }} active={id === activeCategoryTop && "active"}>
                            <SelectionCategoryTopLink href="/">{name}</SelectionCategoryTopLink>
                        </SelectionCategoryTopListItem>


                    )}
                </SelectionCategoryTopList>
                <SelectionCategoryTopLeft>
                    <SelectionCategoryTopButton onClick={() => { setVisiblaCategoryTop(prev => !prev) }}>+ Еще подборки</SelectionCategoryTopButton>
                </SelectionCategoryTopLeft>
            </SelectionCategoryTop >
        </SelectionCategoryTopWrap>
    )
}

export default SectionSearchProduct