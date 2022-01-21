import React, { FC } from 'react';
import { Card } from '../../Card/Card';
import styles from './Verification.module.css';

interface VerificationProps {

}

export const Verification: FC<VerificationProps> = (props) => {
    const paramsData = "03214283903"
    return (
        <>
            <header>
                <div className={styles.HeadMain}>
                    <div className={styles.headBg}>
                        <p>Verification</p>
                    </div>

                </div>

            </header>
            <Card>
                <div className={styles.VeriMain}>
                    <div className={styles["TopParagraph"]}>
                    <p>We've sent a 6-digit verification code to your phone </p>
                    <p>{paramsData}</p>
                    </div>

                </div>
            </Card>
        </>
    )
}
