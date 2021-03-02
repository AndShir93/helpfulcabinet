import React from 'react';
import { Grid, Menu, Button, Dropdown, Segment, Form} from 'semantic-ui-react';

export default function MenuCatalog(){
    return(
        <>
            <Menu stackable>
                    <Menu.Item>
                        <Dropdown text='Купить' pointing='top left'>
                        <Dropdown.Menu>
                            <Segment.Group>
                            <Segment>
                                <Button.Group fluid>
                                <Button color='green'>Купить</Button>
                                <Button>Снять</Button>
                                </Button.Group>
                            </Segment>
                            <Segment>
                                <Button color='black' fluid>Показать предложений</Button>
                            </Segment>            
                            </Segment.Group>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown text='Жилье' pointing='top left'>
                        <Dropdown.Menu>
                            <Segment>
                            <Button.Group>
                                <Button color='green'>Жилье</Button>
                                <Button>Комерческая</Button>
                                <Button>Гаражи</Button>
                            </Button.Group>
                            </Segment>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown pointing='top left' text='Комнат'>
                        <Dropdown.Menu>
                            <Segment.Group>
                            <Segment>
                                <Grid columns={3} style={{maxWidth: '320px'}}>
                                <Grid.Row>
                                    <Grid.Column stretched><Button>1</Button></Grid.Column>
                                    <Grid.Column stretched><Button>2</Button></Grid.Column>
                                    <Grid.Column stretched><Button>3</Button></Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                    <Grid.Column stretched><Button>4</Button></Grid.Column>
                                    <Grid.Column stretched><Button>5+</Button></Grid.Column>
                                    <Grid.Column stretched><Button>Студия</Button></Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            <Segment>
                                <Button color='black' fluid>Показать предложений</Button>
                            </Segment>
                            </Segment.Group>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown text='Цена' pointing='top left'>
                        <Dropdown.Menu>
                            <Segment.Group>
                            <Segment>
                                <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                    <Button.Group fluid>
                                        <Button color='green'>За все</Button>
                                        <Button>За м2</Button>
                                    </Button.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                    <Form>
                                        <Form.Group widths={2}>
                                        <Form.Input placeholder='от'/>
                                        <Form.Input placeholder='до'/>
                                        </Form.Group>
                                    </Form>
                                    </Grid.Column>
                                </Grid.Row>
                                </Grid>
                            </Segment>
                            <Segment>
                                <Button fluid color='black'>Показать предложений</Button>
                            </Segment>
                            </Segment.Group>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown text='Расширенный поиск'>

                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button color='black'>Поиск</Button>
                    </Menu.Item>
                </Menu>
        </>
    )
}