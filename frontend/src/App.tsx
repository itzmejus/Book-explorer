import BookDetail from './components/BookDetail';
import BooksHomepage from './components/BooksHomepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksHomepage />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  )
}

export default App
