import { useState } from "react";
import validation from "../Validation/Validation";




const Form = ({login}) => {

const [ errors, setErrors] =useState({})    
const [userData, setUserData] = useState({
    email: '',
    password: ''
})

const handleChange = (event) => {
 setUserData({
    ...userData,
    [event.target.name]: event.target.value
 })
 setErrors(validation({
    ...userData,
    [event.target.name]: event.target.value
 }))
}

const handleSubmit = (event) => {
event.preventDefault()
login(userData);
}

return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{color: "green"}}>Email:</label>
        <input type="text" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <hr />

        <label htmlFor="password" style={{color: "green"}}>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
        {errors.email && <p>{errors.password}</p>}

        <button>Submit</button>
    </form>
)
}
export default Form;