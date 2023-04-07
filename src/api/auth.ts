import {UserType} from "../ type"
import  request from "../utils/request"

export const Lgoin = ( data:UserType) => {
return request.post("/api/login" , data)
}
