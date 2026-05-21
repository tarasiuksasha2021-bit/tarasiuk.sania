import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <StudentCard
        firstName="Влад"
        lastName="Радчук"
        group="ІТ-22"
      />

      <StudentCard
        firstName="Анастасія"
        lastName="Бугай"
        group="P-22"
      />

      <StudentCard
        firstName="Тимофій"
        lastName="Бондар"
        group="ІТ-22"
      />

      <Footer />
    </div>
  );
}

export default App;