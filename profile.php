<?php
session_start();

if (empty($_SESSION['name']) || empty($_SESSION['email'])) {
    header("Location: register.php");
    exit;
}

$name = htmlspecialchars($_SESSION['name']);
$email = htmlspecialchars($_SESSION['email']);

$cookieEmail = isset($_COOKIE['email']) 
    ? htmlspecialchars($_COOKIE['email']) 
    : "немає даних";
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Профіль</title>
</head>
<body>
    <h2>Профіль користувача</h2>

    <p><strong>Ім’я:</strong> <?php echo $name; ?></p>
    <p><strong>Email:</strong> <?php echo $email; ?></p>

    <p>Ваш email запам’ятали: <?php echo $cookieEmail; ?></p>

    <br>
    <a href="logout.php">Вийти</a>
</body>
</html>