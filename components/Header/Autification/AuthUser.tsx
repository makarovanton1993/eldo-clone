import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authStatus, getcurrentUser, user } from '../../../redux/slices/userSlice';
import { Div, Ul, Li, Span } from '../../../styles/components/component';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
interface AuthUserProps {
    isAuth: boolean
}
const WrapAuthUser = styled(Div)`
    padding: 0px 50px;
    display: flex;
    align-items:center;
`
const WrapProfile = styled(Div)`
    display: flex;
    position: relative;
    &:hover{
        & WrapProfileInner{
            color: var(--main-color);
        }
     }
`
const WrapProfileInner = styled(Div)`
    margin-right: 5px;
    display:flex;
    & svg{
        margin-right: 5px;
    }
    & span{
        border-bottom:1px dashed rgb(124, 118, 118);
    }

`
const WrapProfileUser = styled(Div)``
const WrapProfileSelect = styled(Div)`
    padding-top:13px ;
    position: absolute;
    top:18px;
    z-index: 11111111111;
    background-color:var(--white-color);        
`
const WrapProfileSelectList = styled(Ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const WrapProfileSelectItem = styled(Li)`
    padding: 6px 10px;
    margin-bottom: 5px;
    width: 100%;
    &:hover{
        background-color:rgb(238, 230, 230);
        & a,button{
            color:var(--main-color)
        }
    }
    & a{
        color:rgb(119, 118, 118);
    }
    & button{
        border:none;
        color:rgb(119, 118, 118);
        background-color:transparent;
    }
`
const WrapNameBonus = styled(Span)`
    font-size: 14px;
    white-space: nowrap;
`
const WrapScoreBonus = styled(Span)`
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
    color:var(--main-color);
`
const AuthUser = ({ isAuth }: AuthUserProps) => {
    const dispatch = useDispatch();
    const [isHoverProfile, setIsHoverProfile] = useState(false);
    const userCur = useSelector(user);
    const router = useRouter();
    const exsitUser = () => {
        dispatch(authStatus(false));
        dispatch(getcurrentUser({}));
        localStorage.removeItem('token');
        Cookies.set('token', '')
        router.push('/');
    }

    return (
        <WrapAuthUser>
            <WrapProfile >
                <WrapProfileUser onMouseEnter={() => { setIsHoverProfile(!isHoverProfile) }} onMouseLeave={() => { setIsHoverProfile(!isHoverProfile) }}>
                    <Link href={'/personal/club/operations'}>
                        <WrapProfileInner >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M2.46777 13.6091c.61188-2.3252 2.80629-4.15793 5.3821-4.15793 2.56343 0 4.77043 1.71133 5.38373 4.16453l-1.0671.2667c-.489-1.9561-2.25032-3.3312-4.31663-3.3312-2.05393 0-3.82787 1.4741-4.31831 3.3378l-1.06379-.2799z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M8 14.9c3.8108 0 6.9-3.0892 6.9-6.9 0-3.81076-3.0892-6.9-6.9-6.9-3.81076 0-6.9 3.08924-6.9 6.9 0 3.8108 3.08924 6.9 6.9 6.9zM8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M11.6004 6.9999c0 1.98823-1.61178 3.6-3.60001 3.6-1.98822 0-3.6-1.61177-3.6-3.6 0-1.98822 1.61178-3.6 3.6-3.6 1.98823 0 3.60001 1.61178 3.60001 3.6zm-3.60001 2.5c1.38071 0 2.50001-1.11929 2.50001-2.5s-1.1193-2.5-2.50001-2.5-2.5 1.11929-2.5 2.5 1.11929 2.5 2.5 2.5z" clipRule="evenodd"></path></svg>
                            <span>{userCur.name === null ? '' : userCur.name}</span>

                        </WrapProfileInner>
                    </Link>
                    {isHoverProfile && <WrapProfileSelect>
                        <WrapProfileSelectList>
                            <WrapProfileSelectItem><Link href={'/personal/club/operations/'} onClick={() => { setIsHoverProfile(false) }}>Мои бонусы</Link></WrapProfileSelectItem>
                            <WrapProfileSelectItem><Link href={'/personal/orders/'} onClick={() => { setIsHoverProfile(false) }}>Мои заказы</Link></WrapProfileSelectItem>
                            <WrapProfileSelectItem><Link href={'/personal/club/offers/'} onClick={() => { setIsHoverProfile(false) }}>Предложения</Link></WrapProfileSelectItem>
                            <WrapProfileSelectItem><Link href={'/personal/wish-list/'} onClick={() => { setIsHoverProfile(false) }}>Избранное</Link></WrapProfileSelectItem>
                            <WrapProfileSelectItem><Link href={'/personal/club/user-profile/'} onClick={() => { setIsHoverProfile(false) }}>Профиль</Link></WrapProfileSelectItem>
                            <WrapProfileSelectItem><button onClick={exsitUser}>Выйти</button></WrapProfileSelectItem>
                        </WrapProfileSelectList>
                    </WrapProfileSelect>}
                </WrapProfileUser>

                <WrapNameBonus>ваш баланс</WrapNameBonus>
                <WrapScoreBonus>0 бонусов</WrapScoreBonus>
            </WrapProfile>
        </WrapAuthUser>
    )
}

export default AuthUser