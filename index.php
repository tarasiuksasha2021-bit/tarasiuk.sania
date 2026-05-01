<?php
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST["login"] ?? "";
    $password = $_POST["password"] ?? "";
    $confirm_password = $_POST["confirm_password"] ?? "";

    $login = filter_var($login, FILTER_SANITIZE_SPECIAL_CHARS);

    if (!preg_match("/^[a-zA-Z0-9]+$/", $login)) {
        $message = "❌ Логін не повинен містити спецсимволів!";
    } elseif ($password !== $confirm_password) {
        $message = "❌ Паролі не співпадають!";
    } elseif (!filter_var($login, FILTER_VALIDATE_REGEXP, [
        "options" => ["regexp" => "/^[a-zA-Z0-9]{3,20}$/"]
    ])) {
        $message = "❌ Логін має бути від 3 до 20 символів!";
    } else {
        $message = "✅ Реєстрація успішна!";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>

<form method="post">
    <input type="text" name="login" required>
    <input type="password" name="password" required>
    <input type="password" name="confirm_password" required>
    <button type="submit">OK</button>
</form>

<p><?php echo $message; ?></p>

</body>
</html>