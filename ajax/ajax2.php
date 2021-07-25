<?php
$data = [
	'key1' =>'value1',
	'key2' => 'value1',
];

header("Content-Type: application/json; charset=utf-8");
echo json_encode($data);