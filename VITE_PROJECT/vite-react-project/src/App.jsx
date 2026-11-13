import "./App.css";

function App() {
  return (
    <main className="app">
      <div className="card">
        <h1>Vite + React</h1>

        <p>
          Welcome to your React project.
        </p>

        <button
          onClick={() => alert("Hello from Vite + React!")}
        >
          Click Me
        </button>
      </div>
    </main>
  );
}

export default App;