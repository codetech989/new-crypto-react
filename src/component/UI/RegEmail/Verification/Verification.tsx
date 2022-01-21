import React, { FC } from 'react';
import { Card } from '../../Card/Card';
import styles from './Verification.module.css';
import Close from '../../../img/close.png';
import InputCode from '../../InputCode/InputCode';

interface VerificationProps {

}

export const Verification: FC<VerificationProps> = (props) => {
    const paramsData = "03214283903"
    return (
        <>
            <header>
                <div className={styles.HeadMain}>
                    <div className={styles.HeadMainData}>
                        <div className={styles.headBg}>
                            <p>Verification</p>
                        </div>
                        <div className={styles.headCancel}>
                            <img src={Close} />
                        </div>
                    </div>


                </div>

            </header>
            <Card>
                <div className={styles.VeriMain}>
                    <div className={styles["TopParagraph"]}>
                        <p>We've sent a 6-digit verification code to the email address
                        </p>
                        <h4>johndoe@gmail.com</h4>
                    </div>
                    <div className={styles.veriForm}>
                        <form>
                            <div className={styles.formData}>
                                <h3>Enter verification code</h3>

                            </div>
                            <div className={styles.formbtn}>
                                <button type='submit'>Continue <i className="fas fa-chevron-right" /></button>
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
