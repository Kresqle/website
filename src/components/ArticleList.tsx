import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { articles } from "../data/articles.json"

const BASE_URL = "/website"

export function ArticleList() {
    return (
    <>
        <h1>Articles</h1>
        <Row lg={5} md={4} xs={3} className="g-3">
            {articles.map(article => (
                <Col>
                    <Link to={`${BASE_URL}/articles/${article.id}`} className="text-decoration-none text-reset">
                        <Card>
                            <Card.Body className="d-flex flex-column">
                            <Card.Title className="d-flex justify-content-center">{article.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </>
    )
}