import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logo } from "../../constants"
import { loginUserStart } from "../../slice/auth"
import { Input } from "../../UI"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart())
  }

  return (
    <div className="form-signin w-100 mx-auto mt-5">
      <form className='text-center'>
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-4 fw-normal">Please Login</h1>

          <Input setState={setEmail} label={"email"} htmlForType="floatingInput" />
          <Input setState={setPassword} type='password' htmlForType="floatingPassword" label={"password"} />

          <button
            onClick={loginHandler} 
            className="w-100 btn btn-lg btn-primary mt-3" 
            type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login