
  import { useState } from "react"

  export default function Form({getRandomGiphy}) {
  
      const [formState, setFormState] = useState({
          randomGiphy: " "
      })
  
      const handleSubmit = (event) => {
          event.preventDefault()
          getRandomGiphy(formState.randomGiphy)

          setFormState({
              randomGiphy: " "
          })
      }
      return (
          <div>
              <h1 className="title">Get Random Giphy</h1>
              <form onSubmit={handleSubmit}>
                  <button type="submit">Get Random Giphy</button>
              </form>
          </div>
      )
  }
  
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 