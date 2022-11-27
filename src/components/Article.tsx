import ReactMarkdown from "react-markdown"
import { Navigate, useParams } from "react-router-dom"
import { articles } from "../data/articles.json"

const BASE_URL = "/website"

export function Article() {
    let { id } = useParams()
    let article = articles.find(article => article.id == id)

    if (!article) {
        return <Navigate to={`${BASE_URL}/404`} />
    }

    return (
    <>
        <h1>{article.title}</h1>
        <ReactMarkdown children={article.body} />
    </>
    )
}