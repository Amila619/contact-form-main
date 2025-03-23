import { useNavigate } from "react-router-dom"


export default function Home(){

    const navigate  = useNavigate()

    return(
        <div className="grid gap-4 bg-white rounded-sm p-4">
            <h1 className="text-2xl font-bold">Data was successfully Submitted !</h1> 
            <button className="bg-teal-700 font-bold text-white w-full p-2 rounded-sm hover:bg-teal-600 cursor-pointer" onClick={() => navigate('/', )}>Form</button>
        </div>
    )
}