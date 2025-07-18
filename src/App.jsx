import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MenuPage from "./components/MenuPage"
import SignatureDishes from "./components/SignatureDishes"
import ReservationForm from "./components/ReservationForm"
import FeedbackForm from "./components/FeedbackForm"
import Chatbot from "./components/Chatbot"

export default function App() {
  return (
    <Router>
     
        <Routes>
          <Route
            path="/"
            element={
              <main>
            
                <SignatureDishes />
                <ReservationForm />
                <FeedbackForm />
                <Chatbot />
              </main>
            }
          />
          <Route path="/menu/:category" element={<MenuPage />} />
        </Routes>
       
    </Router>
  )
}
