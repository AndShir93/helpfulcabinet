import React from 'react'
import Contacts from '../components/Contacts'
import Catalog from '../components/Catalog'
import PageMenu from '../components/menu/PageMenu'
import MenuHeader from '../components/menu/MenuHeader'

export default function MainPage(){
    return(
        <>
            <PageMenu/>
            <MenuHeader/>
            <Catalog/>
            <Contacts/>
        </>
    )
}