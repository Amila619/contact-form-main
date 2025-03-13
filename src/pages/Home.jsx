import { useNavigate } from "react-router-dom"


export default function Home(){

    const navigate  = useNavigate()

    return(
        <div>
            <h1>Data was successfully Submitted !</h1>
            <button onClick={() => navigate('/', )}>Form</button>
        </div>
    )
}