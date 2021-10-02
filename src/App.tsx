import React, {useState} from 'react';
import './App.css';

function App() {
	const [textOne, setTextOne] = useState("");
	const [textTwo, setTextTwo] = useState("");
	let toggleTexts = (e:any) => {
		const tmpTextOne = textOne;
		const tmpTextTwo = textTwo;
		setTextTwo(tmpTextOne)
		setTextOne(tmpTextTwo)
		e.preventDefault()
	}

  return (
    <form>
      <h1>Toggable</h1>
      <h3>Fill the fields and Click<br /> magic will happens</h3>
			<fieldset>
				<label htmlFor="textOne">Text One</label>
				<textarea placeholder="Togglable text One" value={textOne} onChange={(event) => { setTextOne(event.target.value) }}></textarea>
			</fieldset>
			<button onClick={toggleTexts}>Click for Toggle Texts</button>
			<fieldset>
				<label htmlFor="textTwo">Text Two</label>
				<textarea placeholder="Togglable text Two" value={textTwo} onChange={(event) => { setTextTwo(event.target.value) }}></textarea>
			</fieldset>
    </form>
  );
}

export default App;
