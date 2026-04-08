<?php
$db = new mysqli('localhost', 'rsclimoc_wp1', 'H.Uxlco3gyQDlE85TdW79', 'rsclimoc_wp1');
if ($db->connect_error) { die("Connect error: " . $db->connect_error . "\n"); }

// Find all hello elementor settings options
$result = $db->query("SELECT option_name, option_value FROM wp_options WHERE option_name LIKE 'hello%' AND option_name NOT LIKE '_hello%' ORDER BY option_name");
while ($row = $result->fetch_assoc()) {
    echo $row['option_name'] . " = " . $row['option_value'] . "\n";
}
echo "\n---\n";

// Also check column sizes in post 102 elementor data
$result2 = $db->query("SELECT meta_value FROM wp_postmeta WHERE post_id=102 AND meta_key='_elementor_data'");
$row2 = $result2->fetch_assoc();
$data = json_decode($row2['meta_value'], true);

function findColumns($elements) {
    $cols = [];
    foreach ($elements as $el) {
        if (($el['elType'] ?? '') === 'column') {
            $cols[] = [
                'id' => $el['id'],
                '_column_size' => $el['settings']['_column_size'] ?? 'not set',
                '_inline_size' => $el['settings']['_inline_size'] ?? 'not set',
            ];
        }
        if (!empty($el['elements'])) {
            $cols = array_merge($cols, findColumns($el['elements']));
        }
    }
    return $cols;
}

$cols = findColumns($data);
echo "Column sizes:\n";
foreach ($cols as $c) {
    echo "  " . $c['id'] . ": _column_size=" . json_encode($c['_column_size']) . " _inline_size=" . json_encode($c['_inline_size']) . "\n";
}
