import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../..components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";




getSavedArticles = () =>{
  API.getSavedArticles()
    .then(res =>
      this.setState({
        articles: res.data
      })
    )
    .catch(err => console.log(err));
}; 

handleArticleDelete = id => {
  API.deleteArticle(id).then(res => this.getSavedArticles());
};


render() {
  return(
    <Container>
      <Row>
        <Col size="md-12">
        <Jumbotron>
          <h1 className="text-center">
            <strong>New York Times Article Scrubber</strong>
          </h1>
          <h2 className="text-center">
            Look for Articles and Save Them!
          </h2>
        </Jumbotron>
        </Col>
      </Row>
    </Container>
    <Row>
      <Col size="md-12">
        <Card title="Saved Articles" icon="download">
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <Article
                  key={article._id}
                  _id={article._id}
                  title={article.title}
                  url={article.url}
                  date={article.date}
                  handleClick={this.handleArticleDelete}
                  buttonText="Delete Article"
                  saved
                  />
              ))}
            </List>
          ) : (
            <h2 className="text-center"> No Saved Articles</h2>
          )}
        </Card>
      </Col>
    </Row>
  )
};



export default Saved;