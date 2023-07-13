function App(props) {
  const currentDate = new Date();

  return (
    <>
      <h1>Hello, World!</h1>
      <h2>
        Today is {currentDate.toLocaleDateString()} and time
        {currentDate.toLocaleTimeString()}
      </h2>
    </>
  );
}

export default App;
