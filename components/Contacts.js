import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import logo from '../public/img/logo.svg';
import logoVk from '../public/img/vk.svg';
import logoInstagram from '../public/img/instagram.svg'
import styles from '../styles/Contacts.module.css'  

export default function Contacts (){
    return(
        <Container>
            <div className={styles.contacts}>
                <div className={styles.item}>
                    <Image className={styles.logo} src={logo} alt='Логотип'/>
                    <div className={styles.info}>
                        <p className={styles.text}>ООО "Полезные Люди" ИНН 1840085213</p>
                        <p className={styles.text}>Политика обработки персональных данных</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.social}>
                        <Image as='a' href='https://vk.com/poleznie_lydi' src={logoVk} alt='ВК' target='_blank'/>
                        <Image as='a' href='https://www.instagram.com/poleznieludi/?hl=ru' src={logoInstagram} alt='Instagram' target='_blank'/>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.text}>г. Ижевск, ул. Удмуртская, д. 304е (3 этаж) ТЦ "Орион"</p>
                        <div className={styles.infoItem}>
                            <p className={styles.text}>Телефон:</p> 
                            <a href="tel:+7(3412)797177" className={styles.text}>+7 (3412) 797177</a>
                        </div>
                        <div className={styles.infoItem}>
                            <p className={styles.text}>Эл. почта:</p> 
                            <a href="mailto:97177@bk.ru" className={styles.text}>797177@bk.ru</a>
                        </div>
                        <p className={`${styles.text} ${styles.text_uppercase}`}>Режим работы:</p>
                        <p className={`${styles.text} ${styles.text_uppercase}`}>пн-пт: 9-20</p>
                        <p className={`${styles.text} ${styles.text_uppercase}`}>сб: 10-16</p>
                        <p className={`${styles.text} ${styles.text_uppercase}`}>вс: Выходной</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}