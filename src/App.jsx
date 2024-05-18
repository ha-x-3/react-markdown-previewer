import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
	const [textArea, setTextArea] = useState('');

  const parsedText = (textArea) => {
    marked.parse(textArea);
    return parsedText;
  };

	return (
		<>
			<h1>React Markdown Previewer</h1>
			<div id='editorDiv'>
        <h2>Editor</h2>
				<textarea
					id='editor'
					value={textArea}
					onChange={(e) => setTextArea(e.target.value)}
				></textarea>
			</div>
			<div id='previewDiv'>
        <h2>Previewer</h2>
				<div id='preview'>{parsedText}</div>
			</div>
		</>
	);
}

export default App;
