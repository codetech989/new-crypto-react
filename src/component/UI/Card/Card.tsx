import React, { FunctionComponent } from 'react';
import styles from './Card.module.css';


export const Card: FunctionComponent = ({  children }) => 
<div className={styles.card}>
    {children}
</div>