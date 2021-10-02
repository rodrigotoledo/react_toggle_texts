import React from 'react';
import './App.css';

function App() {
  return (
    <form className="content">
      <h1>Toggle Texts</h1>
			<fieldset>
				<label htmlFor="textOne">Text One</label>
				<textarea placeholder="Togglable text One" id="textOne"></textarea>
			</fieldset>
			<button>Toggle Texts</button>
			<fieldset>
				<label htmlFor="textTwo">Text Two</label>
				<textarea placeholder="Togglable text Two" id="textTwo"></textarea>
			</fieldset>
    </form>
  );
}

export default App;
