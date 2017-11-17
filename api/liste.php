<?php
  session_start();

  header("content-type: application/json");
  // Vérifier si en $_SESSION["todos"] est bien un tableau
  if(is_array($_SESSION["todos"]))
  {
    echo json_encode($_SESSION["todos"]);
  }
  else
  {
    echo json_encode(array());
  }
?>