import { LayoutMain } from './layout/layoutMain'
import './App.css'

function App() {

  return (
    <LayoutMain>
      <div className="content">
        <h1>Welcome to the App</h1>
        <p>This is the main content area.</p>
      </div>
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </LayoutMain>
  )
}

export default App
