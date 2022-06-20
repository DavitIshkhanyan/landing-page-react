import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={style.links_info}>
                <div className="container">
                    <div className={style.footer_links}>
                        <div>
                            <a href="#" className={style.footer_link}>Made with Webflow</a>
                        </div>
                        <div className={style.footer_links2}>
                            <a href="#" className={`${style.footer_link} ${style.footer_link2}`}>dribble</a>
                            <a href="#" className={`${style.footer_link} ${style.footer_link2}`}>linkedin</a>
                            <a href="#" className={`${style.footer_link} ${style.footer_link2}`}>twitter</a>
                            <a href="#" className={`${style.footer_link} ${style.footer_link2}`}>instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;