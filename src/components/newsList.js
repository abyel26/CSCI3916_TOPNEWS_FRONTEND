import React, { Component } from 'react';
import { fetchNews } from '../actions/newsActions';
import { setNews } from '../actions/newsActions';
import {connect} from "react-redux";
import { Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

class newsList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchNews());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setNews(this.props.news[selectedIndex]));
    }

    handleClick = (news) => {
        const {dispatch} = this.props;
        dispatch(setNews(news));
    }


    render() {
        const NewsListCarousel= ({newsList}) => {
                if (!newsList) {
                    return <div>Loading...</div>;
                }
            return (
                <Carousel onSelect={this.handleSelect}>
                    {newsList.map((news) =>
                        <Carousel.Item key={news.url} >
                            <Carousel.Caption>
                                <h3>{news.title}</h3>
                            </Carousel.Caption>
                            <div>
                            <LinkContainer to={''} onClick={() => this.handleClick(news)}>
                                <p> {news.content} </p>
                            </LinkContainer>
                            <LinkContainer to={'/saved/'} onClick={() => this.handleClick(news)}>
                                <Image className="image" src={news.urlToImage} thumbnail/>
                            </LinkContainer>
                            </div>
                        </Carousel.Item>)
                    }
                </Carousel>)

            }

            return (
                <NewsListCarousel newsList={this.props.news}/>
            );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(newsList);