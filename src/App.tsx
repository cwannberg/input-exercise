


import './App.css'

function App() {

  return (
    <>
      <section className="site">
        <h1>Formulär</h1>
        <main className="main-section">
          <form>
            
            <label>
              <p>Namn:</p>
              <input type="text"/>
              <div></div>
            </label>

            <label>
              <p>Adress:</p>
              <input type="text"/>
              <div></div>
            </label>

            <label>
              <p>Telefonnummer:</p>
              <input type="text"/>
              <div></div>
            </label>

            <button type="submit">Tryck</button>

          </form>

        </main>
      </section>
    </>
  )
}

export default App
