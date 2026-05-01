<?php
$message = "";

$products = [
    "phone" => ["name" => "Телефон", "price" => 10000],
    "laptop" => ["name" => "Ноутбук", "price" => 25000],
    "tablet" => ["name" => "Планшет", "price" => 15000]
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
    $product = $_POST["product"] ?? "";
    $quantity = filter_var($_POST["quantity"] ?? "", FILTER_VALIDATE_INT);

    if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "❌ Невірні дані";
    } elseif (!isset($products[$product])) {
        $message = "❌ Оберіть товар";
    } elseif ($quantity === false || $quantity < 1 || $quantity > 100) {
        $message = "❌ Кількість від 1 до 100";
    } else {
        $total = $products[$product]["price"] * $quantity;
        $safe_name = htmlspecialchars($name);
        $safe_email = htmlspecialchars($email);
        $safe_product = htmlspecialchars($products[$product]["name"]);

        $message = "✅ Замовлення оформлено:<br>
        Ім’я: $safe_name <br>
        Email: $safe_email <br>
        Товар: $safe_product <br>
        Кількість: $quantity <br>
        Сума: $total грн";
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Замовлення</title>
</head>
<body>

<form method="post">
    <input type="text" name="name" placeholder="Ім’я" required>
    <input type="email" name="email" placeholder="Email" required>

    <select name="product" required>
        <option value="">Оберіть товар</option>
        <option value="phone">Телефон</option>
        <option value="laptop">Ноутбук</option>
        <option value="tablet">Планшет</option>
    </select>

    <input type="number" name="quantity" min="1" max="100" required>

    <button type="submit">Замовити</button>
</form>

<p><?php echo $message; ?></p>

</body>
</html>