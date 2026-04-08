<?php
$db = new mysqli('localhost', 'rsclimoc_wp1', 'H.Uxlco3gyQDlE85TdW79', 'rsclimoc_wp1');
if ($db->connect_error) { die("Connect error: " . $db->connect_error . "\n"); }

$result = $db->query("SELECT meta_value FROM wp_postmeta WHERE post_id=102 AND meta_key='_elementor_data'");
$row = $result->fetch_assoc();
$data = json_decode($row['meta_value'], true);
if (!$data) { die("JSON decode failed\n"); }

function findWidget($elements, $id) {
    foreach ($elements as $el) {
        if (isset($el['id']) && $el['id'] === $id) return $el;
        if (!empty($el['elements'])) {
            $found = findWidget($el['elements'], $id);
            if ($found) return $found;
        }
    }
    return null;
}

$w = findWidget($data, 'fbc780f');
if ($w) {
    echo "link_to: " . ($w['settings']['link_to'] ?? 'NOT SET') . "\n";
    echo "url:     " . ($w['settings']['link']['url'] ?? 'NOT SET') . "\n";
} else {
    echo "Widget fbc780f NOT FOUND\n";
}
