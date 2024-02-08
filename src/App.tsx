import UserContainer from "./components/UserContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="app_header">
        <h1>Welcome, StoreUs Team!</h1>
      </header>

      <main className="app_main">
        <UserContainer />
      </main>
    </div>
  );
}

export default App;
