import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div<any>`
position:fixed;
    z-index:11111;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    background-color:rgba(43, 43, 43, 0.4);
    justify-content:center;
    align-items:center;
    transition:opacity ease .9s;
    visibility:${({ visibleModalEditTel }) => visibleModalEditTel ? 'visible' : 'hidden'};
    opacity:${({ visibleModalEditTel }) => visibleModalEditTel ? 1 : 0};
    
    pointer-events: ${({ visibleModalEditTel }) => visibleModalEditTel == false && 'none'};
`
const Container = styled.div`
    width:350px;
    background-color:#fff;
    border-radius:5px;
    padding:45px;
    position: relative;
`
const Form = styled.form`
`
const Title = styled.h3`
    
    margin-bottom:5px;
`
const SupTitle = styled.span`
    display:inline-flex;
    margin-bottom:20px;
    color:#b4b4b4;
`
const InputBox = styled.div`
    width:100%;
    border-radius:2px;
    border:1px solid #616161;
    position:relative;
    padding:10px;
    min-height:58px;
    display: flex;
`
const InputBoxTel = styled(InputBox)`
    background-color:#ededed;
    pointer-events: none;
    cursor: default;
    margin-bottom: 20px;
    user-select:none;
`
const InputBoxCode = styled(InputBox)`
    align-items: center;
    background-color:#ffffff;
    margin-bottom:20px;
`
const Label = styled.label`
    position:absolute;
    font-size:12px;
    color:#b4b4b4;
`
const InputDefault = styled.input`
    border:none;
    background-color:transparent;
    width:100%;
    outline:none;
    &::placeholder{
        color:#b4b4b4;
    }
`
const InputTel = styled(InputDefault)`
    margin:20px 0 0;
    
`
const Button = styled.button`
    width:100%;
    text-align:center;
    background-color:#79bf47;
    border:none;
    color:#fff;
    font-size:20px;
    font-weight:600;
    line-height: 50px;
    border-radius:3px;
    margin-bottom: 20px;
    cursor:pointer;
`
const BtnClose = styled.button`
    position:absolute;
    top:0;
    right:10px;
    border:none;
    background-color:transparent;
    font-size:30px;
    cursor:pointer;
`
const Text = styled.p<any>`
    margin-bottom:${({ secondary }) => secondary && '20px'};
    color:#b4b4b4;
    font-size:12px;
`
const ModalProfileUserEditTel = ({ visibleModalEditTel, setVisibleModalEditTel }: any) => {
    const [getCode, setGetCode] = useState(false);
    const getCodeСonfirm = () => {
        setGetCode(true)
    }
    const handleCloseModal = () => {
        setVisibleModalEditTel(false)
    }
    useEffect(() => {
        visibleModalEditTel && setGetCode(false)
    }, [visibleModalEditTel])
    return (
        <Wrap visibleModalEditTel={visibleModalEditTel}>
            <Container>
                <Form>
                    <Title>Изменение телефона</Title>
                    <SupTitle>подтвердите текущей номер</SupTitle>
                    <InputBoxTel>
                        <Label>телефон</Label>
                        <InputTel placeholder='+7 960 6024738' />
                    </InputBoxTel>
                    {getCode ?
                        <>
                            <InputBoxCode>
                                <InputDefault placeholder='Код из СМС' />
                            </InputBoxCode>
                            <Text secondary>
                                получить новый код можно через нужен НУЖЕН ТАЙМЕР!!!
                            </Text>
                            <Text secondary>
                                Код подтверждения из 6 цифр выслан на номер +7 960 602-47-38.Если вы не используете этот номер телефона,для изменения обратитесь в любой розничный магазин эльдорадо.
                            </Text>
                        </>

                        : <>
                            <Button onClick={getCodeСonfirm}>Получить код</Button>
                            <Text>
                                Код подтверждения будет выслан на номер +7 960 602-47-38. Если вы не используете этот номер телефона, для изменения обратитесь в любой розничный магазин Эльдорадо.
                            </Text>
                        </>
                    }

                </Form>
                <BtnClose onClick={handleCloseModal}>x</BtnClose>
            </Container>
        </Wrap >
    )
}

export default ModalProfileUserEditTel