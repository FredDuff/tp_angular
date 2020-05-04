<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


$dbh = new PDO('mysql:dbname=familytweet;host=127.0.0.1', 'root', 'root');
$sth = $dbh->prepare("SELECT * FROM tw");
$sth->execute();

header('Content-type: application/json');
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
