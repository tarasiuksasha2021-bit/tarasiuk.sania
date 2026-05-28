function RegisterForm({ user, setUser, clearForm }) {

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Введіть ім’я"
        value={user.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Введіть email"
        value={user.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Введіть вік"
        value={user.age}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={clearForm}>
        Очистити
      </button>
    </div>
  );
}

export default RegisterForm;