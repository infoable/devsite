import React from 'react'
import styles from './index.module.scss';
import Button from '../Button';
const Main: React.FC = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Hello Able<sup style={{ fontSize: '.5em' }}>Dev</sup></h1>
            <p>Able은 시각 장애인을 위한 음성 명령형 브라우저입니다.</p>
            <div className={styles.buttons}>
                <Button primary href="/c">
                    Able에 기여하기
                </Button>
                <Button>
                    더 알아보기
                </Button>
            </div>
        </section>
    )
};

export default Main;