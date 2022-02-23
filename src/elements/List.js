import './Style/List.css'

export function List(props){

    return(
        <ul className={props.className} >
            {props.children.map((param)=>(
                <li>
                    {param}
                </li>
            ))
            }
        </ul>
    )
}