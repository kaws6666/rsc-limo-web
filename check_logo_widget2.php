<?php
$db = new mysqli('localhost', 'rsclimoc_wp1', 'H.Uxlco3gyQDlE85TdW79', 'rsclimoc_wp1');
if ($db->connect_error) { die("Connect error: " . $db->connect_error . "\n"); }

$result = $db->query("SELECT meta_value FROM wp_postmeta WHERE post_id=102 AND meta_key='_elementor_data'");
$row = $result->fetch_assoc();
$data = json_decode($row['meta_value'], true);

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

$w = findWidget($data, '2e24017');
echo json_encode($w['settings'], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
