import React from 'react';
import propTypes from 'prop-types';

function DadJokeButton({ callback }) {
  return (
    <button onClick={callback} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">
      Gimme some of them <span role="img" aria-label="fire">🔥</span>dadjokes
    </button>
  );
}

DadJokeButton.propTypes = {
  callback: propTypes.func,
};

export default DadJokeButton;
