<?php

header('Content-Type: application/json');

$out = [];
foreach (glob('assets/reqs/*.json') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>
