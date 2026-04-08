<?php
$db = new mysqli('localhost', 'rsclimoc_wp1', 'H.Uxlco3gyQDlE85TdW79', 'rsclimoc_wp1');
if ($db->connect_error) { die("Connect error: " . $db->connect_error . "\n"); }

$result = $db->query("SELECT meta_value FROM wp_postmeta WHERE post_id=102 AND meta_key='_elementor_data'");
$row = $result->fetch_assoc();
$data = json_decode($row['meta_value'], true);
if (!$data) { die("JSON decode failed\n"); }

function findAndUpdateWidget(&$elements, $id, $settings_patch) {
    foreach ($elements as &$el) {
        if (isset($el['id']) && $el['id'] === $id) {
            foreach ($settings_patch as $k => $v) {
                $el['settings'][$k] = $v;
            }
            // Debug: show all settings keys
            echo "Widget found. Settings keys: " . implode(', ', array_keys($el['settings'])) . "\n";
            return true;
        }
        if (!empty($el['elements'])) {
            if (findAndUpdateWidget($el['elements'], $id, $settings_patch)) return true;
        }
    }
    return false;
}

// Elementor Image widget: link_to must be 'custom' for the URL to render
$patch = [
    'link_to' => 'custom',
    'link' => [
        'url'               => 'https://www.rsclimo.com.sg/',
        'is_external'       => '',
        'nofollow'          => '',
        'custom_attributes' => ''
    ]
];

$found = findAndUpdateWidget($data, 'fbc780f', $patch);

if ($found) {
    $new_json = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    $escaped  = $db->real_escape_string($new_json);
    $db->query("UPDATE wp_postmeta SET meta_value='$escaped' WHERE post_id=102 AND meta_key='_elementor_data'");
    $db->query("DELETE FROM wp_postmeta WHERE post_id=102 AND meta_key='_elementor_css'");
    echo "SUCCESS: link_to=custom + link URL saved to widget fbc780f\n";
} else {
    echo "ERROR: widget fbc780f not found\n";
}
