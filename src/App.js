import { useState } from 'react';
import './App.css';

function App() {

  const [nameValue, setNameValue] = useState('')
  function handleNameChange(e) {
    let inputValue = e.target.value.replace(/\./g, '')
    setNameValue(inputValue.toString().toUpperCase())

  }
  const [isPredicting, setIsPredicting] = useState(false)
  const [predictingText, setPredictingText] = useState('')
  const [predict, setPredict] = useState(undefined)
  function handlePredict() {
    if (nameValue && nameValue.length > 0) {
      setIsPredicting(true)
      setPredict(Math.random() < 0.5)
      setPredictingText('Accessing Janga..')
      setTimeout(() => {
        setPredictingText('Doing some AI stuff..')
        setTimeout(() => {
          setPredictingText('Parsing websites..')
          setTimeout(() => {
            setPredictingText('Learning python..')
            setTimeout(() => {
              setPredictingText('Using some great math..')
              setTimeout(() => {
                setIsPredicting(false)
                setPredictingText('')
                setNameValue('')
              }, 1400);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);


    }

  }

  return (
    <div className="app">
      <p className="app__title">Write stock ticker</p>
      <input autoComplete='off' className='app__input' placeholder="Ticker" name="name" type="text" value={nameValue} onChange={handleNameChange} minLength="0" maxLength="20"></input>
      {isPredicting ? <></> :
        <div className={`app__btn ${nameValue && nameValue.length > 0 ? 'app__btn_active' : ''}`} onClick={handlePredict}>
          <p className={`app__btn-text`}>Predict</p>
        </div>}
      {predictingText ? <p className={`app__pred-text`}>{predictingText}</p> : <></>}
      {isPredicting ? <svg  className={`app_indicator ${predict ? 'app_indicator_plus' : predict !== undefined  ? 'app_indicator_minus' : ''}`} width="242" height="242" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`app_indicator-fill ${predict ? 'app_indicator-fill_plus' : predict !== undefined  ? 'app_indicator-fill_minus' : ''}`} d="M109.417 59.1673C115.462 51.9697 126.538 51.9697 132.583 59.1673L204.919 145.304C213.183 155.145 206.187 170.156 193.336 170.156H48.6636C35.8131 170.156 28.817 155.145 37.081 145.304L109.417 59.1673Z" fill="white"  />
      </svg> : <></>}
      {isPredicting ? <></> : predict? <p className={`app__pred-text app__pred-text_up`}>UP</p> : predict !== undefined ?  <p className={`app__pred-text app__pred-text_down`}>Down</p> : <></> }

    </div>
  );
}

export default App;
