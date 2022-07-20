import React from 'react';
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


const LoginForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>

            <div>
                <Field placeholder={'Password'} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field type={'Checkbox'} name={'rememberMe'} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}
export default Login