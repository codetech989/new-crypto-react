import React from 'react';
import {Card} from '../../Card/Card';
import styles from './CreateNearAccount.module.css';

export const CreateNear: React.VFC = () => {
    return (<>
            <header>
                    <div className={styles.HeadMain}>
                        <div className={styles.headBg}>
                            <p>Create NEAR account</p>
                        </div>
                </div>

            </header>
            <Card>
                <div className="group-4-0-6">
                    <div className="top-illustration">
                        <div className="illustrationbg"/>
                    </div>
                    <p className="text-1">Create NEAR account</p>
                    <div className="close">
                        <img src=""/>
                    </div>
                    <div className="group-4-0-5">
                        <div className="group-4-0-2">
                            <button className="primary-_button">
                                <div className="layout">
                                    <div className="padding"/>
                                    <p className="text-3">Log in with NEAR</p>
                                    <div className="padding"/>
                                </div>
                                <div className="icon-/-hide-chevron">
                                    <img src=""/>
                                </div>
                            </button>
                            <p className="text-5">Already have NEAR account?</p>
                        </div>
                        <div className="line-2-1"/>
                    </div>
                    <div className="group-2-0-2">
                        <div className="group-2-7-1">
                            <div className="group-3-4-3">
                                <div className="input">
                                    <p className="text-6">Full Name</p>
                                    <div className="frame-1-7-1">
                                        <p className="text-7">John doe</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group-3-4-4">
                                <div className="input">
                                    <p className="text-8">Account ID</p>
                                    <div className="frame-1-7-1">
                                        <p className="text-9">johnd</p>
                                    </div>
                                    <p className="text-1-0">Account ID already taken!</p>
                                </div>
                                <div className="group-4-0-3">
                                    <p className="text-1-1">.near</p>
                                    <div className="line-2-2"/>
                                </div>
                                <img src=""/>
                                <button className="primary-_button">
                                    <div className="layout">
                                        <div className="padding"/>
                                        <p className="text-1-3">Continue</p>
                                        <div className="padding"/>
                                    </div>
                                    <img src=""/>
                                </button>
                            </div>
                            <p className="text-1-5">By creating a NEAR account, you agree to the NEAR Wallet Terms of
                                Service and Privacy Policy.
                            </p>
                            <p className="text-1-6">Enter an Account ID to use with your NEAR account. Your Account ID
                                will be used for all NEAR operations, including sending and receiving assets.
                            </p>
                        </div>
                    </div>
                    <div className="rectangle-2-0-9"/>
                </div>
            </Card>
        </>
    )
}

