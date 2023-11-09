import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import PageRoutes from './PageRoutes/PageRoutes';

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
