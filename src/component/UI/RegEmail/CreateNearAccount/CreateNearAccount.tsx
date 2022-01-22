import React from 'react';
import {Card} from '../../Card/Card';
import styles from './CreateNearAccount.module.css';
import Close from '../../../img/close.png';
import Vector from '../../../img/Vector.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { UserSubmitForm } from '../../../../interfaces/interfaces'
import {useNavigate} from "react-router-dom";
export const CreateNear: React.FC = () => {
    const push = useNavigate()
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
    };
    return (<>
            <header>
            <div className={styles.HeadMainData}>
                        <div className={styles.headBg}>
                            <p>Create NEAR account</p>
                        </div>
                        <div className={styles.headCancel}>
                            <img onClick={()=>push('/')} src={Close} />
                        </div>
                    </div>

            </header>
            <Card>
                <div className={styles.CreateNear}>
                    <div className={styles.CreateNearMain}>
                        <p>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.

                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.FormInput1}>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    {...register('fullname')}
                                    placeholder='Ex. John doe'
                                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                                />
                                <div className={styles["invalid-feedback"]}>{errors.fullname?.message}</div>
                            </div>
                            <div className={styles.FormInput2}>
                                <label>Account ID<img src={Vector} /></label>
                                <input
                                    type="text"
                                    {...register('username')}
                                    placeholder='yourname'
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                />
                                <button type='submit'>.near</button>
                                <div className={styles["invalid-feedback"]}>{errors.username?.message}</div>
                            </div>
                            <div className={styles.formbtn}>
                                <button type='submit'>Continue <i className="fas fa-chevron-right" /></button>
                            </div>
                        </form>
                        <h4>By creating a NEAR account, you agree to the NEAR Wallet Terms of Service and Privacy Policy.
</h4>
                        <div className={styles.nearlogin}>
                            <div className={styles.nearloginMain}>
                                <p>Already have NEAR account?</p>
                                <div className={`${styles.formbtnextra}`}>
                                        <button type='submit'>Log in with NEAR <i className="fas fa-chevron-right" />
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

