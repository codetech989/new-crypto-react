import React, {FC, useEffect, useState} from 'react';
import { Card } from '../../Card/Card';
import styles from './Verification.module.css';
import Close from '../../../img/close.png';
import {VerificationProps} from '../../../../interfaces/interfaces'
import {useAppSelector} from '../../../../hooks/hooks'
import {useNavigate} from "react-router-dom";
import VerificationInput from "react-verification-input";
import './verificationInput.css'


export const Verification: FC<VerificationProps> = (props) => {
    const push = useNavigate()
    const state = useAppSelector((state) => state)
    const [code,setCode] = useState<string>("")
    const handleChange=(e:string)=>{
        setCode(e)
    }
    useEffect(()=>{
        code?.length === 6 && setWorking(!working)
    },[code])

    const [working, setWorking] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        push('/createNear')

    }
    return (
        <>
            <header>
                <div className={styles.HeadMain}>
                    <div className={styles.HeadMainData}>
                        <div className={styles.headBg}>
                            <p>Verification</p>
                        </div>
                        <div className={styles.headCancel}>
                            <img onClick={()=>push('/')} src={Close} />
                        </div>
                    </div>


                </div>

            </header>
            <Card>
                <div className={styles.VeriMain}>
                    <div className={styles["TopParagraph"]}>
                        <p>We've sent a 6-digit verification code to the email address
                        </p>
                        <h4>{state.loginPhone!== ""?
                            state.loginPhone:[state.loginEmail !== "" ?
                             state.loginEmail:"johndoe@gmail.com"]
                        }</h4>
                    </div>
                    <div className={styles.veriForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formData}>
                                <h3>Enter verification code</h3>
                                <div className={styles['verification_input']}>
                                    <VerificationInput
                                        validChars={'0-9'}
                                        onChange={(e)=>handleChange(e)}
                                        removeDefaultStyles
                                        placeholder={''}
                                        classNames={{
                                            container: "container",
                                            character: "character",
                                            characterInactive: "character--inactive",
                                            characterSelected: "character--selected",
                                        }}
                                    />

                                </div>

                            </div>
                            <div className={working ? styles.formbtn : styles.formbtn2}>
                                <button type='submit' disabled={!working}>Continue <i className="fas fa-chevron-right" /></button>
                            </div>
                        </form>

                    </div>
                    <div className={styles.FormBottom}>
                        <div className={styles.FormBotMain}>
                            <p>Didn't receive your code?</p>   
                            <h3>Send to a different email address</h3>
                            <h3>Resend your code </h3>
                        </div>
                    </div>

                </div>
            </Card>
        </>
    )
}
