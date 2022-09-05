import { BlogPostCard, CardImage, PublishedAt, Title, Author, ReadingTime, CardFooter} from "./style"
import PropTypes from "prop-types"

export const BlogPost = (props) => {

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
            <CardFooter>
                <Author>
                    Autor(a): {formataNomeAutor(props.author)}
                </Author>
                <ReadingTime>
                    Tempo de leitura: {props.reading_time_minutes} min
                </ReadingTime>
            </CardFooter>
        </BlogPostCard>
        </>
    )
}

BlogPost.prototypes = {
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    reading_time_minutes: PropTypes.number.isRequired
}

BlogPost.defaultProps = {
    url: 'https://dev.to/opendevufcg',
    author: "---",
    title: "---",
    published_at: new Date(),
    reading_time_minutes: 0
}

