import { Message, UserData } from '@/app/data'
import ChatTopbar from './chat-topbar'
import { ChatList } from './chat-list'
import React from 'react'

interface ChatProps {
  messages?: Message[]
  selectedUser: UserData
  isMobile: boolean
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(messages ?? [])

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage])
  }

  return (
    <div className="flex h-[90%] w-full flex-col justify-between">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  )
}