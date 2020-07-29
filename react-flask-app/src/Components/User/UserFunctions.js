import axios from 'axios'


export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered' , response)
    })
}

export const login = (user, setUserId) => {
  
  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if(isNaN(response.data)){
        console.log('is not a number')
        
        return false
      }else{
        
        setUserId(response.data)
        return true
      }
      
    })
    .catch(err => {
      console.log(err)
    })
}
export const validate = (email,password) =>{
  const errors=[];

  if((!email.length) || (!password.length)){
      
      errors.push("You forgot to fill something in.");
  }
  
  if (email.length < 5){
      errors.push("Email should be at least 5 charcters long");
  }
  if(email.split("").filter(x => x === "@").length !== 1){
      errors.push("Email should contain @");
  }
  if(email.indexOf(".") === -1){
      errors.push("Email should contain at least one dot");
  }
  if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
  }
  
  if (errors.length > 0){
      return errors;
  }
  return errors;
}



