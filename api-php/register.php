<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['email']) && isset($_POST['pwd'])) {
    $dbh = new PDO('mysql:dbname=familytweet;host=127.0.0.1', 'root', 'root');

    $sth = $dbh->prepare("INSERT INTO user (id, email, pwd) VALUES (null, :email, :pwd)");

    $sth->execute(array(
        'email' => $_POST['email'],
        'pwd' => $_POST['pwd']
    ));

    header('Content-type: application/json');

    echo json_encode(array(
        'message' => 'Utilisateur bien créé !'
    ));
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}