import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function OrderCompleted() {
  const navigate = useNavigate()

  const backToMenu = () => {
    setTimeout( () => {
      navigate("/")
    },2000)
  }

  useEffect(() => {
    backToMenu()
  }, [])

  return (
    <div style={{height:"100vh"}}>
      <h2>Order sent! redirecting back to main page...</h2>
    </div>
  )
}
