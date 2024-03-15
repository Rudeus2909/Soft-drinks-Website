<?php
include('config/connectdb.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare('SELECT * FROM pet.taikhoan WHERE username=:username AND password=:password');
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
    $count = $stmt->rowCount();
    if ($count > 0){
        $row = $stmt->fetch();
        if($row["role"]=="admin"){
            header("Location: admin.php");
        }
        elseif($row["role"]=="user"){
            header("Location: user.php");
            exit;
        }
    } else {
        echo "Thông tin đăng nhập không chính xác";
    }
}