<?php
session_start();

$correct_login = "Sanik";
$correct_password = "sania1238";

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit();
}

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['password'];

    if ($login === $correct_login && $password === $correct_password) {
        $_SESSION['user'] = $login;
    } else {
        $message = "Неправильний логін або пароль!";
    }
}

$ip = "12.432.1.678";
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Авторизація</title>
</head>
<body>

<h2>Простий логін PHP</h2>

<p>Ваш IP: <?php echo $ip; ?></p>

<?php if (isset($_SESSION['user'])): ?>

    <h3>Вітаю, <?php echo $_SESSION['user']; ?>!</h3>

    <a href="?logout=1">
        <button>Вийти</button>
    </a>

<?php else: ?>

    <form method="post">
        <input type="text" name="login" placeholder="Логін" required><br><br>

        <input type="password" name="password" placeholder="Пароль" required><br><br>

        <button type="submit">Увійти</button>
    </form>

    <p><?php echo $message; ?></p>

<?php endif; ?>

</body>
</html>
//https://saniaaaaa.rf.gd/
