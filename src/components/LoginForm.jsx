import {useState} from 'react';
import axios from 'axios';
export default function LoginForm() {
   const[username,setUsername]=useState('');
   const[password,setPassword]=useState('');
   const [error, seterror] = useState('');

   const handleSubmit = async(e) =>{
    e.preventDefault();

    const authObject={'Project-ID':"14a4d901-fcef-4eef-aa6c-190b6be85895",'User-Name':username,'User-Secret':password}

    try {
        // username | password => chatengine -> give messages
     await axios.get('https://api.chatengine.io/chats',{headers:authObject});

        //works out loggin

      localStorage.setItem('username',username);
      localStorage.setItem('password',password);

      window.location.reload();
    } catch (error) 
    {
        // error try with new username
        seterror('Oops,incorrect credentials.')
    }

   }

   return(
       <div className="wrapper">
           <div className="form">
               <h1 className="title">Chat Application</h1>
               <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
               </form>
           </div>
       </div>
   )

}
