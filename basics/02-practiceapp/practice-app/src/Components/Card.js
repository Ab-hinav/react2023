import './Card.css'

export function Card(props) {
    return (
        <div className="card">
            <img src={props.data.image} alt="image" className="img"></img>
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    )
}