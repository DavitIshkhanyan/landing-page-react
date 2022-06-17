import style from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={style.user_info}>
            <div className="container">
                <img src="images/avatar.jpg" alt="Avatar" className={style.user_avatar} />
                <p className="link mb-16">
                    <a href="#">Contact Me</a>
                </p>
                <h1 className="main-title">Welcome to my Portfolio</h1>
                <p className={style.main_text}>
                    I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who prioritizes simplicity and usability. Currently,
                    I'm Digital Product Designer on Norma. Formerly Enrich Mobile, ASDC, TalentMondo, and MobileUpp. I love working
                    on side projects, trying to improve myself on SwiftUI and Webflow.
                </p>
            </div>
        </div>
    );
}

export default UserInfo;