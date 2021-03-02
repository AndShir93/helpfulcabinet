import react from "react";
import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import {AutoFields, AutoForm, SubmitField} from 'uniforms-semantic'
import { bridge as schema } from '../components/autoforms/RegistrationSchema'

function Registration(){
    return(
        <>
            <Grid columns={1} textAlign='center' verticalAlign='middle' padded style={{height: '100vh'}}>
                <Grid.Column computer={4} tablet={6} mobile={16}>
                    <AutoForm schema={schema} onSubmit={console.log('sd')}>
                        <Header as='h2'>Регистрация:</Header>
                        <AutoFields/>
                        <SubmitField value='Получить пароль'/>
                    </AutoForm>
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Registration