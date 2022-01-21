import React, { FC } from 'react';
import { Card } from '../../Card/Card';
import styles from './Login.module.css';
import HomeLogo from '../../../img/HomeLogo.png'

interface LoginProps {

}
export const Login: FC<LoginProps> = (props) => {
    return (
        <>
        <header>
            <div className={styles.HeadMain}>
                <div className={styles.headBg}>
                   <img src={HomeLogo} />
                </div>
                 
            </div>

        </header>
        <Card>
            <div className={styles.LoginMain}>
                
            </div>
        </Card>
        </>
    )
}
