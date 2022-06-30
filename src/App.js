import { Route, Routes, BrowserRouter   } from 'react-router-dom';
import Home from './Pages/Home';
import IndividualPage from './Pages/IndividualPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="individualPage" element={<IndividualPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
