import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const BooksHomepage = lazy(() => import("./pages/BooksHomepage"));
const BookDetail = lazy(() => import("./components/BookDetail"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<BooksHomepage />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
