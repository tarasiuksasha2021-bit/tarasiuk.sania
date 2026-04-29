<?php

$transactions = [
    ["amount" => 100, "type" => "in",  "date" => "2026-04-01"],
    ["amount" => 50,  "type" => "out", "date" => "2026-04-02"],
    ["amount" => 75,  "type" => "out", "date" => "2026-04-03"],
    ["amount" => 200, "type" => "in",  "date" => "2026-04-04"],
    ["amount" => 30,  "type" => "out", "date" => "2026-04-05"],
];

#[Attribute]
class LogTransactionType {
    public function __construct(public string $type) {}
}

function logAttribute(string $functionName): void {
    $reflection = new ReflectionFunction($functionName);
    $attributes = $reflection->getAttributes(LogTransactionType::class);

    foreach ($attributes as $attr) {
        $instance = $attr->newInstance();
        file_put_contents(
            __DIR__ . "/log.txt",
            sprintf("[%s] %s type: %s\n", date("Y-m-d H:i:s"), $functionName, $instance->type),
            FILE_APPEND
        );
    }
}

#[LogTransactionType("out")]
function isOutgoing(array $transaction): bool {
    logAttribute(__FUNCTION__);
    return $transaction["type"] === "out";
}

function calculateTotal(array $transactions, callable $filter): float {
    return array_reduce(
        array_filter($transactions, $filter),
        fn($sum, $t) => $sum + $t["amount"],
        0
    );
}

$totalOutgoing = calculateTotal($transactions, 'isOutgoing');

echo $totalOutgoing;