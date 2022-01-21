import React, { FC } from 'react';
import { Card } from '../../Card/Card';
import styles from './Login.module.css';
import HomeLogo from '../../../img/HomeLogo.png';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

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
                    <div className={styles.FormMain}>
                        <form className={styles.LoginForm}>
                            <div className={styles['switch-field']}>
                                <input type="radio" id="radio-three" name="switch-two" value="yes" checked />
                                <label htmlFor="radio-three">Email</label>
                                <input type="radio" id="radio-four" name="switch-two" value="maybe" />
                                <label htmlFor="radio-four">Phone</label>
                            </div>
                            <div className={styles.formInput}>
                                <input type="text" placeholder='Ex (337) 378 8383' />
                            </div>
                            <div className={styles.formbtn}>
                                <button type='submit'>Continue <i className="fas fa-chevron-right" /></button>
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
                                <button type='submit'>Log in with NEAR <i className="fas fa-chevron-right" /></button>
                            </div>
                            </div>
                        </div>
                    </div>



                </div>
            </Card>
        </>
    )
}
