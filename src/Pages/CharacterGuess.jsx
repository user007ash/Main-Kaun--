import React from 'react'
import { useParams} from 'react-router-dom'
export const CharacterGuess = () => {
  const { guess} = useParams();
  return (
    <div>CharacterGuess</div>
  )
}
