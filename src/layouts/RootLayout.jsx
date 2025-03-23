import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";

export default function RootLayout() {
  
  const state = useContext(Context)[0]
  const navigate = useNavigate()

  useEffect(() => {
    if (state.validated) {
        navigate('/home')
    }
  }, [state, navigate])

  return (
    <>
      <Outlet />
    </>
  )
}