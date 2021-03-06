import CommentForm from "./CommentForm";
import './Comments.scss';

const Comments = () => {
    return (
        <section className='comments wrapper'>
            <h4 className='comments__number'>3 Comments</h4>
            <CommentForm />
        </section>
    )
}

export default Comments;