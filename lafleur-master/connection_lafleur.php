<?php
/*=====================================================
auteur : jp
date : 23 / 01 / 2020
desc : Apprendre à se connecter à la BDD pdo via la PDO ( php data object )
PDO : interface d'abstraction pour accéder de manière uniforme aux BDD
======================================================*/
// Déclaration de 3 variables :
// dsn : data source name : elle définit le driver du système SGBD auquel on veut accéder : syntaxe :
//$dsn='mysql:host=*;dbname=*';

// $dsn = 'mysql:host=alexadhfuji10969.mysql.db;dbname=alexadhfuji10969';
// $user='alexadhfuji10969';
// $pass='4L3x0105';

// instanciation d'un objet PDO
try {
	$db = new PDO('mysql:host=alexadhfuji10969.mysql.db;port=21;dbname=alexadhfuji10969', 'alexadhfuji10969', '4L3x0105');
	//echo "vous etes connecté à : jpglocal2019";
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//forcer utf8
	$db->exec('SET NAMES utf8');
} catch (PDOException $e) {
	echo "erreur de connection " . $e->getMessage();
}