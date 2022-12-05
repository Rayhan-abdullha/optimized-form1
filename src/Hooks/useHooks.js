import {useState} from 'react'

export default function useHooks({inital = 0}) {
  const [count, setCount] = useState(inital);
  const handleInc = () => {
    if (count < 10){
      setCount(count+1)
    }
  }
  const handleDec = () => {
    if (count > 0){
      setCount(count-1)
    }
  }
  return {
    count,
    handleInc,
    handleDec,
  }
}
