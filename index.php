<?php

$users = [
    ["name" => "Саша", "age" => 17, "email" => "sasha17@test.com"],
    ["name" => "Влад", "age" => 15, "email" => "vlad22@test.com"],
    ["name" => "Рома", "age" => 25, "email" => "roma32@test.com"],
    ["name" => "Настя", "age" => 18, "email" => "nastya11@test.com"],
    ["name" => "Іра", "age" => 16, "email" => "ira21@test.com"],
    ["name" => "Тимофій", "age" => 30, "email" => "tima66@test.com"],
    ["name" => "Максим", "age" => 22, "email" => "max28@test.com"],
    ["name" => "Міша", "age" => 18, "email" => "misha278@test.com"],
    ["name" => "Олексій", "age" => 11, "email" => "olexii99@test.com"],
    ["name" => "Макр", "age" => 21, "email" => "makr33@test.com"],
];

function filterAdults($users) {
    return array_filter($users, fn($u) => $u["age"] >= 18);
}

function compareByNameLength($a, $b) {
    return strlen($a["name"]) <=> strlen($b["name"]);
}

$adults = filterAdults($users);
usort($adults, "compareByNameLength");

?>

<table border="1">
<tr><th>Name</th><th>Age</th><th>Email</th></tr>

<?php foreach ($adults as $user): ?>
<tr>
    <td><?= $user["name"] ?></td>
    <td><?= $user["age"] ?></td>
    <td><?= $user["email"] ?></td>
</tr>
<?php endforeach; ?>

</table>