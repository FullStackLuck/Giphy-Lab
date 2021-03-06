import Form from './components/Form';
import { useState } from 'react';
import GiphDisplay from './components/GiphDisplay';



function App() {

  const API_KEY ="E4sWwCkJvF9hUiGZ6D6KOgK9fsHbDBtF"
  const [giphy,setGiphy ]=useState(null)

  const getRandomGiphy = async (randomGiphy) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&${randomGiphy}`)

    const data = await response.json()

    setGiphy(data)

  }
  return (
    <div className="App">
      <Form getRandomGiphy={getRandomGiphy} />
      <GiphDisplay giphy={giphy}/>
    </div>
  );
}

export default App;
