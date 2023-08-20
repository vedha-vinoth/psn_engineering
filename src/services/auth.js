import { confirm_user_data, getuserData } from "./storage"

export const isAuthenticated =()=>{
    return getuserData()!=null?true:false;
}

export  const LogAuth=()=>{
return confirm_user_data()!=null?true:false;
}
