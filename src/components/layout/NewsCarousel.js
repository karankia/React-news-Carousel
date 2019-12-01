import React, {useEffect, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getNews} from "../../actions/news";
import Spinner from "./Spinner";
import ReactHtmlParser from 'react-html-parser';
import {Container, Row, Navbar, Col} from "react-bootstrap";

const NewsCarousel = ({getNews, news: {news, loading} }) => {

    useEffect(() => {
        const interval = setInterval(() => {
            getNews();
        }, 5000);
        return () => clearInterval(interval);
    }, [getNews]);

    console.log(news);
    return loading  ? <Spinner/> : <Fragment>
        <div className="dark-overlay">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">

                    The News
                </Navbar.Brand>
            </Navbar>

            <div className="news" style={{paddingTop: '20px'}}>
                <Container>
                    <Row>
                        <Col>
                            <Carousel>
                                { news.items.map( news => {
                                        const parsedNews = ReactHtmlParser(news.content);
                                        const parsedNewsData = parsedNews[0].props.title.substring(0, 350);
                                        return<Carousel.Item key={news.guid}>
                                            <img
                                                className="d-block w-100"
                                                src={parsedNews[0].props.src}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>{news.contentSnippet}</h3>
                                                <p>{parsedNewsData}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>;
                                    }
                                )}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    </Fragment>;
};


NewsCarousel.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, {getNews}) (NewsCarousel);