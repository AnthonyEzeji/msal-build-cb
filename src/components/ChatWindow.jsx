import React from 'react'

function ChatWindow() {
  return (
    <div className='flew w-screen h-screen bg-white'>
        <iframe className='w-full h-full' src="https://ngagpt.azurewebsites.net/" frameborder="0"></iframe>
    </div>
  )
}

export default ChatWindow