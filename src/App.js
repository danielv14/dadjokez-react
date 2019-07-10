import React, { useState } from 'react';
import "./index.css";
import { getRandomJoke } from './api';
import DadJokeButton from './components/DadJokeButton';
import DadJoke from './components/DadJoke';

function App() {
  const [dadJoke, setDadJoke] = useState(
    ''
  );
  const fetchRandomJoke = async () => {
    const joke = await getRandomJoke();
    setDadJoke(joke)
  }
  return (
    <div className="container mx-auto h-screen flex items-center justify-start">
      <div className="">
        <DadJoke joke={dadJoke}></DadJoke>
        <DadJokeButton callback={fetchRandomJoke}></DadJokeButton>
      </div>
    </div>
  );
}

export default App;
