const Auth = (props) => {
    return (
        <form className="form__log-in"  onSubmit={props.loginFunction}>
            <h2>Log In</h2>
            <input placeholder="E-Mail" type="email"/>
            <input placeholder="Password" type="password"/>
            <button className="Log-in">Log In</button>
        </form>
    )
}

export default Auth;