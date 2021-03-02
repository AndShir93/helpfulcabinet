import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import {AutoFields, AutoForm, SubmitField} from 'uniforms-semantic'
import { bridge as schema } from '../components/autoforms/RestorePassowrdScheme'

function RestorePassword(){
    return(
        
        <Grid columns={1} textAlign='center' verticalAlign='middle' padded style={{height: '100vh'}}>
            <Grid.Column computer={4} tablet={6} mobile={16}>
                <AutoForm schema={schema} onSubmit={console.log('sd')}>
                    <Header as='h2'>Восстановление пароля:</Header>
                    <AutoFields/>
                    <SubmitField value='Получить пароль'/>
                </AutoForm>
            </Grid.Column>
        </Grid>
    )
}
export default RestorePassword