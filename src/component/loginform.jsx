import {useState} from 'react' 
import axios from 'axios'

const LoginForm = () =>{
    const [username, setUsername] = useState('Shankey');
    const [password, setPassword] = useState('12345678');
   const [error, setError] = useState('');
//    const [Login , setLogin] = useState(true)

     let  projectID="5adfe1aa-ca6d-486e-99a8-85834de9a6b5"
    const handleSubmit = async (e) =>{
       try{
          e.preventDefault()
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
         let data = await axios.get('https://api.chatengine.io/chats',{headers:authObject})
          if(data){
              localStorage.setItem("username", username)
              localStorage.setItem("password", password)
          }
          window.location.reload();
         setError('');
       }catch(err){
        setError('Oops, incorrect credentials.');
       }
    }

    const loginfunction = () =>{
       return (
                 <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                  <div align="center">
                    <button type="submit" className="button">
                      <span>Start chatting</span>
                    </button>
                  </div>
                  <h4>*Note demo account credentials are shared below</h4>
                  <h4><span>UserName:</span>Prince<span>Passsword:</span>Bo$$</h4>
                </form>
         )
    } 

    // const signupfunction = () =>{
    //     return (
    //               <form onSubmit={handleSubmit}>
    //                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
    //                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
    //                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
    //                <div align="center">
    //                  <button type="submit" className="button">
    //                    <span>Create Account</span>
    //                  </button>
    //                </div>
    //              </form>
    //       )
    //  } 

    return (
            <div className="wrapper">
              <div className="form">
                <h1 className="title">Chat Application</h1>
                { loginfunction()}
                {/* {!Login && signupfunction()} */}
                <h1>{error}</h1>
              </div>
            </div>
        
     );
}

export default LoginForm