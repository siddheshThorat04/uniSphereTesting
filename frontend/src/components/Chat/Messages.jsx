import React, { useEffect, useRef } from 'react'
import { useChat } from '../../contextApi/ChatContext'
import { socket } from '../../Socket'
import dp from '../../assets/dp.png'
import { useDarkThemeContext } from '../../contextApi/DarkTheme'
import { TiMessageTyping } from "react-icons/ti";
import {GoHome} from "react-icons/go"
const Messages = () => {
    const { userId, isSearching, setIsSearching, receiver, messages, setMessages, isTyping, message } = useChat()
    const isDark=useDarkThemeContext()
    const messagesRef = useRef(null);

    // Scroll to bottom whenever a new message is added
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);
    const newChat = () => {
        // setIsSearching(true)
        // setMessages([])
        // socket.emit("pairing-user", userId, (error) => {
        //     if (error) {
        //         return alert(error);
        //     }
        // })
        // return () => {
        //     socket.off("pairing-user");
        // };
            window.location.href = "/";

    }

    return (
        <div id='savedchat' className='messageContainer' ref={messagesRef}>
            <button className= {isDark==="false"?"HomeButton HomeButtonDark ":"HomeButton"}  ><GoHome onClick={() => window.location.href = "/"   } className={isDark==="false"?"HomeButton text-balck":"HomeButton text-white"}  /></button>
            <div className='googleAd' ></div>
            {!isSearching && !receiver && receiver !== "" && (
                <>
                    <div className='welcomeText'>mateBatu : talk to strangers</div>
                    <div className='startBtnSmall' onClick={newChat}>Start a new conversation</div>
                </>
            )}

            {receiver && <p className={isDark==="false"?'connectedText text-blue-700  text-center ':'text-blue-500 text-center '}>Connected ✅</p>}
            {messages.map((message, index) => (
                <div key={index} className={message?.stranger ? "strangerWraper" : "youWraper"}>
                        <p className='msgBy' >
                            {message?.stranger &&<span className='strangerDp ' ><img src={dp} alt=""   /></span>}
                        </p>
                    <div className={message?.stranger ? "strangerMsg " : "yourMsg"}>
                        <p className={isDark==="false"?'text-black msgText':'msgText'} >{message?.stranger ? message.stranger : message.you}</p>
                    </div>
                </div>
            ))
            }

            {isTyping && <div className= "isTyping"  ><span className='strangerDp' ><img src={dp}   alt="" /></span> <h4 className='text-blue-500'  >typing...🤔</h4></div>}

           
            {isSearching && <p className={isDark==="false"?'text-blue-700 text-center':' text-blue-500 text-center'}>Looking for someone you can chat with...🧐</p>}
            {
                !isSearching && !receiver && receiver === "" &&
                <>
                    <div className='disconnectText disconnectedTextMobile'>Stranger has disconnected.</div>
                    <div className='disconnectText disconnectedTextDesktop'>Your conversational partner has disconnected</div>
                    
                   
                </>
            }
        </div >
    )
}

export default Messages

