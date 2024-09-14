import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Success = () => {
const [searchParams] = useSearchParams()
const navigate = useNavigate()
    useEffect(() => {
        const token = searchParams.get("token") || ''
        if(token) {
                localStorage.setItem("token", token)
            navigate("/")
        }
        else{
            navigate("/login")
        }
    }, [navigate, searchParams])

  return (
    <>
        TokenWIthBe:{searchParams.get("token")}
    </>
  )
}

export default Success