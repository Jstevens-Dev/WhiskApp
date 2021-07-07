import './App.css';


// This is not JS! This is JSX:
function App() {
  const hello = 1;

  return (
    <h1 className="App">Hello World {hello}</h1>
  );
}

// Could also disply the same thing with this statement:
// const App = () => <h1  className="App">Hello World {hello}</h1>;

export default App;
