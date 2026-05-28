function UserPreview({ user }) {
  return (
    <div>
      <h2>Попередній перегляд</h2>

      <p>
        Ім’я:
        {' '}
        {user.name || 'Поле не заповнене'}
      </p>

      <p>
        Email:
        {' '}
        {user.email || 'Поле не заповнене'}
      </p>

      <p>
        Вік:
        {' '}
        {user.age || 'Поле не заповнене'}
      </p>
    </div>
  );
}

export default UserPreview;