<?php
$postdata = file_get_contents("php://input");
// echo $postdata;
$file = file_put_contents("results.json", $postdata);
// echo $file;