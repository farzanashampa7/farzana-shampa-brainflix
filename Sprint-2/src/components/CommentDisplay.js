import React, { Component } from 'react';
import axios from 'axios';
import './CommentDisplay.scss';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';

class CommentDisplay extends Component {
    state = {
        commentList: null
    }

    componentDidMount() {
        let { selectedVideoId } = this.props;
        axios.get(`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=7a318c59-45cb-4754-b122-5ee4193fa774`)
            .then(response => {
                this.setState({
                    commentList: response.data.comments
                });
            });
    }

    getFormattedDay(time) {
        let newDate = new Date(time);
        let dd = newDate.getDate();
        let mm = newDate.getMonth() + 1;
        let yyyy = newDate.getFullYear();
        return newDate = `${mm}/ ${dd}/ ${yyyy}`;
    }

    render() {
        if (this.state.commentList === null) {
            return (<div className='commentsList wrapper'>Loading Comments</div>)
        }
        return (
            <div className='commentsList wrapper'>
                {this.state.commentList.map(comment => {
                    return (
                        <article className='commentsList__item' key={comment.id}>
                            <img className='commentsList__image' src={MohanMuruge} alt={comment.name} />
                            <div className='commentsList__details'>
                                <div className="commentsList__owner">
                                    <span className='commentsList__name'>{comment.name}
                                    </span>
                                    <span className='commentsList__date'>{this.getFormattedDay(comment.timestamp)}
                                    </span>
                                </div>
                                <p className='commentsList__text'>
                                    {comment.comment}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }

}

export default CommentDisplay;