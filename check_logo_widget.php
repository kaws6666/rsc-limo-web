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

// Check both logo widgets
foreach (['2e24017', 'fbc780f', '35e7c38'] as $id) {
    $w = findWidget($data, $id);
    if ($w) {
        echo "=== $id (type: " . ($w['elType'] ?? '?') . " / " . ($w['widgetType'] ?? '') . ") ===\n";
        $settings = $w['settings'] ?? [];
        // Show size-related settings
        $sizeKeys = ['image_size', 'width', 'height', 'max_width', 'custom_dimension', 'image_custom_dimension'];
        foreach ($sizeKeys as $k) {
            if (isset($settings[$k])) {
                echo "  $k: " . json_encode($settings[$k]) . "\n";
            }
        }
        // Show all settings keys
        echo "  all keys: " . implode(', ', array_keys($settings)) . "\n";
    } else {
        echo "=== $id NOT FOUND ===\n";
    }
    echo "\n";
}
