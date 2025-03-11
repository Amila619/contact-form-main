import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import RootLayout from "./layouts/RootLayout"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const InitialState = {
  fname: '',
  lname: '',
  email: '',
  qType: '',
  message: '',
  consent: false,
  errors: {
    fname: '',
    lname: '',
    email: '',
    qType: '',
    message: '',
    consent: ''
  },
  validated: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "setFname":
      return {
        ...state,
        fname: action.payload.input
      };

    case "setLname":
      return {
        ...state,
        lname: action.payload.input
      };

    case "setEmail":
      return {
        ...state,
        email: action.payload.input
      };

    case "setQType":
      return {
        ...state,
        qType: action.payload.input
      };

    case "setMessage":
      return {
        ...state,
        message: action.payload.input
      };

    case "setConsent":
      return {
        ...state,
        consent: action.payload.input
      };

    case "setErrors":
      return {
        ...state,
        errors: action.payload.errors
      };

    case "setValidated":
      return {
        ...state,
        validated: action.payload.input
      };

    default:
      return state

  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, InitialState)

  function onInputChange(e, name) {
    const value = name === "setConsent" ? e.target.checked : e.target.value;
    dispatch({
      type: name,
      payload: {
        input: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
    console.log(state.errors);


    if (Object.keys(state.errors).length === 0) {
      dispatch({
        type: "setValidated",
        payload: {
          input: true
        }
      })
    }
  }

  function validateForm() {
    const errors = {};
    if (state.fname.trim() === '') {
      errors.fname = 'This field is required';
    }
    if (state.lname.trim() === '') {
      errors.lname = 'This field is required';
    }
    if (state.email.trim() === '') {
      errors.email = 'This field is required';
    } else {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(state.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (state.qType.trim() === '') {
      errors.qType = 'Please select a query type';
    }
    if (state.message.trim() === '') {
      errors.message = 'This field is required';
    }
    if (!state.consent) {
      errors.consent = 'To submit this form please consent to being contacted';
    }

    dispatch({
      type: "setErrors",
      payload: {
        errors: errors
      }
    })
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route paht="/" element={<RootLayout />} >
          <Route index element={<Form onInputChange={onInputChange} state={state} handleSubmit={handleSubmit} />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  )

  useEffect(() => {
    console.log('Form Validated: ', state.validated)
  }, [state.validated])


  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )

}



export default App
