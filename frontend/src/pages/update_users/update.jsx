import React from 'react'
import { useParams } from 'react-router-dom'

const update = () => {
  const { id } = useParams()
  return (
    <div>update</div>
  )
}

export default update