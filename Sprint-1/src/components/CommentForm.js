// import './CommentForm.scss';
import MohanMuruge from '../assets/images/Mohan-muruge.jpg';

const CommentForm = () => {
    return (
        <section className='form'>
            <img className='form__image' src={MohanMuruge} alt='Image of user' />
            <form className='form__item'>
                <div className='form__input'>
                    <label className='form__label' htmlFor='text'> Join The Conversation </label>
                    <textarea className='form__text' name='text' placeholder='Write comment here' />
                </div>
                <button className='form__button' type='submit'>Comment</button>
            </form>

        </section>

    )
}

export default CommentForm;