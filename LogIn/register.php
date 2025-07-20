<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);
    
    if ($stmt->execute()) {
        echo "Registered successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Register</title>
</head>
<body>
  <form method="POST" action="">
    <input type="text" name="username" placeholder="Create username" required>
    <input type="password" name="password" placeholder="Create password" required>
    <button type="submit">Register</button>
  </form>
</body>
</html>
