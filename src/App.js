import {ChatEngine, getOrCreateChat } from 'react-chat-engine';
import React, { useState } from 'react'
import ChatFeed from './component/ChatFeed'
import LoginForm  from './component/loginform'
import './App.css'

const App = () =>{
    const [username, setUsername] = useState('')
    if (!localStorage.getItem('username')) return <LoginForm />;

    function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	  }
      	function renderChatForm(creds) {
		return (
			<div style={{ padding:"20px", margin: '20px'}}>
                {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username"  /> */}
				<input className="createchat"
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button className="createbutton" style={{ marginLeft:"50px"}} onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

    return (
        <ChatEngine
        height="100vh"
        projectID="5adfe1aa-ca6d-486e-99a8-85834de9a6b5"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderNewChatForm={(creds) => renderChatForm(creds)}
        renderChatFeed={(chatAppprops)=><ChatFeed {...chatAppprops} />}
        
       />
    )
}


//import React, { useState } from 'react'

// import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

// const App = () => {
// 	const [username, setUsername] = useState('')

// 	function createDirectChat(creds) {
// 		getOrCreateChat(
// 			creds,
// 			{ is_direct_chat: true, usernames: [username] },
// 			() => setUsername('')
// 		)
// 	}

// 	function renderChatForm(creds) {
// 		return (
// 			<div>
// 				<input 
// 					placeholder='Username' 
// 					value={username} 
// 					onChange={(e) => setUsername(e.target.value)} 
// 				/>
// 				<button onClick={() => createDirectChat(creds)}>
// 					Create
// 				</button>
// 			</div>
// 		)
// 	}

// 	return (
// 		<ChatEngine
// 			        height="100vh"
//          projectID="5adfe1aa-ca6d-486e-99a8-85834de9a6b5"
//           userName='Didi'
//           userSecret='12345678'
// 			renderNewChatForm={(creds) => renderChatForm(creds)}
// 		/>
// 	)
// }

//export default DirectChatPage;

export default App