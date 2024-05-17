import { useState } from 'react'
import './App.css'

function App() {
  const [textArea, setTextArea] = useState('');

  return (
    <>
      <h1>Markdown Previewer</h1>
      <textarea id='editor' value={textArea} onChange={e => setTextArea(e.target.value)}></textarea>
      <div id='preview'>{textArea}</div>
    </>
  )
}

export default App
