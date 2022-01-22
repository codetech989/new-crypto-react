import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { Card } from '../../Card/Card';
import styles from './Login.module.css';
import HomeLogo from '../../../img/HomeLogo.png';
import { Link, useNavigate } from "react-router-dom"
import {saveEmail, savePhone} from "../../../../store/Actions/loginAction";
import {useAppDispatch} from "../../../../hooks/hooks";
import {LoginProps} from '../../../../interfaces/interfaces'

export const Login: FC<LoginProps> = (props) => {
    const dispatch = useAppDispatch()
    const push = useNavigate()
    const [state, setState] = useState("email")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        if(state==="email"){
            dispatch(saveEmail(email))
        }
        dispatch(savePhone(phone))
        push('/verification')

    }

    const onChangeEmail = () => {
        setState("email")
        setNewColors("clicked")
        setColors("notClicked")
    };
    const onChangePhone = () => {
        setState("phone")
        setColors("clicked")
        setNewColors("notClicked")
    };

    const [working, setWorking] = useState(false)

    useEffect(() => {
        (phone?.length === 9 || email?.includes("@gmail.com")) && setWorking(!working)
    }, [phone,email])

    const handlePhone = (e: React.FormEvent<HTMLInputElement>): void => {
        let phoneNumber = e.currentTarget!.value
        setPhone(phoneNumber);
    };

    const handleEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        let emailAddress = e.currentTarget!.value
        setEmail(emailAddress);
    };

    const [colors, setColors] = useState<string>("notClicked")
    const [newColors, setNewColors] = useState<string>("clicked")
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
                    <div className={styles.FormMain}>
                        <div className={styles['switch-field']}>
                            <button className={styles[`${colors}`]} onClick={onChangePhone}>Phone</button>
                            <button className={styles[`${newColors}`]} onClick={onChangeEmail}>Email</button>
                        </div>
                        <form onSubmit={handleSubmit}
                        className={styles.LoginForm}>
                            <div className={styles.formInput}>
                            {state === "phone" ?<input value={phone}
                                    onChange={handlePhone}
                                    type="text"
                                    placeholder='Ex (337) 378 8383' />:
                                <input
                                    onChange={handleEmail}
                                    type="text"
                                    placeholder='Ex johndeo@gmail.com' />}
                            </div>
                            <div className={working ? styles.formbtn : styles.formbtn2}>
                                <button type='submit' disabled={!working}>Continue <i className="fas fa-chevron-right" /></button>
                            </div>
                        </form>
                        <div className={styles.termdata}>
                            <p>
                                by clicking continue you must agree to near labs
                                <span> Terms & Conditions </span>
                                and
                                <span> Privacy Policy </span>
                            </p>
                        </div>
                        <div className={styles.nearlogin}>
                            <div className={styles.nearloginMain}>
                                <p>Already have NEAR account?</p>
                                <div className={`${styles.formbtnextra}`}>
                                        <button onClick={() => push('/createnear')}>Log in with NEAR <i className="fas fa-chevron-right" />
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}
