import './App.css';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href={link} >Google Site</a>
        <p>{Math.floor(Math.random()*20)}</p>
      </div>
    </div>
  );
}

export default App;
