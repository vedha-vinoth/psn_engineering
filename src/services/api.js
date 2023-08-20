import axios from "axios"


 export const RegisterApi=(inputs)=>{
    let data= {name:inputs.name,email:inputs.email,password:inputs.password}
   return axios.post('https://jsonplaceholder.typicode.com/posts',data)
}