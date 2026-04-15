<?php
// 1. Ім’я, прізвище та вік

$first_name = "Саша";
$last_name = "Тарасюк";
$year_of_birth = 2009;

// поточний рік
$current_year = date("Y");

// обчислення віку
$age = $current_year - $year_of_birth;

// повне ім’я
$full_name = $first_name . " " . $last_name;

echo "Повне ім'я: $full_name<br>";
echo "Вік: $age<br>";


// 2. Масив країн

$countries = ["Україна", "Польща", "Німеччина", "Франція"];

// нумерований список
foreach ($countries as $index => $country) {
    echo ($index + 1) . ". " . $country . "<br>";
}


// 3. Міста і населення

$cities = [
    "Київ" => 3000000,
    "Львів" => 700000,
    "Харків" => 1400000,
    "Одеса" => 1000000
];

// міста з населенням > 1 млн
foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo "Місто: $city, Населення: $population<br>";
    }
}


// 4. Парне або непарне число

$number = 8;

if ($number % 2 == 0) {
    echo "Парне<br>";
} else {
    echo "Непарне<br>";
}


// 5. Перевірка високосного року

$year = date("Y");

// перевірка кратності 4
if ($year % 4 == 0) {
    echo "Це високосний рік ($year)<br>";
} else {
    echo "Це не високосний рік ($year)<br>";
}
?>