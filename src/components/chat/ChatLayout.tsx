'use client'

import { Message, userData } from '@/app/data'
import React, { useEffect, useState } from 'react'
import { Chat } from './Chat'

export function ChatLayout({ messages }: { messages: Message[] }) {
  const [selectedUser, setSelectedUser] = React.useState(userData[0])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkScreenWidth()

    // Event listener for screen width changes
    window.addEventListener('resize', checkScreenWidth)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  return (
    <Chat messages={messages} selectedUser={selectedUser} isMobile={isMobile} />
  )
}