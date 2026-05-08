<?php

header("Content-Type: application/json");

$file = "tasks.json";

if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

$tasks = json_decode(file_get_contents($file), true);

$method = $_SERVER['REQUEST_METHOD'];


$path = trim($_SERVER['REQUEST_URI'], '/');
$pathParts = explode('/', $path);

if ($pathParts[0] !== 'tasks') {

    http_response_code(404);

    echo json_encode([
        "message" => "Route not found"
    ]);

    exit;
}


$id = $pathParts[1] ?? null;


if ($method === 'GET') {

    if ($id !== null) {

        foreach ($tasks as $task) {

            if ($task['id'] == $id) {

                echo json_encode($task, JSON_PRETTY_PRINT);
                exit;
            }
        }

        http_response_code(404);

        echo json_encode([
            "message" => "Task not found"
        ]);

        exit;
    }

    echo json_encode($tasks, JSON_PRETTY_PRINT);
    exit;
}

if ($method === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    
    if (
        !isset($data['task']) ||
        empty(trim($data['task']))
    ) {

        http_response_code(400);

        echo json_encode([
            "message" => "Task field is required"
        ]);

        exit;
    }

 
    $newId = 1;

    if (!empty($tasks)) {

        $ids = array_column($tasks, 'id');
        $newId = max($ids) + 1;
    }

   
    $newTask = [
        "id" => $newId,
        "task" => $data['task'],
        "completed" => false
    ];

    $tasks[] = $newTask;

    file_put_contents(
        $file,
        json_encode($tasks, JSON_PRETTY_PRINT)
    );

    http_response_code(201);

    echo json_encode([
        "message" => "Task created",
        "task" => $newTask
    ]);

    exit;
}

if ($method === 'PUT') {

    if ($id === null) {

        http_response_code(400);

        echo json_encode([
            "message" => "Task ID is required"
        ]);

        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $found = false;

    foreach ($tasks as &$task) {

        if ($task['id'] == $id) {

            
            if (isset($data['task'])) {
                $task['task'] = $data['task'];
            }

            
            if (isset($data['completed'])) {
                $task['completed'] = (bool)$data['completed'];
            }

            $found = true;
            break;
        }
    }

  
    if (!$found) {

        http_response_code(404);

        echo json_encode([
            "message" => "Task not found"
        ]);

        exit;
    }


    file_put_contents(
        $file,
        json_encode($tasks, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "message" => "Task updated"
    ]);

    exit;
}

if ($method === 'DELETE') {

    if ($id === null) {

        http_response_code(400);

        echo json_encode([
            "message" => "Task ID is required"
        ]);

        exit;
    }

    $found = false;

    foreach ($tasks as $index => $task) {

        if ($task['id'] == $id) {

            unset($tasks[$index]);

            $found = true;
            break;
        }
    }

   
    if (!$found) {

        http_response_code(404);

        echo json_encode([
            "message" => "Task not found"
        ]);

        exit;
    }

    $tasks = array_values($tasks);

    
    file_put_contents(
        $file,
        json_encode($tasks, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "message" => "Task deleted"
    ]);

    exit;
}

http_response_code(405);

echo json_encode([
    "message" => "Method not allowed"
]);

?>