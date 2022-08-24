export default function button(props){
    return(
        <button onClick={props.onClick} className={props.className}> {props.label}</button>
    )
}