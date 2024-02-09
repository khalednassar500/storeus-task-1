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

      <footer>
        Made With Love By <i>"Khaled Nassar"</i>
      </footer>
    </div>
  );
}

export default App;
