import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBackground from "./components/AppBackground";
import Header from "./components/header";
import TakeQuizForm from "./pages/TakeQuizForm";
import QuizScreen from "./pages/QuizScreen";
function App() {
  return (
    <div>
      <AppBackground>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TakeQuiz" element={<TakeQuizForm />} />
          <Route path="/Quiz" element={<QuizScreen />} />
        </Routes>
      </AppBackground>

    </div>
  );
}

export default App;
