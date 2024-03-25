import { useState } from "react"

const App = () => {
  const [image, setImage] = useState(null)
  const [value, setValue] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  const surpriseOptions = [
    'Does the image have a whale?',
    'Is the image fabulously pink?',
    'Does the image have puppies?'
  ]

  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  const clear = () => {
    setValue(null)
    setResponse(null)
    setImage(null)
    setError(null)
  }


  return (
    <div className="app">
      <section className="search-section">
        <div className="image-container">
          {image && <img className="image" src={""} />}
        </div>
        <p className="extra-info">
          <span>
            <label htmlFor="files" className="upload"> upload an image </label>
            <input onChange={e => setValue(e.target.value)} id="files" accept="image/*" type="file" hidden />
          </span>
          to ask questions about.
        </p>
        <p>What do you want to know about the image?
          <button className="surprise" onClick={surprise} disabled={response}>Surprise me</button>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="What is in the image..."
            onChange={""}
          />
          {(!response && !error) && <button onClick={""}>Ask me</button>}
          {(response || error) && <button onClick={clear}>Clear</button>}
        </div>
        {error && <p>{""}</p>}
        {response && <p className="answer">{""}</p>}
      </section>
    </div>
  )
}

export default App
