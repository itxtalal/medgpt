import { Message, UserData } from '@/app/data'
import ChatTopbar from './ChatTopbar'
import { ChatList } from './ChatList'
import React from 'react'
import axios from 'axios'

interface ChatProps {
  messages?: Message[]
  selectedUser: UserData
  isMobile: boolean
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(messages ?? [])

  const sendMessage = async (newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage])

    const res1 = await axios.post(
      '/api/falcon',
      {
        chatHistory: messagesState.map((message) => ({
          role: message.role,
          content: message.message,
        })),
        newMessage: newMessage.message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    setMessages((prev) => [
      ...prev,
      {
        id: messagesState.length + 1,
        avatar: '/ai.png',
        name: 'AI',
        role: 'assistant',
        message: res1.data.data[0].message.content.replace('\nUser:', ''),
      },
    ])
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