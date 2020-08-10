import React, {useState, useEffect} from 'react';
import { register, validate } from './UserFunctions';


const Register = ({registerClickHandler}) => {
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [rePassword, setRePassword]=useState('')
    const [ errors, setErrors]= useState([])
    const [user, setUser] = useState(null)
    const onSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
        const error = validate(email, password)
        
        if(error.length > 0){
            console.log("hileo")
            setErrors(error)
            return;
        }else if(error.length === 0){
            console.log('successful')
            setUser({
                'email' : email,
                'password': password,
                'first_name': firstName,
                'last_name': lastName,
            }) 
        }
    }
    useEffect(() => {
        if(user){
            register(user).then(res => {
                if(res === 300){
                    let errors = []
                    errors.push('Could not register at this time. Please try again.')
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setRePassword('')
                    setErrors(errors)
                    setUser(null)
                    return
                }else(  
                    registerClickHandler()
                )
            })
        }
    }, [user, registerClickHandler])

    return(
        <div className="container">
                
                        <form noValidate onSubmit={onSubmit}>
                        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                                ))}
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="repassword">Confirm Password</label>
                                <input type="password"
                                className="form-control"
                                name="repassword"
                                placeholder="Confirm password"
                                value={rePassword}
                                onChange={e => setRePassword(e.target.value)}
                                />
                            </div>
                            <div onClick={onSubmit}
                            className="onSubmit">Submit</div>
                        </form>
                    </div>
                
    )
}
export default Register;