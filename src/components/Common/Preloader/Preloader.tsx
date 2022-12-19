import React from "react";
import preloader from '../../../assets/img/Loading/Loading.gif';
import styles from './Preloader.module.css'

let Preloader:React.FC = (props) => {
    return <div className={styles.preloader}>
        <img src={preloader}/>
    </div>

}
export default Preloader;