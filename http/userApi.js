import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const generateCode = async (numberPhone)=>{
    const {data} = await $host.post('/api/user/generateCode',{numberPhone});
    const user = JSON.stringify(data.user);
    document.cookie = `user=${user};path=/`;
    localStorage.setItem('token',JSON.stringify(data.user));
    
    return  data.user;
}
// export const generateCodeEmail = async (email)=>{
//     const {data} = await $authHost.post('/api/user/generateCodeEmail',{email});
//     const user = JSON.stringify(data.user);
//     document.cookie = `user=${user};path=/`;
//     localStorage.setItem('token',JSON.stringify(data.user));
    
//     return  data.user;
// }
// export const generateCodePhone = async (numberPhone)=>{
//     const {data} = await $authHost.post('/api/user/generateCodePhone',{numberPhone});
//     const user = JSON.stringify(data.user);
//     document.cookie = `user=${user};path=/`;
//     localStorage.setItem('token',JSON.stringify(data.user));
    
//     return  data.user;
// }
export const authorization = async (tel,pin,id)=>{
    const {data} = await $host.post('/api/user/autification',{tel,pin,id});
    const token = JSON.stringify(data.token);
    document.cookie = `token=${token};path=/`;
    localStorage.setItem('token',data.token);
    return jwt_decode(data.token);
}
export const checkConfirmEdit = async (pin,tel,id,newEmail)=>{
    await $authHost.post('/api/user/checkConfirmEdit',{pin,tel,id,newEmail});
}
export const check = async () => {
    try {
        const {data}  = await $authHost.get('/api/user/auth');
        if(data.token){
            const token = JSON.stringify(data.token);
            document.cookie = `token=${token};path=/`;
            localStorage.setItem('token', data.token);
            return jwt_decode(data.token);
        }
    } catch (error) {
        console.log(error,'нет userApi');
    }     
}

export const findUser = async ({tel}) => {
    try {
        const data = await $authHost.post('/api/user/currentUser',{tel});
        return data;
    } catch (error) {
        console.log(error,'Пользователь не найдет В бд')
    }
}
export const addFieldUser = async(userData) => {
    try {
        const data = await $authHost.post('/api/user/addFieldUser',{userData});
        return data
    } catch (error) {
        console.log('Ошибка с изменением политики безопатности')
    }
}
export const checkAllEmailСoincidence = async(email,newEmail) => {
    try {
        const data = await $authHost.post('/api/user/checkAllEmailCoincidence',{email,newEmail});
        return data
    } catch (error) {
        
    }
}
export const checkAddPolicySecurity = async (isProcessingPersonalData,tel)=>{
    try {
        console.log(isProcessingPersonalData,tel);
        const data = await $authHost.post('/api/user/checkAddPolicySecurity',{isProcessingPersonalData,tel});
        return data
    } catch (error) {
        console.log(error,123)
    }
}