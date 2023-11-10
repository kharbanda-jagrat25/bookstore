import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import PageRoutes from './routes/PageRoutes';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
