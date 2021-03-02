import React from 'react'
import { Checkbox, Container, Grid, Image, Segment, Button } from 'semantic-ui-react'
import flatPhoto from '../public/img/flat.png'

export default function Catalog(){

    const products = [{
        id: 4001,
        date: '12.09.2020',
        address: 'Ижевск, ул. Ворошилова 82',
        price: '1 500 000',
        owner: 'Иванов Иван Иванович',
        type: 'Собственник',
        rooms: 1,
        floor: 6
    },
    {
        id: 4002,
        date: '1.10.2020',
        address: 'Ижевск, ул. Удмуртская 2',
        price: '2 300 000',
        owner: 'Петров Петр Петрович',
        type: 'Собственник',
        rooms: 3,
        floor: 4
    }]

    return(
        <Container className='catalog'>
            {products.map( item =>
                <Segment key={item.id}>
                    <Grid stackable>
                        <Grid.Row columns={5}>
                            <Grid.Column>
                                <Checkbox label={item.id}/>
                            </Grid.Column>
                            <Grid.Column>{item.date}</Grid.Column>
                            <Grid.Column>{item.address}</Grid.Column>
                            <Grid.Column>{item.price} ₽</Grid.Column>
                            <Grid.Column as='a' href="/mainPage">{item.owner}</Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Image src={flatPhoto}/>
                            </Grid.Column>
                            <Grid.Column>
                                <i>{item.type}</i>
                                <Button color='green'>Показать телефон</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <p>Комнат в квартире: {item.rooms}</p>
                                <p>Этаж: {item.floor}</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            )}
        </Container>
    )
}