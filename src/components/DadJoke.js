import React from 'react';
import propTypes from 'prop-types';


function DadJoke({ joke }) {
  return (
    <p className="p-2 font-medium text-lg">
      {joke}
    </p>
  );
}

DadJoke.propTypes = {
  joke: propTypes.string,
};

export default DadJoke;
