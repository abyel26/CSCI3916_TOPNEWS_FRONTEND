import React, { Component }  from 'react';
import {connect} from "react-redux";
import { Glyphicon, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import {fetchNews} from "../actions/newsActions";

//support routing by creating a new component

class News extends Component {

    componentDidMount() {
        const {dispatch} = this.props;

        if (this.props.selectedNews == null) {
            dispatch(fetchNews(this.props.newsId));
        }
    }

    render() {
        //
        // const ActorInfo = ({actors}) => {
        //     return actors.map((actor, i) =>
        //         <p key={i}>
        //             <b>{actor[0]}</b> {actor[1]}
        //         </p>
        //     )
        // }

        // const ReviewInfo = ({reviews}) => {
        //     return reviews.map((review, i) =>
        //         <p key={i}>
        //             <b>{review.reviewerName}</b> {review.quote}
        //             <Glyphicon glyph={'star'} /> {review.rating}
        //         </p>
        //     )
        // }

        const DetailInfo = ({currentNews}) => {
            if (!currentNews) { //if not could still be fetching the movie
                return <div>Loading...</div>;
            }

            console.log(currentNews);

            return (
                <Panel>
                    <Panel.Heading>Saved Articles</Panel.Heading>
                    <Panel.Body><Image className="image" src={currentNews.urlToImage} thumbnail /></Panel.Body>

                </Panel>
            );
        }

        return (
            <DetailInfo currentNews={this.props.selectedNews} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedNews: state.news.selectedNews,
        newsId: ownProps.match.params.title
    }
}

export default withRouter(connect(mapStateToProps)(News));