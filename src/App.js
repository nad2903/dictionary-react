import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        <a href="https://github.com/nad2903/dictionary-react" target="_blank" rel="noreferrer">Open-source code</a>, by Nadia Scharnhorst
      </footer>
    </div>
  );
}
