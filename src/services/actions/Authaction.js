import api from "../../apis/api"
import history  from "../../history";


// const history = useHistory()
export const isSignIn =(cred)=>async(dispatch)=>{
    await api.get(`/logincred`).then((response) => {
        let responseValue = response.data;
        for (let i = 0; i < responseValue.length; i++) {
            let username = cred.email;
            let password = cred.password;
                                                                                                      
            if (username === responseValue[i].email && password === responseValue[i].password) {
                console.log("success");
                history.push('/dashboard');
            }
        }
    })
     
}