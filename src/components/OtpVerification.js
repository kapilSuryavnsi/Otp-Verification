import React from "react";


const OtpVerification = (props) => {

    // Toggling button's text
    let buttunText;
    props.displayOtpForm ? buttunText = 'Submit' : buttunText = 'Verify Mobile Number'

    return (
        <div className="container">
            <h1>Otp Verification Assignment</h1>

            {props.displayOtpForm && (
                <form>
                    {props.otp.map((digit, index) => (
                        <input
                          className="otp-inputs"
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(event) => props.handleChange(index, event)}
                            onKeyDown={(event) => props.handleKeyDown(index, event)}
                            onPaste={(event) => props.handlePaste(event)}
                            ref={(input) => (props.inputs.current[index] = input)}

                        />))
                    }
                </form>
            )}

            <button onClick={props.setDisplay}>{buttunText}</button>
        </div>

    )
}

export default OtpVerification;
