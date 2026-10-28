import { useCallback, useMemo, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}-+_=[]~`*";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return pass;
  }, [length, numberAllowed, charAllowed]);

  const password = useMemo(() => passwordGenerator(), [passwordGenerator]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  
  return (
    <>
      <div className="w-full min-h-screen bg-black flex justify-center items-start px-4">
        <div className="w-full max-w-xl bg-slate-800 rounded-xl shadow-md px-5 py-5 mt-10 overflow-hidden">
          <h1 className="text-white text-center text-xl font-semibold my-3">
            Password generator
          </h1>

          <div className="flex w-full rounded-lg overflow-hidden mb-5">
            <input
              type="text"
              className="outline-none w-full py-2 px-3 text-lg bg-white text-gray-800"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />


            <button
              type="button"
              onClick={copyPassToClipboard}
              className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shrink-0"
            >
              copy
            </button>
          </div>

          <div className="flex items-center gap-x-2 text-orange-500">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-32 accent-blue-600"
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <label>Length: {length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={charAllowed}
                id="CharacterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="CharacterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
