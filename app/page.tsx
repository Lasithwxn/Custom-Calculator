"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const appendToDisplay = (value: string) => {
    setDisplayValue((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const calculate = () => {
    try {
      let expression = displayValue
        .replace(/!=/g, '!==')
        .replace(/>=/g, '>=')
        .replace(/<=/g, '<=')
        .replace(/mod/g, '%')
        .replace(/\^/g, '**')
        .replace(/sqrt$$ ([^)]+) $$/g, 'Math.sqrt($1)');

      // eslint-disable-next-line no-eval
      const result = eval(expression);
      if (isNaN(result) || !isFinite(result)) {
        setDisplayValue("Error");
      } else {
        setDisplayValue(result.toString());
      }
    } catch (e) {
      setDisplayValue("Error");
    }
  };

  const setBackground = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const bgImage = e.target?.result as string;
        setBackgroundImage(bgImage);
        localStorage.setItem("calculatorBg", bgImage);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedBg = localStorage.getItem("calculatorBg");
    if (savedBg) {
      setBackgroundImage(savedBg);
    }
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#1a1a1a",
        color: "#e0e0e0",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <style jsx global>{`
        .calculator { 
          background-color: #333; 
          border-radius: 10px; 
          padding: 20px; 
          box-shadow: 0 0 10px rgba(0,0,0,0.5); 
          background-size: cover; 
          ${backgroundImage ? `background-image: url(${backgroundImage});` : ""} 
        }
        .no-bg { 
          background-color: #00000036; 
          border-radius: 5px 5px 0 0; 
          padding: 5px 200px; 
          margin-bottom: 5px; 
        }
        #display { 
          width: 100%; 
          height: 50px; 
          font-size: 2em; 
          margin-bottom: 10px; 
          text-align: right; 
          background-color: #2b2b2b; 
          color: #fff; 
          border: none; 
          padding: 5px; 
          border-radius: 5px; 
          box-sizing: border-box; 
        }
        .buttons { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 15px; 
        }
        button { 
          padding: 15px; 
          font-size: 1.2em; 
          background-color: #4040407b; 
          border: none; 
          color: #e0e0e0; 
          cursor: pointer; 
          transition: background-color 0.2s; 
          border-radius: 5px; 
          width: 100%; 
        }
        button:hover { 
          background-color: #000; 
        }
        .file-label, .set-bg-btn { 
          display: inline-block; 
          padding: 5px 10px; 
          background-color: #4040407b; 
          color: #e0e0e0; 
          border-radius: 5px; 
          cursor: pointer; 
          font-size: 0.8em; 
          transition: background-color 0.2s; 
          margin-left: 10px; 
          border: none; 
        }
        .file-label:hover, .set-bg-btn:hover { 
          background-color: #505050; 
        }
        .brand-name { 
          color: #fff; 
          font-size: 1.9em; 
          margin-right: 10px; 
          background-color: rgba(255,255,255,0.11); 
          border-radius: 10px; 
          padding: 2px 5px; 
          font-family: 'Orbitron', sans-serif; 
        }
        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
      `}</style>
      <div className="calculator">
        <div className="no-bg">
          <span className="brand-name">LASI</span>
          <input type="file" ref={fileInputRef} accept="image/*" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
          <label className="file-label" onClick={() => fileInputRef.current?.click()}>Choose file</label>
          <button className="set-bg-btn" onClick={setBackground}>Set Background</button>
        </div>
        <input type="text" id="display" value={displayValue} placeholder="0" readOnly />
        <div className="buttons">
          <button onClick={clearDisplay}>C</button><button onClick={() => appendToDisplay('7')}>7</button><button onClick={() => appendToDisplay('8')}>8</button><button onClick={() => appendToDisplay('9')}>9</button><button onClick={() => appendToDisplay('/')}>/</button>
          <button onClick={() => appendToDisplay('4')}>4</button><button onClick={() => appendToDisplay('5')}>5</button><button onClick={() => appendToDisplay('6')}>6</button><button onClick={() => appendToDisplay('*')}>*</button>
          <button onClick={() => appendToDisplay('1')}>1</button><button onClick={() => appendToDisplay('2')}>2</button><button onClick={() => appendToDisplay('3')}>3</button><button onClick={() => appendToDisplay('-')}>-</button>
          <button onClick={() => appendToDisplay('.')}>.</button><button onClick={() => appendToDisplay('0')}>0</button><button onClick={calculate}>=</button><button onClick={() => appendToDisplay('+')}>+</button>
          <button onClick={() => appendToDisplay('^')}>^</button><button onClick={() => appendToDisplay('sqrt(')}>√</button><button onClick={() => appendToDisplay('(')}>(</button><button onClick={() => appendToDisplay(')')}>)</button><button onClick={() => appendToDisplay('%')}>%</button>
        </div>
      </div>
    </main>
  );
}
