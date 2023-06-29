import React,{useState, useEffect} from 'react';

const Auth = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(enteredEmail.includes("@") && enteredEmail.indexOf("email") === 0 && enteredPassword.length > 6 && enteredPassword.lastIndexOf(7) === enteredPassword.length - 1);
        console.log("form validation");
    },[enteredEmail, enteredPassword]);
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const emailValidateHandler = () => {
        // console.log(enteredEmail.includes("@"));
        setEmailIsValid(enteredEmail.includes("@") && enteredEmail.indexOf("email") === 0);
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }
    const passwordValidateHandler = () => {
        setPasswordIsValid(enteredPassword.length > 6 && enteredPassword.lastIndexOf(7) === enteredPassword.length - 1);
    }
    let formClasses = ["form", formIsValid === false ? "form__log-in form-is-invalid" : "form__log-in"];
    return (
        <form className={formClasses.join(" ")} noValidate onSubmit={props.loginFunction}>
            <h2>Log In</h2>
            <input placeholder="E-Mail" type="email" className={emailIsValid === true ? "" : "invalid"} value={enteredEmail} onChange={emailChangeHandler} onBlur={emailValidateHandler}/>
            <input placeholder="Password" type="password" className={passwordIsValid === true ? "" : "invalid"} value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordValidateHandler}/>
            <button className="Log-in" disabled={!formIsValid}>Log In</button>
        </form>
    )
}

export default Auth;