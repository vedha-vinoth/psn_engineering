import axios from "axios"
 


 export const LoginApi=(inputs)=>{
    let data= {email:inputs.email,password:inputs.password}
    return axios.post('https://jsonplaceholder.typicode.com/posts',data)

 }