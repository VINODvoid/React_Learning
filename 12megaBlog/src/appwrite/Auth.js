import conf from './config';
import { Client, Account, ID } from "appwrite";

export  class AuthService {
    client = new Client();
    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteUrl) //! Your API Endpoint
            .setProject(conf.appwriteProjectId); //! Your project ID
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) 
    {
        try{
            const userAccount = await this.account.create(ID.unique,email, password, name);
            if(userAccount)
            {
               //*call another method
            this.login({email, password});
            }
            else{
                return userAccount;
            }
        }
        catch(err){
            
            console.log(err);
        }
    }
    async login({email, password})
    {
        try{
            await this.client.account.createEmailSession(email, password);
        }
        catch(err){
            console.log(err);
        }
    }
    async getCurrentUser()
    {
        try{
            await this.account.get();
        }
        catch(err)
        {
            console.log(err);
        }
    return null;
    }
    async logout()
    {
        try{
            await this.account.deleteSessions();
        }
        catch(err){
            console.log(err);
        }
    }
}
const authService  = new AuthService();
export default authService;

