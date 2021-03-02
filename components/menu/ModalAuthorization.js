import React from 'react'
import Link from 'next/link'
import { Grid, Header } from 'semantic-ui-react'
import {AutoFields, AutoForm, SubmitField} from 'uniforms-semantic'
import { bridge as schema } from '../autoforms/AuthorizationSchema'

export default function ModalAuthorization(){
    return(
        <AutoForm schema={schema} onSubmit={console.log('sd')}>
            <Header as='h2'>Авторизация</Header>
            <AutoFields/>
            <SubmitField value='ВХОД'/>
            <Grid columns={2} padded>
                <Grid.Column><Link href='/restore-password'>Потеряли пароль?</Link></Grid.Column>
                <Grid.Column><Link href='/registration'>Регистрация</Link></Grid.Column>
            </Grid>
        </AutoForm>
    )
}