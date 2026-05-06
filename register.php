<?php
session_start();

if (!empty($_SESSION['name']) && !empty($_SESSION['email'])) {
    header("Location: profile.php");
    exit;
}

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($name === '' || $email === '' || $password === '') {
        $error = "Заповніть всі поля!";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Невірний email!";
    } else {
        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;

        setcookie("email", $email, time() + (7 * 24 * 60 * 60), "/");

        header("Location: profile.php");
        exit;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>
    <h2>Реєстрація</h2>

    <?php if ($error): ?>
        <p style="color:red;"><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="post">
        <label>Ім’я:</label><br>
        <input type="text" name="name" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Пароль:</label><br>
        <input type="password" name="password" required><br><br>

        <button type="submit">Зареєструватися</button>
    </form>
</body>
</html>