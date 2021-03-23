import React, { createContext, useContext, useEffect, useState } from 'react'

const NetworkContext = createContext()

export const NetworkProvider = ({ children }) => {

  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {

    setIsOnline(navigator.onLine)

    function changeStatus() {
      setIsOnline(navigator.onLine)
    }
    window.addEventListener('online', changeStatus)
    window.addEventListener('offline', changeStatus)

    return () => {
      window.removeEventListener('online', changeStatus)
      window.removeEventListener('offline', changeStatus)
    }

  }, [])

  return (
    <NetworkContext.Provider value={{ isOnline: isOnline }}>
      { children }
    </NetworkContext.Provider>
  )
}

export const useNetwork = () => {
  const context = useContext(NetworkContext)
  if (context === undefined) {
    throw new Error('useNetwork must be used within an NetworkProvider')
  }
  return context
}
