import { useState, useCallback, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false); // by default they are not allowed
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)  //grab anything from the windows

  const generatePassword = useCallback(() => {  //as soon as the component or page loads we want another hook to execute this method
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1) //we are just generating a random number storing it in char
      pass += str.charAt(char)
    }

    setPassword(pass) //it will change the state and we will have new password 
  }, [length, numAllow, charAllow]) //as long as things dont change too frequently

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)  //through the browser we are accessing that's in the clipboard
    //writeText: basically writing in clipboard so whenever it's pasted text is available
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numAllow, charAllow]) //run the method immediately as soon as something changes


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-500 text-orange-400'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly // so nobody can write in it
          ref={passwordRef} //now you can grab reference of this input field
        />
        <button
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6} // min 6 char pass to be generated
            max={20}
            value={length} // so anytime the length of the value can be grabbed
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} // if something changes here we need to fire up an event - setLength to new value. setLength governs how you can enter data into the length which we are using. We are setting target.value in length
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={numAllow}
            onChange={() => setNumAllow(prev => !prev)} // reversing the previous value
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow(prev => !prev)} // reversing the previous value
            name=""
            id=""
          />
          <label htmlFor="charater">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
