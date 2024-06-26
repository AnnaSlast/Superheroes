import './Card.css';

function Card (props){
    const {img, title, text} = props;
    return(
        <div className='card'>
            <img src={img} alt={title} className='card__img' />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
export default Card;