<?php
// 1. Оголошення змінних та арифметичні операції

$a = 5;
$b = 10;

// обчислення
$sum = $a + $b; // сума
$diff = $a - $b; // різниця
$mult = $a * $b; // добуток
$div = $a / $b; // ділення

// вивід результатів
echo "Сума: $sum<br>";
echo "Різниця: $diff<br>";
echo "Добуток: $mult<br>";
echo "Ділення: $div<br>";


// 2. Масив днів тижня

$days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// вивід 3-го і 5-го дня (індекси 2 і 4)
echo "3-й день: " . $days[2] . "<br>";
echo "5-й день: " . $days[4] . "<br>";


// 3. Асоціативний масив товарів

$products = [
    "Хліб" => 25,
    "Молоко" => 40,
    "Сир" => 120
];

// вивід товарів
foreach ($products as $name => $price) {
    echo "Товар: $name, Ціна: $price грн<br>";
}


// 4. Використання switch

$day = "Monday"; // можна змінити значення

switch ($day) {
    case "Monday":
        echo "Сьогодні понеділок<br>";
        break;
    case "Tuesday":
        echo "Сьогодні вівторок<br>";
        break;
    case "Wednesday":
        echo "Сьогодні середа<br>";
        break;
    case "Thursday":
        echo "Сьогодні четвер<br>";
        break;
    case "Friday":
        echo "Сьогодні п'ятниця<br>";
        break;
    case "Saturday":
        echo "Сьогодні субота<br>";
        break;
    case "Sunday":
        echo "Сьогодні неділя<br>";
        break;
    default:
        echo "Невідомий день<br>";
}


// 5. Перевірка числа на парність

$x = 15;

if ($x % 2 == 0) {
    echo "Число $x — парне";
} else {
    echo "Число $x — непарне";
}
?>