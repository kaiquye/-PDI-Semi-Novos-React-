import './Style/Container.css'

export function Container(props){

    return(
        <div  ref={props.ref} className={props.className}>
            {props.children}
        </div>
    )
}