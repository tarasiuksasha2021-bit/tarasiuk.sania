<?php
session_start();

if (!empty($_SESSION['name']) && !empty($_SESSION['email'])) {
    header("Location: profile.php");
    exit;
}

header("Location: register.php");
exit;