<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, Accept, X-Requested-With, Content-Type");

if (isset($_POST['message'])) {
    $dbh = new PDO('mysql:dbname=familytweet;host=127.0.0.1', 'root', 'root');
    $sth = $dbh->prepare("INSERT INTO tw (id, message, user_id) VALUES (null, :message, :user_id)");

    $sth->execute(array(
        'message' => $_POST['message'],
        'user_id'   => $_POST['user_id']
    ));

    header('Content-type: application/json');

    $sth = $dbh->prepare("SELECT * FROM tw");
    $sth->execute();
    echo json_encode($sth->fetchAll());
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}