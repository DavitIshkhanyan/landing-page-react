import style from './BlogItem.module.css';

const BlogItem = ({ src, alt, title, description, linkContent = 'See All' }) => {
    return (
        <article className={style.blog_info}>
            <img src={src} alt={alt} width="264" height="188" />
            <h3 className={style.blog_info_title}>{title}</h3>
            <p className={style.blog_info_text}>{description}</p>
            <a href="#" className={style.blog_link}>{linkContent}</a>
        </article>
    );
}

export default BlogItem;