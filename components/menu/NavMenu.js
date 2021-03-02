import React from 'react'
import {Menu, Image} from 'semantic-ui-react'
import logoInstagram from '../../public/img/instagram.svg'
import logoVk from '../../public/img/vk.svg';

export default function(props){
    return(
        <Menu color={props.color} inverted={props.inverted} secondary stackable>
            <Menu.Item as='a'>Ипотека</Menu.Item>
            <Menu.Item as='a'>Услуги</Menu.Item>
            <Menu.Item as='a'>Контакты</Menu.Item>
            <Menu.Item position='right'>
                <Image size='tiny' href='https://vk.com/poleznie_lydi' src={logoVk} alt='ВК' target='_blank' style={{margin:'0 10px 0 0'}}/>
                <Image size='tiny' href='https://www.instagram.com/poleznieludi/?hl=ru' src={logoInstagram} alt='Instagram' target='_blank'/>
            </Menu.Item>
        </Menu>
    )
}