import React, {FC, useState, SyntheticEvent, useEffect} from 'react';
import {Card} from '../../Card/Card';
import styles from './Login.module.css';
import HomeLogo from '../../../img/HomeLogo.png';
// @ts-ignore
import {Link, useNavigate } from "react-router-dom"

interface LoginProps {

}

export const Login: FC<LoginProps> = (props) => {
    const push= useNavigate()
    const [state, setState] = useState(false)
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault()

    }


    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        alert()
        setState(false)
        console.log(e.currentTarget.value)
    };
    const handlePhone = (e: React.FormEvent<HTMLInputElement>): void => {
        let phoneNumber = e.currentTarget!.value
        setPhone(phoneNumber);
    };
    const [working, setWorking] = useState(false)
    useEffect(()=>{
        phone?.length ===9 && setWorking(!working)
    },[phone])
    const handleEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget!.value)
    };

    return (
        <>
            <header>
                <div className={styles.HeadMain}>
                    <div className={styles.headBg}>
                        <img src={HomeLogo}/>
                    </div>

                </div>

            </header>
            <Card>
                <div className={styles.LoginMain}>
                    <div className={styles.FormMain}>

                        <form
                              className={styles.LoginForm}>
                            <div className={styles['switch-field']}>
                                <input  type="radio" id="radio-three" name="switch-two" value="email" />
                                <label htmlFor="radio-three">Email</label>
                                <input onChange={()=>console.log("s")} type="radio" id="radio-four" name="switch-two" value="phone" checked/>
                                <label htmlFor="radio-four">Phone</label>
                            </div>
                            <div className={styles.formInput}>
                                <input value={phone}
                                       onChange={handlePhone}
                                       type="text"
                                       placeholder='Ex (337) 378 8383'/>
                                {state&&<input value={email}
                                                 onChange={handleEmail}
                                                 type="text"
                                                 placeholder='Ex johndeo@gmail.com'/>}
                            </div>
                            <div className={working?styles.formbtn:styles.formbtn2}>
                                <button type='submit' disabled={!working}>Continue <i className="fas fa-chevron-right"/></button>
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
                                    <Link to="/createnear">
                                        <button onClick={()=>push('/verification')}>Log in with NEAR <i className="fas fa-chevron-right"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Card>
        </>
    )
}
