export default function Form({ state, onInputChange, handleSubmit }) {
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