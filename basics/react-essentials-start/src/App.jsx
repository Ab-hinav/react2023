const desc = ['Core' , 'Main' ,'Essential'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}


function App() {
  return (
    <div>
      <Header data={desc[getRandomInt(2)]}/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default App;
