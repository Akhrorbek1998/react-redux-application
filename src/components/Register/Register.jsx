import { useState } from 'react'
import {logo} from '../../constants'
import { Input } from '../../UI'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="form-signin w-100 mx-auto mt-5">
      <form className='text-center'>
        <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-4 fw-normal">Please register</h1>

          <Input label={"username"} htmlForType="floatingUsername" state={name} setState={setName} />
          <Input type='email' htmlForType="floatingInput" label={"email"} state={email} setState={setEmail} />
          <Input type='password' htmlForType="floatingPassword" label={"password"} state={password} setState={setPassword} />

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign up</button>
      </form>
    </div>

  )
}

export default Register