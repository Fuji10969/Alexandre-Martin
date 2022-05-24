<?php
/*=====================================================
desc : Apprendre à se connecter à la BDD pdo via la PDO ( php data object )
PDO : interface d'abstraction pour accéder de manière uniforme aux BDD
======================================================*/
// Déclaration de 3 variables :
// dsn : data source name : elle définit le driver du système SGBD auquel on veut accéder : syntaxe :
//$dsn='mysql:host=*;dbname=*';

// instanciation d'un objet PDO
try {
	$db= new PDO('mysql:=localhost;dbname=basefleur2;charset=utf8', 'root', 'root', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//forcer utf8
	$db->exec('SET NAMES utf8');
} catch (PDOException $e) {
	echo "erreur de connection " . $e->getMessage();
}