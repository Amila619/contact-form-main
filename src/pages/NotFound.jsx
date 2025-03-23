import { useNavigate } from "react-router-dom"


export default function NotFound(){

    const navigate  = useNavigate()

    return(
        <div>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/', )}>Form</button>
        </div>
    )
}