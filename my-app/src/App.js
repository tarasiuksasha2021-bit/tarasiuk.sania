import { useEffect, useState } from 'react';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import UserPreview from './components/UserPreview';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  // Оновлення title сторінки
  useEffect(() => {
    if (user.name) {
      document.title = user.name;
    } else {
      document.title = 'React App';
    }
  }, [user.name]);

  // Очистити форму
  const clearForm = () => {
    setUser({
      name: '',
      email: '',
      age: ''
    });
  };

  return (
    <div className="App">
      <Header />

      <RegisterForm
        user={user}
        setUser={setUser}
        clearForm={clearForm}
      />

      <UserPreview user={user} />
    </div>
  );
}

export default App;