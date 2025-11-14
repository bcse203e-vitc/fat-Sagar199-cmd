<?php
function insideOut(array $arr): array {
    $n = count($arr);
    if ($n === 0) return $arr;      
    if ($n % 2 !== 0) return $arr;    

    $half = intdiv($n, 2);
    $left = array_slice($arr, 0, $half);
    $right = array_slice($arr, $half, $half);

    $left_reversed = array_reverse($left);
    $right_reversed = array_reverse($right);

    return array_merge($left_reversed, $right_reversed);
}


$a = [1, 2, 2, 1];
$result1 = insideOut($a);


$b = ["Everyone", "says", "Kelly", "is", "REALLY", "awesome"];
$result2 = insideOut($b);

echo "<h3>Numeric example:</h3>";
echo "<h5>Original Array - </h5>";
foreach($a as $r){
    echo $r." ";
}
echo "<h5>InsideOut Array - </h5>";
foreach($result1 as $r){
    echo $r." ";
}
echo "<br>";
print_r($result1);
echo "<br><h3>String example:</h3>";
echo "<h5>Original Array - </h5>";
foreach($b as $r){
    echo $r." ";
}
echo "<h5>InsideOut Array - </h5>";
foreach($result2 as $r){
    echo $r." ";
}
echo "<br>";
print_r($result2);
?>
