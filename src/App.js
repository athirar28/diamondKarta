import {  useState } from "react";
import './App.css'

const App = () => {
  const [pattern, setPattern] = useState(null);
  const [patternArray, setPatternArray] = useState([]);

  const onchangePattern=(e)=>{
    setPattern(e.target.value)
  }

  const onSubmitPattern=()=>{
    createDiamondKata(pattern)
  }


  const createDiamondKata=(character)=> {
    let first = 'A'.charCodeAt(), frame, 
        width = character.toUpperCase().charCodeAt() - first,
        i = 0, lines = [];

    const blanks=(n)=> { return new Array(n).join(' '); }

    const makeNewLine=()=> {
        return blanks(width + 1 - i) + frame +
            blanks(i * 2) + frame;
    }
  while (i++ < width) {
          frame = String.fromCharCode(first + i);
          lines.push(makeNewLine());
      }
  if (lines.length) {
          lines.unshift(blanks(width + 1) + 'A');
          lines = lines.concat(
              lines.slice(0, lines.length - 1).reverse());
      } else {lines.push('A');
      }
      lines.join('\n');
      console.log(lines)
      setPatternArray(lines)
  }

  return (
    <div className="App">
      <div className="form">
        <input type="text" placeholder="Type your pattern alphabet..." value={pattern} onChange={(e)=>onchangePattern(e)}/>
        <button className="button" onClick={()=>onSubmitPattern()}>Submit</button>
      </div>
      {patternArray.map(a=>{return <pre>{a}</pre>})}
    </div>
  );
};
export default App;
