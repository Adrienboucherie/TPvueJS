<?php
session_start();
header("content-type: application/json");

// Dans le cadre du traitement, vérifier si $_SESSION["todos"] est bien un tableau (is_array…)
if(!is_array($_SESSION["todos"]))
{
  $_SESSION["todos"] = array();
}

if(isset($_POST["texte"]) && $_POST["texte"] != "")
{
	$todo = array("id" => uniqid(), "texte" => $_POST["texte"], "date" => time(), "termine" => false);
	// Sauvegarder dans la Session.
	$_SESSION["todos"][$todo["id"]] = $todo;
	// Afficher un JSON
	echo json_encode(array("success" => true));
}
else
{
	// Ne pas afficher un JSON
	echo json_encode(array("success" => false));
}
?>