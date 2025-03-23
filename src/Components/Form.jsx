import { useEffect, useContext } from "react";
import { Context } from "../context";

export default function Form() {

  const [state, dispatch] = useContext(Context);

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

    if (Object.keys(state.errors).length === 0) {
      dispatch({
        type: "setValidated",
        payload: {
          input: true
        }
      })
    }
  }

  useEffect(() => {
    if (state.validated && Object.keys(state.errors).length === 0) {
      alert("Form submitted successfully")
    }
  }, [state.errors, state.validated])

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
        input: errors
      }
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg my-5  mx-2.5">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <form className="grid gap-3 text-gray-900" action="" onSubmit={handleSubmit}>
        <div className="md:flex md:gap-2 grid gap-2.5">
          <div className="grid gap-1.5">
            <label className="text-sm" htmlFor="fname">First Name * </label>
            <input className="border-gray-500 border-[1px] rounded-sm focus:outline-none focus:border-teal-800 p-1.5 w-full" type="text" name="fname" id="fname" value={state.fname} onChange={(e) => onInputChange(e, "setFname")} />
            {state.errors.lname && <p className="text-red-600 text-xs">{state.errors.fname}</p>}
          </div>
          <div className="grid gap-1.5">
            <label className="text-sm" htmlFor="lname">Last Name * </label>
            <input className="border-gray-500 border-[1px] rounded-sm focus:outline-none focus:border-teal-800 p-1.5 w-full" type="text" name="lname" id="lname" value={state.lname} onChange={(e) => onInputChange(e, "setLname")} />
            {state.errors.fname && <p className="text-red-600 text-xs">{state.errors.lname}</p>}
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="email">Email * </label>
          <input className="border-gray-500 border-[1px] rounded-sm focus:outline-none focus:border-teal-800 p-1.5" type="email" name="email" id="email" value={state.email} onChange={(e) => onInputChange(e, "setEmail")} />
          {state.errors.email && <p className="text-red-600 text-xs">{state.errors.email}</p>}
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="qtype">Query Type * </label>
          <div className="md:flex grid gap-2">
            <div className="flex items-center gap-1.5 border-gray-500 border-[1px] rounded-sm checkbox-container p-2.5 md:w-1/2">
              <input className="accent-teal-800" type="radio" value="General Enquiry" checked={state.qType === "General Enquiry"} onChange={(e) => onInputChange(e, 'setQType')} name="qType" id="generalQ" />
              <label className="text-sm" htmlFor="generalQ">Support Request</label>
            </div>
            <div className="flex items-center gap-1.5 border-gray-500 border-[1px] rounded-sm checkbox-container p-2.5 md:w-1/2">
              <input className="accent-teal-800" type="radio" value="Support Request" checked={state.qType === "Support Request"} onChange={(e) => onInputChange(e, 'setQType')} name="qType" id="supprtQ" />
              <label className="text-sm" htmlFor="supprtQ">Support Request</label>
            </div>
          </div>
          {state.errors.qType && <p className="text-red-600 text-xs">{state.errors.qType}</p>}
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="message">Message * </label>
          <textarea className="resize-none border-gray-500 border-[1px] rounded-sm focus:outline-none focus:border-teal-800 p-1.5 md:w-full h-[200px]" name="message" id="message" value={state.message} onChange={(e) => onInputChange(e, "setMessage")}></textarea>
          {state.errors.message && <p className="text-red-600 text-xs">{state.errors.message}</p>}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-1.5">
            <input className="accent-teal-800 border-gray-900 border-[1px] rounded-sm focus:outline-none focus:border-teal-800" type="checkbox" name="consent" id="consent" checked={state.consent} onChange={(e) => onInputChange(e, "setConsent")} />
            <label className="text-sm" htmlFor="consent">I consent to being contacted by the team *</label>
          </div>
          {state.errors.consent && <p className="text-red-600 text-xs">{state.errors.consent}</p>}
        </div>
        <button className="bg-teal-700 font-bold text-white w-full p-2 rounded-sm hover:bg-teal-600 cursor-pointer">Submit</button>
      </form>
    </div>
  )
}