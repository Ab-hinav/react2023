import './CardContainer.css'

export function CardContainer(props){
    return <div className='container' >
        {props.children}
    </div>
}