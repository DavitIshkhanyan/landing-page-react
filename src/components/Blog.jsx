import BlogItem from "./BlogItem";

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <h2 className="blog-title main-title">Blog</h2>
                <div className="article-container">
                    <BlogItem
                        src='images/blog-1.jpg' 
                        alt="Businesswise" 
                        title='Businesswise' 
                        description='Businesswise freelance was a project where I worked as a designer.
                                The main goal of businesswise is to gather podcasts in various categories for professional people.' 
                    />
                    <BlogItem 
                        src='images/blog-2.jpg' 
                        alt="Simple Scanner" title='Simple Scanner' 
                        description='Simple Scanner is an application that we developed when I was working at Enrich mobile.
                                With Simple scanner, you can scan your documents and convert them to PDF' 
                        linkContent='Coming Soon' 
                    />
                    <BlogItem 
                        src='images/blog-3.jpg' 
                        alt="Musix" 
                        title='Musix' 
                        description='Musix is a side project I prepared in my spare time. Spotify and Apple Music
                                competitors. The biggest advantage compared to its competitors is that it provides higher sound quality.' 
                    />
                </div>
            </div>
        </div>);
}

export default Blog;