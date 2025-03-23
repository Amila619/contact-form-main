import Form from "./Components/Form"
import RootLayout from "./layouts/RootLayout"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Form />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <main className="h-screen flex justify-center items-center bg-green-200 font-display w-full overflow-y-auto px-6">
        <RouterProvider router={router} />
    </main> 

  )

}

export default App
