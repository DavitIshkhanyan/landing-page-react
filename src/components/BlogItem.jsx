const BlogItem = ({src, alt, title, description, linkContent='See All'}) => {
    return (
    <article className="blog-info">
        <img src={src} alt={alt} width="264" height="188" />
        <h3 className="blog-info-title">{title}</h3>
        <p className="blog-info-text">{description}
        </p>
        <a href="#" className="blog-link">{linkContent}</a>
    </article>);
}

export default BlogItem;