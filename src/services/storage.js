 export const StoreUserData=(user)=>{
    localStorage.setItem("username",user.name)
    localStorage.setItem("useremail",user.email)
    localStorage.setItem("userpassword",user.password)
    
 }
 export const getuserData=()=>{
    return  localStorage.getItem("username")
   }


   export const LoginStore=(user)=>{
      localStorage.setItem("mailid",user.email);
      localStorage.setItem("password",user.password)

   }
   export const confirm_user_data =()=>{
      return localStorage.getItem("mailid")

   }