import React, {useState} from 'react';
import './App.css';
import data from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if(count<=0){
      amount = 1;
      alert("You know number of paragraph can't be less than 0 or equal to 0. So, to simplify, we have generated a paragraph for you");
    }

    if(count>8){
      amount = 8;
    }

    console.log(amount);

    setParagraph(data.slice(0, amount));
  };

  return <section>
    <div className='title'>
      <p>Tired of Boring Lorem Ipsum?</p>
    </div>
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type='submit'>Generate</button>
      </form>
    </div>
    <article className='lorem-text'>
      {
        paragraph.map((text, index)=>{
          return <p key={index}>{text}</p>
        })
      }
      {/* <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p> */}
    </article>
  </section>
}

export default App;