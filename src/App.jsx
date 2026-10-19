import './App.css';
import Header from './components/Layout/Header';
import Books from './components/Books/Books';

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <Books />
      </main>
    </div>
  );
}

export default App;