export default function Input(props){
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <input className="form-control" type={props.type} onChange={props.onChange} 
            onKeyUp={props.onKeyUp} placeholder={props.placeholder}
             name={props.name}></input>
        </div>
    )
}