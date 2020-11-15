<?php

function array_msort($array, $cols)
{
    $colarr = array();
    foreach ($cols as $col => $order) {
        $colarr[$col] = array();
        foreach ($array as $k => $row) { $colarr[$col]['_'.$k] = strtolower($row[$col]); }
    }
    $eval = 'array_multisort(';
    foreach ($cols as $col => $order) {
        $eval .= '$colarr[\''.$col.'\'],'.$order.',';
    }
    $eval = substr($eval,0,-1).');';
    eval($eval);
    $ret = array();
    foreach ($colarr as $col => $arr) {
        foreach ($arr as $k => $v) {
            $k = substr($k,1);
            if (!isset($ret[$k])) $ret[$k] = $array[$k];
            $ret[$k][$col] = $array[$k][$col];
        }
    }
    return $ret;

}

function array_mget($array, $pos)
{
    $data = array();
    foreach ($array as $player)
    {
        if ($player['BP'] == $pos)
        {
            array_push($data,$player);
        }
    }

    return $data;
}

function array_age23($array)
{
    $data = array();
    foreach ($array as $player)
    {
        if ($player['Age'] < 23)
        {
            array_push($data,$player);
        }
    }

    return $data;
}


$test = [
    ['name' => 'a','age' => 20],
    ['name' => 'ab','age' => 28],
    ['name' => 'ak','age' => 2]
    ];
$test2 = [
    ['name' => 'ao','age' => 80],
    ['name' => 'abo','age' => 18],
    ['name' => 'ako','age' => 62]
];
