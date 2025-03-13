import Form from "./components/Form"
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
    <div>
      <RouterProvider router={router} />
    </div>

  )

}

export default App
