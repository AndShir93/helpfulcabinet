import React, { useState } from 'react';
import { Segment, Sidebar, Icon, Menu} from 'semantic-ui-react';
import MenuCatalog from './MenuCatalog';
import NavMenu from './NavMenu';

export default function MobileMenu(){
    const [visible, setVisible] = useState(false)
    return(
        <>
            <Menu fluid secondary>
                <Menu.Item position='right'>
                    <Icon name='bars' 
                        color='green'
                        size='large'
                        link
                        onClick = { () => setVisible(!visible)}/>
                    </Menu.Item>
            </Menu>
            <Sidebar
                as={Segment}
                animation='overlay'
                icon='labeled'
                onHide={() => setVisible(false)}
                visible={visible}
                style={{width: '100%'}}
                >
                <Menu secondary style={{border: 'none'}}>
                    <Menu.Item position='right'>
                        <Icon name="close" color='green' size='large' onClick = {() => setVisible(!visible)}/>
                    </Menu.Item>
                </Menu>
                <NavMenu color='red' inverted={false}/>
                <MenuCatalog/>
            </Sidebar>
        </>
    )
}