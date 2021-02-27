
import './CommentDisplay.scss';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';

const CommentDisplay = ({ commentList, getFormattedDay }) => {
    let eachComment = commentList.comments
    return (

        <div className='commentsList wrapper'>
            {eachComment.map(comment => {
                return (
                    <article className='commentsList__item' id={comment.id}>
                        <img className='commentsList__image' src={MohanMuruge} alt={comment.name} />
                        <div className='commentsList__details'>
                            <div className="commentsList__owner">
                                <span className='commentsList__name'>{comment.name}
                                </span>
                                <span className='commentsList__date'>{getFormattedDay(comment.timestamp)}
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

export default CommentDisplay;