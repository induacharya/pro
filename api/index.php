<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


header("Access-Control-Allow-Origin: *");
header("Content-Type: undefined");
header("Access-Control-Allow-Headers: accept,authorization, content-type");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

require 'vendor/autoload.php';
require 'phpmailer/PHPMailerAutoload.php';
$app = new Slim\App();


$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Origin,Authorization,process-data');
});




require './api/utils.php';
require './api/dbHandler.php';
require './api/user.php';
require './api/dbConnect.php';
//require './api/studentRegistration.php';
require './api/subject.php';
//require './api/class.php';
$app->run();
