import React, { useReducer } from 'react';
import logo from '../../public/img/vertical-logo.svg';
import signIn from '../../public/img/sign_in.svg'
import {Menu, Image, Modal } from 'semantic-ui-react';
import { createMedia } from '@artsy/fresnel';
import NavMenu from './NavMenu';
import ModalAuthorization from './ModalAuthorization'
import style from '../../styles/NavMenu.module.css'

export default function PageMenu (){
    const {MediaContextProvider, Media } = createMedia({
        breakpoints: {
            'mobileBreakpoint': 0,
            'tabletBreakpoint': 768
        }
    })
    function reducer(state, action){
        switch (action.type){
            case 'OPEN_MODAL' : return {open: true, dimmer: action.dimmer}
            case 'CLOSE_MODAL' : return {open: false, dimmer: action.dimmer}
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(reducer,({open:false, dimmer: undefined}))
    const {open, dimmer} = state
    return(
        <>
            <Menu color='green' secondary inverted>
                <Menu.Item fitted><Image centered src={logo} href='/' size='small' alt='Полезные Люди'/></Menu.Item>
                <MediaContextProvider>
                    <Media className={style.fluid} greaterThanOrEqual='tabletBreakpoint'>
                        <NavMenu color='green' inverted/>
                    </Media>
                </MediaContextProvider>
                <Menu.Item as='a' position='right' onClick={()=> dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})}><Image size='mini' src={signIn}/>Войти</Menu.Item>
            </Menu>
            <Modal  dimmer={dimmer} open={open} size='mini' onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
                <Modal.Content>
                    <ModalAuthorization />
                </Modal.Content>
            </Modal>
        </>
    )
}