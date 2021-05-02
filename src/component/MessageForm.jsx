import {useState} from 'react'
import {SendOutlined  , PaperClipOutlined } from '@ant-design/icons';
import {sendMessage} from 'react-chat-engine'



const MessageForm = ( props ) =>{

    const [value, setValue] = useState('');
    const {creds , chatId} = props

    // console.log("message", message)
    const Handlesubmit = (e) =>{
        e.preventDefault()
         const text = value.trim();
         if(text.length){
            sendMessage(creds , chatId , {text}  )
         }
         setValue('')
    }

    const handleChange = (event) =>{
        // event.preventDefault();
        setValue(event.target.value)
    }

    const handleUpload = (e) =>{
        sendMessage(creds , chatId , {files :e.target.files ,text:''}  )
    }

   return(
       <form className="message-form" onSubmit={Handlesubmit}>
           <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={Handlesubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PaperClipOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
       onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined  className="send-icon" />
      </button>

       </form>
   )
}

export default MessageForm