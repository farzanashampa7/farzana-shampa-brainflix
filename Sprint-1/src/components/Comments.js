import CommentForm from "./CommentForm";
import './CommentForm.scss';

const Comments = () => {
    return (
        <section className='comments wrapper'>
            <h4 className='comments_number'>3 Comments</h4>
            <CommentForm />
        </section>
    )
}

export default Comments;