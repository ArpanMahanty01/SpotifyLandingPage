import Homepage from './pages/Homepage'
import "./fonts/CircularSpotifyText-Medium.otf"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}
 
export default App;
