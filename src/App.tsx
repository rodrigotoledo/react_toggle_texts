import React from 'react';
import './App.css';

function App() {
  return (
    <form>
      <h1>Toggable</h1>
      <h3>Fill the fields and press,<br /> magic will happens</h3>
			<fieldset>
				<label htmlFor="textOne">Text One</label>
				<textarea placeholder="Togglable text One" id="textOne"></textarea>
			</fieldset>
			<button>Click for Toggle Texts</button>
			<fieldset>
				<label htmlFor="textTwo">Text Two</label>
				<textarea placeholder="Togglable text Two" id="textTwo"></textarea>
			</fieldset>
    </form>
  );
}

export default App;
