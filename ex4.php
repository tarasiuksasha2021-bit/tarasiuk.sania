<?php
// 1. Пошук максимуму і мінімуму

$a = 15;
$b = 8;

// перевірка умовним оператором
if ($a > $b) {
    $max = $a;
    $min = $b;
} else {
    $max = $b;
    $min = $a;
}

echo "Максимум: $max<br>";
echo "Мінімум: $min<br>";


// 2. Масив чисел і середнє арифметичне

$numbers = [10, 20, 30, 40, 50];

$sum = 0;
$count = count($numbers);

// обчислення суми
foreach ($numbers as $num) {
    $sum += $num;
}

$average = $sum / $count;

echo "Середнє арифметичне: $average<br>";


// 3. Студенти і фільтр за балом > 80

$students = [
    "Марк Петренко" => 85,
    "Олена Коваль" => 78,
    "Діма Шевченко" => 92
];

foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo "Студент: $name, Бал: $grade<br>";
    }
}


// 4. Перевірка кратності числа

$num = 12;

if ($num % 3 == 0 || $num % 5 == 0) {
    echo "Число $num кратне 3 або 5<br>";
} else {
    echo "Число $num не кратне 3 або 5<br>";
}


// 5. Таблиця множення для 7

for ($i = 1; $i <= 10; $i++) {
    $result = 7 * $i;
    echo "7 x $i = $result<br>";
}
?>