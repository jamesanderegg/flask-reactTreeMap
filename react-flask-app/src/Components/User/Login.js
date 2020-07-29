import React, {useState, useEffect} from 'react';
import { login, validate } from './UserFunctions'

const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ errors, setErrors] = useState([]);
    const [user, setUser] = useState(null);
    
    
    const onSubmit = (e) =>{
        e.preventDefault()
        const error = validate(email, password)
        
        if(error.length > 0){
            console.log("hileo")
            setErrors(error)
            return;
        }else if(error.length === 0){
            
            setUser({
                'email' : email,
                'password': password
            }) 
        }
        
        
    }
    useEffect(()=>{
        if(user){
            login(user, props.setUserId).then(res => {
                if(!res){
                    let errors = []
                    errors.push('Could not log in. Please try again')
                    setEmail('')
                    setPassword('')
                    setErrors(errors)
                }else{
                    console.log('login successful')
                }    
            })
        }
        
    }, [user, props.setUserId])
    

    return(
        <div className="container">
        <form noValidate onSubmit={onSubmit}>
        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                                ))}
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
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
                            <div onClick={onSubmit}
                            className="onSubmit">Sign in</div>
        </form>
        </div>
    )
}

export default Login;

