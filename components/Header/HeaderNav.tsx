import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import HelpBlock, { HelpBlockProps } from '../HelpBlock';
import styled from 'styled-components';
import { Button, Div, Li, Ul } from '../../styles/components/component';
import { AppContent } from '../Layout/Layout';
import path from 'path';
// import styles from './HeaderNav.module.scss';
export interface HeaderNavPros {
    visibleMenuHelp: boolean,
    setVisibleMenuHelp: (value: boolean) => void
}
const WrapHeaderNav = styled(Div)`
    @media(max-width: 1242px) {
        width: 100%;
    }
    @media(max-width: 998px) {
        width: initial;
    }
`
const List = styled(Ul)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1242px) {
        margin-bottom: 15px;
    }
    @media(max-width: 998px) {
        display: none;
    }
`
const Item = styled(Li)`
    display: flex;
    align-items:center;
    margin-left: 20px;
    font-size: 13px;
    line-height: 16px;
    color:rgb(128, 126, 126);
    @media(max-width: 1242px) {
        &:first-child{
            margin-left: 0;
        }
    }
`
const WrapLink = styled(Link) <any>`
    display: flex;
    align-items:center;
    & svg{
        margin-right: 6px;
    }
    &:hover{
        color:var(--main-color);
    }
`
const WrapButtonHelp = styled(Div) <any>`
    
`
const WrapButtonHelpInner = styled(Button) <any>`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    & svg{
        & path{
            fill:${({ activeMenuItem }): any => activeMenuItem ? "rgba(26, 156, 0, 0.5)" : "rgba(128, 126, 126, 0.5)"};
        }
        &:hover{
            & path{
                fill:var(--main-color);
            } 
        }
    }
`
const WrapLinkPhone = styled(WrapLink)`
    font-size: 12px;
    font-weight: 600;
`
const ListMd = styled(Ul)`
    display: none;
    @media(max-width: 998px) {
        display: flex;
        align-items:center;
        margin-right: 20px;
    }
    @media(max-width: 760px) {
        
    }
    @media(max-width: 320px) {
        margin-right: 0;
        & li:nth-child(2){
            display: none;
        }
    }
`
const ItemMd = styled(Li)`
    display: none;
    @media(max-width: 998px) {
        margin: 0 15px;
        & a {
            & svg{
                & path{
                    fill: rgb(150, 150, 150);
                }
            }
        &:hover{
            & svg{
                & path{
                    fill: rgb(13, 202, 22);
                }
            }
        } 
        }
    }
    @media(max-width: 760px) {
        margin: 0 10px;
        &:first-child{
            display: none;
        }
        &:last-child{
            & a {
                & svg{
                    & path{
                        fill: rgb(150, 150, 150);
                    }
                }
            }
        }
    }
`
const navItems = [{
    desc: 'eldoJoy',
    name: 'Эльдорадости',
    img: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="white"></circle><path d="M20 8.9993H11.1429L11.9045 5L0 10.9998H8.85712L8.09547 15L20 8.9993Z" fill="#76BC21"></path></svg>,
    type: 'Link',
    href: '/club'
}, {
    desc: 'magazine',
    name: 'Магазины',
    img: <svg aria-hidden="true" width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M2.87446 1.09657L1.31492 4.98442H18.6851l-1.5596-3.88785H2.87446zM1.96655.407323C2.06524.161313 2.30418 0 2.56989 0H17.4301c.2657 0 .5047.161313.6033.407323l1.9195 4.785047c.1707.42563-.1436.88863-.6034.88863H.65045c-.459714 0-.774068-.463-.6033326-.88863L1.96655.407323z"></path><path fill="currentColor" d="M3.10261 6.13173v8.77257H16.8986V6.13173H3.10261zm-.59983-1.09657H17.4984c.276 0 .4998.22316.4998.49844v9.9688c0 .2753-.2238.4985-.4998.4985H2.50278c-.27606 0-.49985-.2232-.49985-.4985V5.5336c0-.27528.22379-.49844.49985-.49844z"></path><path fill="currentColor" d="M10.4502 8.62454c0-.35787.2909-.64798.6498-.64798h3.7989c.3589 0 .6498.29011.6498.64798v6.77886c0 .3578-.2909.2344-.6498.2344H11.1c-.3589 0-.6498.1234-.6498-.2344V8.62454zm1.0997.4486v5.88166h2.8991V9.07314h-2.8991zM4.42287 8.62928c-.00264-.35971.28905-.65272.64979-.65272h2.82773c.35888 0 .64981.29011.64981.64798v3.78816c0 .3579-.29093.648-.64981.648h-2.7999c-.35703 0-.64718-.2872-.6498-.6433l-.02782-3.78812zm1.10297.44386l.02123 2.89096h1.90345V9.07314H5.52584zM6.97392.390738C7.0437.158821 7.25776 0 7.50057 0H12.999c.2621 0 .4877.184476.5391.440759l.9997 4.984421c.0323.16108-.0095.32811-.1139.45514-.1045.12703-.2605.20068-.4252.20068H6.00101c-.1738 0-.33738-.08195-.44113-.221-.10375-.13905-.13546-.31883-.08551-.48484L6.97392.390738zm.93575.705832L6.74001 4.98442H13.328l-.7798-3.88785H7.90967z"></path></svg>,
    type: 'Link',
    href: '/'
}, {
    desc: 'pointDeliv',
    name: 'Пункты выдачи',
    img: <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9725 5.97945C16.9725 5.80184 16.8652 5.64181 16.701 5.5743L10.5145 3.03285C10.4079 2.98905 10.2883 2.98905 10.1816 3.03285L3.99519 5.5743C3.83092 5.64178 3.72363 5.80184 3.72363 5.97945V14.0206C3.72363 14.1982 3.83089 14.3582 3.99519 14.4257L10.1816 16.9672C10.2871 17.0105 10.4057 17.0114 10.514 16.9671C10.5193 16.9654 10.285 17.0614 16.701 14.4257C16.8653 14.3582 16.9725 14.1982 16.9725 14.0206V5.97945ZM10.3481 8.08421L8.06861 7.14779L12.9948 4.99882L15.4267 5.99787L10.3481 8.08421ZM4.59964 6.66974L6.56629 7.47766V9.75702C6.56629 9.99891 6.7624 10.195 7.00429 10.195C7.24618 10.195 7.44229 9.99891 7.44229 9.75702V7.83753L9.91007 8.85132V15.9085L4.59964 13.727V6.66974ZM10.3481 3.91151L11.8665 4.53528L6.94029 6.68425L5.26945 5.99785L10.3481 3.91151ZM10.7861 8.85132L16.0965 6.66974V13.727L10.7861 15.9085V8.85132Z" fill="currentColor"></path></svg>,
    type: 'Link',
    href: '/'
}, {
    desc: 'statusOrder',
    name: 'Статус заказа',
    img: <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" fillRule="evenodd" d="M8.0002 3.44922c.30375 0 .55.24624.55.55v4.1c0 .30375-.24625.55-.55.55-.30376 0-.55-.24625-.55-.55v-4.1c0-.30376.24624-.55.55-.55z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M7.60343 7.71989c.21037-.21913.55854-.22623.77766-.01587L10.8811 10.104c.2191.2104.2262.5586.0159.7777-.2104.2191-.5586.2262-.7777.0159l-2.5-2.40006c-.21912-.21036-.22623-.55853-.01587-.77765z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M8 14.9c3.8108 0 6.9-3.0892 6.9-6.9 0-3.81076-3.0892-6.9-6.9-6.9-3.81076 0-6.9 3.08924-6.9 6.9 0 3.8108 3.08924 6.9 6.9 6.9zM8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8z" clipRule="evenodd"></path></svg>,
    type: 'Link',
    href: '/'
}, {
    desc: 'eldoblog',
    name: 'Эльдоблог',
    img: <svg aria-hidden="true" width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" fillRule="evenodd" d="M1.08499 12.4602c2.67864.0397 5.63724.2649 8.30908 1.3114V2.80876C7.01181 1.47181 4.04221 1.16428 1.08499 1.11405V12.4602zm8.65094 2.6578c.34047.1589.74317-.0867.74317-.4687V2.45442c0-.17214-.0859-.33315-.2306-.42158C7.38486.283122 3.77323.0211109.492891.00001014.220522-.00174187 0 .223812 0 .501754V13.0567c0 .278.220563.5031.492932.5047 3.078658.0185 6.408698.2341 9.242998 1.5566z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M16.9145 1.10955V11.8707c-2.1317.0906-4.512.5037-6.3363 1.9929V2.69567c1.7424-1.38191 3.8435-1.56534 6.3363-1.58612zM10.5782 15.3789c1.7105-1.925 4.3743-2.3714 6.9283-2.4184.2723-.005.493-.2297.493-.5077V.503277c0-.277941-.2208-.50345406-.4932-.5032769-2.8175.00183267-5.5865.072432-7.84736 2.0316299-.10656.09235-.16578.22938-.16578.37204V15.6662c0 .3272.51174.4563.70134.1925.0471-.0656.0952-.1297.1442-.1925.0667-.0854.1351-.1681.2052-.2484.0114-.013.0228-.026.0343-.0389z" clipRule="evenodd"></path></svg>,
    type: 'Link',
    href: '/club'
}, {
    desc: 'business',
    name: 'Для бизнеса',
    img: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.85714 2.76673C6.85714 2.38337 7.14739 2.0451 7.47909 2H13.4602C13.8127 2 14.1444 2.36082 14.1444 2.76673V5.19945H17.922C18.5646 5.19945 19 5.83088 19 6.46231V16.5229C19 17.1543 18.5646 17.7857 17.922 17.7857H3.07805C2.41463 17.7857 2 17.1543 2 16.5229V6.46231C2 5.83088 2.41463 5.19945 3.07805 5.19945H6.85714V2.76673ZM13.3285 2.71836H7.60777V5.15307H13.3285V2.71836ZM18.1233 6.08179V9.96057L15.8075 11.1558H5.19282L2.96437 9.96057V6.08179H18.1233ZM9.28512 8.71381C9.28512 8.37477 9.53697 8.08927 9.86078 8.07143C9.87877 8.07143 11.12 8.08927 11.12 8.08927C11.4618 8.08927 11.7137 8.35693 11.7137 8.69596C11.6957 9.01715 11.4259 9.28481 11.1021 9.28481H9.91475C9.59094 9.30266 9.30311 9.05284 9.28512 8.71381ZM4.56289 11.9463C4.66081 12.0255 4.77833 12.0783 4.89584 12.0783H9.99421V16.86H2.95904V10.9688L4.56289 11.9463ZM11.041 16.8828H18.1042V10.9688L16.3672 11.9463C16.2635 12.0255 16.1391 12.0783 16.0147 12.0783H11.041V16.8828Z" fill="currentColor"></path></svg>,
    type: 'Link',
    href: '/club'
}, {
    desc: 'numberPhone',
    name: '8 800 250 25 25',
    type: 'LinkPhone',
    href: 'tel:8 800 250 25 25'
}, {
    desc: 'help',
    img: <svg className={''} aria-hidden="true" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c6.714 0 10 3.857 10 8.857 0 4.857-3.429 8.714-10 8.714h-.429c-.571 0-1-.142-1.571-.142-.857 1-2.429 2.428-5 2.571.286-1.714 1.286-3.571 0-4.714-2-1.572-3-3.857-3-6.572C0 3.857 3.286 0 10 0zm0 1.429c-5.286 0-8.571 2.714-8.571 7.142 0 2.286.857 4.286 2.571 5.572 1.286 1 1.286 2.428 1 3.857.714-.286 1.429-.857 2.143-1.571l.571-.715.857.143C9 16 9.143 16 9.714 16H10c5.429 0 8.571-2.857 8.571-7.286C18.714 4.143 15.43 1.43 10 1.43zM6 10c-.714 0-1.429-.571-1.429-1.429 0-.714.572-1.428 1.429-1.428.714 0 1.429.571 1.429 1.428C7.429 9.43 6.857 10 6 10zm4.429 0C9.714 10 9 9.429 9 8.571c0-.714.571-1.428 1.429-1.428.714 0 1.428.571 1.428 1.428 0 .858-.714 1.429-1.428 1.429zm4.142 0c-.714 0-1.428-.571-1.428-1.429 0-.714.571-1.428 1.428-1.428.858 0 1.429.571 1.429 1.428C16 9.43 15.286 10 14.571 10z" fill="currentColor"></path></svg>,
    type: 'buttonHelp',

}]
const navItemsMd = [{ href: '/', img: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"></circle><path d="M30 14.599H17.6L18.6663 9L2 17.3998H14.4L13.3337 23L30 14.599Z" fill="#C4C4C4"></path></svg> },
{ href: '/', img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" height="20" viewBox="0 0 25 20"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth=".1" d="M3.58188 1.32072h-.03385l-.01257.03143L1.5921 6.21197l-.02741.06856H23.3574l-.0274-.06856-1.9433-4.85982-.0126-.03143H3.58188zM2.49696.527719C2.61234.239186 2.8917.05 3.20235.05H21.7198c.3106 0 .59.189186.7054.477719L24.817 6.50903c.1996.49922-.168 1.04222-.7054 1.04222H.81053c-.537459 0-.9050207-.543-.705391-1.04222L2.49696.527719z"></path><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth=".1" d="M3.86616 7.6132h-.05V18.6789H21.1074V7.6132H3.86616zm-.74744-1.27072H21.8048c.3164 0 .5729.25655.5729.57305V19.3766c0 .3165-.2565.573-.5729.573H3.11872c-.31637 0-.57287-.2565-.57287-.573V6.91553c0-.3165.2565-.57305.57287-.57305z"></path><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth=".1" d="M14.3923 11.2895h-.05v7.452H18.0549v-7.452h-3.6626zm-1.3203-.5108c0-.4197.3401-.7599.7597-.7599h4.7338c.4196 0 .7597.3402.7597.7599v8.4735c0 .1062-.0216.1666-.0518.2022-.0295.0349-.0743.0545-.1412.0624-.0676.008-.1501.0032-.2477-.0043-.0117-.0009-.0237-.0018-.0358-.0028-.0869-.0069-.183-.0145-.2832-.0145l-4.7338.0001c-.1002 0-.1963.0076-.2832.0144-.0121.001-.0241.0019-.0358.0028-.0976.0076-.18.0124-.2477.0044-.0668-.0079-.1117-.0275-.1412-.0624-.0301-.0356-.0518-.0961-.0518-.2022v-8.4736zM6.88518 11.2895h-.05037l.00037.0503.02646 3.6137.00036.0497h2.47154v-3.7137H6.88518zm-1.32442-.5052c-.00309-.4219.33797-.7655.75971-.7655h3.52366c.41957 0 .75977.3402.75977.7599v4.7352c0 .4198-.3402.76-.75977.76H6.35515c-.41741 0-.75666-.3369-.75972-.7544l-.03467-4.7352z"></path><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth=".1" d="M9.85701 1.32072c-.02208 0-.04155.01448-.0479.03563L8.3516 6.21617c-.00454.01513-.00166.03153.00778.04421.00943.01268.02431.02015.04011.02015h8.20931c.015 0 .0292-.00672.0386-.0183.0095-.01158.0133-.02682.0104-.0415l-.9717-4.85982c-.0046-.02337-.0252-.04019-.049-.04019H9.85701zM8.73886.502786C8.81946.234033 9.06675.05 9.34723.05h6.85157c.3028 0 .5634.213761.6228.510752l1.2458 6.230528c.0373.18666-.011.38022-.1317.52742-.1206.14721-.3009.23255-.4912.23255H7.47862c-.20077 0-.38973-.09496-.50958-.25609-.11985-.16113-.15648-.36947-.09879-.56185L8.73886.502786z"></path></svg> },
{
    href: '/', img: <svg aria-hidden="true" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c6.714 0 10 3.857 10 8.857 0 4.857-3.429 8.714-10 8.714h-.429c-.571 0-1-.142-1.571-.142-.857 1-2.429 2.428-5 2.571.286-1.714 1.286-3.571 0-4.714-2-1.572-3-3.857-3-6.572C0 3.857 3.286 0 10 0zm0 1.429c-5.286 0-8.571 2.714-8.571 7.142 0 2.286.857 4.286 2.571 5.572 1.286 1 1.286 2.428 1 3.857.714-.286 1.429-.857 2.143-1.571l.571-.715.857.143C9 16 9.143 16 9.714 16H10c5.429 0 8.571-2.857 8.571-7.286C18.714 4.143 15.43 1.43 10 1.43zM6 10c-.714 0-1.429-.571-1.429-1.429 0-.714.572-1.428 1.429-1.428.714 0 1.429.571 1.429 1.428C7.429 9.43 6.857 10 6 10zm4.429 0C9.714 10 9 9.429 9 8.571c0-.714.571-1.428 1.429-1.428.714 0 1.428.571 1.428 1.428 0 .858-.714 1.429-1.428 1.429zm4.142 0c-.714 0-1.428-.571-1.428-1.429 0-.714.571-1.428 1.428-1.428.858 0 1.429.571 1.429 1.428C16 9.43 15.286 10 14.571 10z" fill="currentColor"></path></svg>
},
{
    href: '/', img: <svg aria-hidden="true" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.422 11.498c1.998 1.988 4.257 3.89 5.213 2.939 1.303-1.297 2.085-2.42 4.952-.087 2.867 2.248.695 3.804-.608 5.1-1.477 1.47-6.863.087-12.163-5.273C.429 8.818-.874 3.46.516 1.99c1.217-1.21 2.78-3.457 5.126-.605 2.259 2.853 1.13 3.63-.087 4.927-.955.951.956 3.199 2.867 5.187z" fill="currentColor"></path></svg>
}]

const NavButtonHelp = ({ itemImg }: any) => {
    const [visibleHelpMenu, setVisibleHelpMenu] = useState(false);
    const buttonHelpRef = useRef<HTMLButtonElement | null>(null);

    const hanldeHelpMenu = () => {
        setVisibleHelpMenu(!visibleHelpMenu);
    }

    const handleClick = (e: any) => {
        if (buttonHelpRef.current) {
            !buttonHelpRef.current.contains(e.target) && setVisibleHelpMenu(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', e => handleClick(e))
        return document.removeEventListener('click', e => handleClick(e))
    }, [])
    return <WrapButtonHelp ref={buttonHelpRef}>
        <WrapButtonHelpInner onClick={hanldeHelpMenu} activeMenuItem={visibleHelpMenu} >
            {itemImg}
        </WrapButtonHelpInner >
        <HelpBlock visibleHelpMenu={visibleHelpMenu} setVisibleHelpMenu={setVisibleHelpMenu} />
    </WrapButtonHelp>
}

const HeaderNav = () => {

    return (
        <WrapHeaderNav>
            <List>
                {navItems.map((item) => {
                    return (<Item key={item.desc}>
                        {item.type === 'Link' ?
                            <WrapLink href={item.href} >
                                {item.img}
                                {item.name}
                            </WrapLink> :
                            item.type === 'LinkPhone' ?
                                <WrapLinkPhone href={item.href} >
                                    {item.name}
                                </WrapLinkPhone> :
                                item.type === 'buttonHelp' ?
                                    < NavButtonHelp itemImg={item.img} /> : ''
                        }
                    </Item>)
                })}
            </List>
            <ListMd>
                {navItemsMd.map((item) => {
                    return <ItemMd key={item.href + Math.random()}>
                        <Link href={item.href}>
                            {item.img}
                        </Link>
                    </ItemMd>
                })}
            </ListMd>
        </WrapHeaderNav >
    )
}

export default HeaderNav