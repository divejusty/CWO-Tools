<?php
/**
 * Simple reflexive utility for echoing stored json files as json data.
 */

require_once('Utils.php');

$out = [];
foreach (glob('assets/reqs/*.json') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}

Utils::response($out);
