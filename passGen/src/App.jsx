import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const PasswordRef = useRef(null)

  const generatePassword = useCallback(() => {
  let pass = '';

  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbersAllowed) chars += '0123456789';
  if (charAllowed) chars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(index);
  }

    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);
   
  useEffect(() => {generatePassword()}, [length, numbersAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    PasswordRef.current?.select()
  }

  return (
    <>
     <div className='flex flex-col flex-wrap items-center justify-center py-5 px-2 shadow-2xl'>
      <h1 className='text-white flex font-bold mb-5 text-2xl'>Password Generator</h1>
        <div className='flex flex-row gap-2 shadow-lg mb-5'>
          <input type="text" 
          className='bg-white outline-none px-5 text-amber-500 py-1 rounded-2xl overflow-hidden'
          placeholder='password' 
          value={password}
          readOnly  
          ref={PasswordRef}/>
          <button className='bg-sky-500 hover:bg-sky-700 text-white px-5 rounded-2xl' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex flex-row'>
          <div>
            <input className='mr-3 cursor-pointer' min={6} max={100} type="range" name="" id="" 
            onChange={(e) => setLength(e.target.value)} />
            <label className='mr-3 text-amber-700' htmlFor="length">Length: {length}</label>
          </div>
          <div>
            <input className='mr-0.5' type="checkbox" name="" id=""
            onChange={() => setNumbersAllowed((prev) => !prev)} />
            <label className='text-amber-700 mr-3' htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input className='mr-0.5' type="checkbox" name="" id=""
            onChange={() => setCharAllowed((prev) => !prev)} />
            <label className='text-amber-700' htmlFor="characters">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
