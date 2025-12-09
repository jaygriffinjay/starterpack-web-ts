import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAvailableRoutes } from './routes';

function App() {
  const availableRoutes = getAvailableRoutes();
  
  return (
    <BrowserRouter>
      <Routes>
        {availableRoutes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;