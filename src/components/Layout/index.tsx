import React from 'react'
import style from './index.module.scss';
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <header>
                <nav className={style.nav}>
                    메뉴
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
};

export default Layout;