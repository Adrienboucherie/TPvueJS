<?php
session_start();

/*
 * Mark task as done
 */

$retour = false;
$id = isset($_GET["id"])?$_GET["id"]:"";

// todo in parameters ?
if($id != "")
{
  // If todo exist in session.
  if (array_key_exists($id, $_SESSION["todos"]))
  {
    // Mark as done.
    $_SESSION["todos"][$id]["termine"] = true;
    $retour = true;
  }
}

// Redirect
echo json_encode(array("success" => $retour));
?>