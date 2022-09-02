import React from 'react';
import {reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../Common/FormsControl/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControl/FormsControls.module.css"


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {/*<div>*/}
            {/*    <Field placeholder={"Email"} name={"email"}*/}
            {/*           validate={[required]}*/}
            {/*           component={Input}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field placeholder={"Password"} name={"password"} type={"password"}*/}
            {/*           validate={[required]}*/}
            {/*           component={Input}/>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me*/}
            {/*</div>*/}


            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);