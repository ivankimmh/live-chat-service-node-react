// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import queryString from 'query-string'
// import { io } from 'socket.io-client'
// import AnimatedLetters from '../AnimatedLetters'
// // import { logout } from '../../services/userSlice'
// // import { rooms, messages } from '../../services/socketSlice'
// import Loader from 'react-loaders'
// import { useRef } from 'react'
// import InfoBar from '../InfoBar/index'
// import TextContainer from '../UserContainer'
// import './index.scss'

// let socket

// const ENDPOINT = process.env.REACT_APP_API_DOMAIN

// const Game = () => {
//   const [rooms, setRooms] = useState([])

//   const [users, setUsers] = useState('')
//   const [messages, setMessages] = useState([])
//   const [message, setMessage] = useState('')
//   const [letterClass, setLetterClass] = useState('text-animate')
//   const [roomName, setRoomName] = useState('')

//   const roomCreate = useRef()
//   const dispatch = useDispatch()

//   const { userData, isLoggedIn, userRoomName } = useSelector((state) => {
//     return state.user.value
//   })

//   useEffect(() => {
//     console.log('socket 관련 useEffect 실행됨')
//     socket = io(ENDPOINT)
//     setRoomName(userRoomName)
//     socket.emit('join', { userData, roomName }, (error) => {
//       if (error) {
//         alert(error)
//       }
//     })

//     // ENDPOINT 의 값이 변경되면 socket 을 재연결
//   }, [ENDPOINT])

//   // mesaages 를 받아서 messages 배열에 추가
//   useEffect(() => {
//     if (socket) {
//       socket.on('messages', (data) => {
//         console.log('메세지 추가 : ', data.newMessage)
//         setMessages((messages) => [...messages, data.newMessage])
//       })

//       socket.on('roomData', ({ users }) => {
//         console.log('roomData 쪽에서 받은 users : ', users)
//         setUsers(users)
//       })
//     }
//   }, [])

//   const handleMessage = (e) => {
//     setMessage(e.target.value)
//   }

//   const sendMessage = (e) => {
//     e.preventDefault()

//     // 적힌 메세지 값을 메세지 배열에 추가
//     if (message.length > 0) {
//       socket.emit('sendMessage', message, () => setMessage(''))
//     }
//   }

//   return (
//     <>
//       <div className="container game-page">
//         <div className="user-info">
//           <InfoBar></InfoBar>
//         </div>
//         {isLoggedIn ? (
//           <>
//             <div className="text-zone">
//               <div className="gameRoomList">
//                 <div className="rooms">
//                   <h1>
//                     <AnimatedLetters
//                       letterClass={letterClass}
//                       strArray={['R', 'o', 'o', 'm']}
//                       idx={15}
//                     />
//                   </h1>
//                   <ul>
//                     {rooms.map((room) => (
//                       <li key={room.id}>{room.name}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="chat-info">
//                 <div className="messages">
//                   <h1>
//                     <AnimatedLetters
//                       letterClass={letterClass}
//                       strArray={['M', 'e', 's', 's', 'a', 'g', 'e']}
//                       idx={15}
//                     />
//                   </h1>
//                   <ul>
//                     {messages.map((message, index) => (
//                       <li key={index}>
//                         [{messages[index].time}] {messages[index].user} :{' '}
//                         {messages[index].message}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <input
//                     placeholder="Subject"
//                     type="text"
//                     name="subject"
//                     value={message}
//                     onChange={handleMessage}
//                     onKeyDown={(event) =>
//                       event.key === 'Enter' &&
//                       event.nativeEvent.isComposing === false
//                         ? sendMessage(event)
//                         : null
//                     }
//                   />
//                   <button className="flat-button" onClick={sendMessage}>
//                     SEND
//                   </button>
//                 </div>
//                 <TextContainer users={users} />
//               </div>
//             </div>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//       <Loader type="pacman" />
//     </>
//   )
// }

// export default Game
