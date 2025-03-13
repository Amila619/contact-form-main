import { useContext } from "react";
import { Context } from "../context";

export default function Form() {

    const [state, dispatch] = useContext(Context);

    function onInputChange(e, name) {
      state.errors = {};
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
        <>
        <h1>Contact Us</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <div>
                    {state.errors.fname && <p>{state.errors.fname}</p>}
                    <label htmlFor="fname">First Name : </label>
                    <input type="text" name="fname" id="fname" value={state.fname} onChange={(e) => onInputChange(e, "setFname")} />
                </div>
                <div>
                    {state.errors.lname && <p>{state.errors.lname}</p>}
                    <label htmlFor="lname">Last Name : </label>
                    <input type="text" name="lname" id="lname" value={state.lname} onChange={(e) => onInputChange(e, "setLname")} />
                </div>
                <div>
                    {state.errors.email && <p>{state.errors.email}</p>}
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" value={state.email} onChange={(e) => onInputChange(e, "setEmail")} />
                </div>
                <div>
                    {state.errors.qType && <p>{state.errors.qType}</p>}
                    <label htmlFor="qtype">Query Type : </label>
                    <div>
                        <div>
                            <label htmlFor="generalQ">General Enquiry</label>
                            <input type="radio" value="General Enquiry" checked={state.qType === "General Enquiry"} onChange={(e) => onInputChange(e, 'setQType')} name="qType" id="generalQ" />
                        </div>
                        <div>
                            <label htmlFor="supprtQ">Support Request</label>
                            <input type="radio" value="Support Request" checked={state.qType === "Support Request"} onChange={(e) => onInputChange(e, 'setQType')} name="qType" id="supprtQ" />
                        </div>
                    </div>
                </div>
                <div>
                    {state.errors.message && <p>{state.errors.message}</p>}
                    <label htmlFor="message">Message : </label>
                    <textarea name="message" id="message" value={state.message} onChange={(e) => onInputChange(e, "setMessage")}></textarea>
                </div>
                <div>
                    {state.errors.consent && <p>{state.errors.consent}</p>}
                    <label htmlFor="consent">Consent : </label>
                    <input type="checkbox" name="consent" id="consent" checked={state.consent} onChange={(e) => onInputChange(e, "setConsent")} />
                </div>
                <button>Submit</button>
            </div>
        </form>
        </>
    )
}