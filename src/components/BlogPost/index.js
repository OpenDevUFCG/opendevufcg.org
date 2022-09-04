import { BlogPostCard, CardImage, PublishedAt, Title, Author, ReadingTime, WrapperAuthorReadingTime} from "./style"

const BlogPostComponent = (props) => {

    const formataNomeAutor = (nome) => {
        if (nome.length > 28) {
            nome = nome.slice(0, 25) + "..."
        }
        return nome
    }

    return (
        <>
        <BlogPostCard onClick={() => window.open(props.url)}>
            <CardImage/>
            <PublishedAt>
                {new Date(props.published_at).toLocaleDateString("pt-br")}
            </PublishedAt>
            <Title>
                {props.title}
            </Title>
            <WrapperAuthorReadingTime>
                <Author>
                    Autor(a): {formataNomeAutor(props.author)}
                </Author>
                <ReadingTime>
                    Tempo de leitura: {props.reading_time_minutes} min
                </ReadingTime>
            </WrapperAuthorReadingTime>
        </BlogPostCard>
        </>
    )
}

export default BlogPostComponent