import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../../styles/components/component'
import ModalAuthAndRegistration from '../../Modal/ModalAuthAndRegistration'

const AuthWrap = styled.div`
    
`
const AuthButton = styled(Button) <any>`
    display: flex;
    align-items:center;
    border:none;
    background-color:transparent;
    margin-right: 50px;
    cursor: pointer;
    & svg{
        margin-right: 9px;
    }
    &:hover{
        color:var(--main-color);
    }
    @media(max-width: 1242px) {
        position: absolute;
        top:-37px;
        right: 0;
        margin-right: 0;
  }
  `
// interface AuthBlockProps {
//     visibleAuthAndRegistModal: boolean,
//     setVisibleAuthAndRegistModal: Dispatch<SetStateAction<boolean>>
// }

const AuthBlock = () => {
    const [visibleAuthAndRegistModal, setVisibleAuthAndRegistModal] = useState(false);
    const handleOpenModalAuth = () => {
        setVisibleAuthAndRegistModal(true)
    }
    useEffect(() => {
        visibleAuthAndRegistModal ?
            document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';
    }, [visibleAuthAndRegistModal])
    return (
        <AuthWrap>
            < AuthButton onClick={handleOpenModalAuth} >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M2.46777 13.6091c.61188-2.3252 2.80629-4.15793 5.3821-4.15793 2.56343 0 4.77043 1.71133 5.38373 4.16453l-1.0671.2667c-.489-1.9561-2.25032-3.3312-4.31663-3.3312-2.05393 0-3.82787 1.4741-4.31831 3.3378l-1.06379-.2799z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M8 14.9c3.8108 0 6.9-3.0892 6.9-6.9 0-3.81076-3.0892-6.9-6.9-6.9-3.81076 0-6.9 3.08924-6.9 6.9 0 3.8108 3.08924 6.9 6.9 6.9zM8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M11.6004 6.9999c0 1.98823-1.61178 3.6-3.60001 3.6-1.98822 0-3.6-1.61177-3.6-3.6 0-1.98822 1.61178-3.6 3.6-3.6 1.98823 0 3.60001 1.61178 3.60001 3.6zm-3.60001 2.5c1.38071 0 2.50001-1.11929 2.50001-2.5s-1.1193-2.5-2.50001-2.5-2.5 1.11929-2.5 2.5 1.11929 2.5 2.5 2.5z" clipRule="evenodd"></path></svg>
                Вход или регистрация
            </AuthButton >
            <ModalAuthAndRegistration visibleAuthAndRegistModal={visibleAuthAndRegistModal} setVisibleAuthAndRegistModal={setVisibleAuthAndRegistModal} />
        </AuthWrap>
    )
}

export default AuthBlock



