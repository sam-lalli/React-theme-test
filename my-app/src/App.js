import './App.css';
import "styled-components"
import Boxes from "./Boxes"

// Theme within styled components
// Step 1. install styled components
// Step 2. create theme folder, named index.js
// Step 3. import ThemeProvider in your index.js---see index.js
// Step 4. in your styled component reference theme ex ${props => props.theme.*styleFromTheme*}---- see Boxes.js


function App() {
  return (
    <div className="App">
      <Boxes/>
    </div>
  );
}

export default App;
