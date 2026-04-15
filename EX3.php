<?php
// 1. Вартість 3 товарів та загальна сума

$product1 = 200; // ціна першого товару
$product2 = 150; // ціна другого товару
$product3 = 250; // ціна третього товару

$total = $product1 + $product2 + $product3; // загальна сума

echo "Загальна вартість: $total грн<br>";


// 2. Масив улюблених фільмів

$movies = ["Каю", "Маша і Медведь", "Одного разу під Полтавою", "Один дома" ];

// вивід через foreach
foreach ($movies as $movie) {
    echo "Фільм: $movie<br>";
}


// 3. Асоціативний масив користувача

$user = [
    "login" => "admin",
    "password" => "12345",
    "email" => "admin@example.com"
];

// вивід значень
foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}


// 4. Знижка 10% якщо сума > 500 грн

if ($total > 500) {
    $discount = $total * 0.10; // 10% знижки
    $final_price = $total - $discount; // підсумкова сума
    echo "Знижка: $discount грн<br>";
    echo "Сума зі знижкою: $final_price грн<br>";
} else {
    echo "Знижка не надається<br>";
}


// 5. Перевірка логіна і пароля

$input_login = "admin"; // введений логін
$input_password = "12345"; // введений пароль

// перевірка
if ($input_login === $user["login"] && $input_password === $user["password"]) {
    echo "Вхід успішний";
} else {
    echo "Невірний логін або пароль";
}
?>