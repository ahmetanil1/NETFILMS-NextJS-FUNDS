import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import Link from "next/link"

import styles from "./styles.module.css"

function header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <FaPlayCircle /> NETFILMS
                </Link>
            </div>

        </header >
    )
}

export default header