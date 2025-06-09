<<<<<<< HEAD
<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "civil_registry";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

=======
<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "civil_registry";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

>>>>>>> 47a295e805416a653b35b7079293e44ba9a7d251
?>