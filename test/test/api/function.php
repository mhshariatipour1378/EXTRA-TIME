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

function array_getKeyValue($array, $key, $value)
{
    $data = array();
    foreach ($array as $player)
    {
        if ($player[$key] == $value)
        {
            array_push($data,$player);
        }
    }

    return $data;
}

function searchByName($array,$key)
{
    $res = array();
    $key = strtolower($key);
    foreach ($array as $player) {
        $playerName = strtolower($player['Name']);
        if(strpos($playerName,$key))
        {
            array_push($res, $player);
        }

    }

    return $res;

}

function searchByClub($array,$key)
{
    $res = array();
    foreach ($array as $player) {
        if($player['Club'] == $key){
            array_push($res, $player);
        }

    }

    return $res;

}

function searchByOVA($array,array $key=[0,100])
{
    $res = array();
    foreach ($array as $player) {
        if($player['OVA'] >= $key[0] and $player['OVA'] <= $key[1]){
            array_push($res, $player);
        }

    }
     return $res;

}

function searchByBP($data,$key)
{
    $res = array();
    if($key == "GK"){

        $res = array_mget($data, 'GK');

    }elseif ($key == "Defender"){

        $SW = array_mget($data, 'SW');

        $RWB = array_mget($data, 'RWB');
        $LWB = array_mget($data, 'LWB');
        $LB = array_mget($data, 'LB');
        $RB = array_mget($data, 'RB');
        $CB = array_mget($data, 'CB');
        $res = array_merge($SW, $RWB, $LWB, $RB, $LB, $CB);

    }elseif ($key == "Midfielder"){

        $DM = array_mget($data, 'DM');
        $RW = array_mget($data, 'RW');
        $LW = array_mget($data, 'LW');
        $LM = array_mget($data, 'LM');
        $RM = array_mget($data, 'RM');
        $CM = array_mget($data, 'CM');
        $AM = array_mget($data, 'CAM');
        $res = array_merge($DM, $RW, $LW, $LM, $RM, $CM, $AM);

    }elseif ($key == "Attacker"){

        $CF = array_mget($data, 'CF');
        $RF = array_mget($data, 'RF');
        $LF = array_mget($data, 'LF');
        $ST = array_mget($data, 'ST');
        $res = array_merge($CF, $RF, $LF, $ST);

    }

    return $res;

}

function searchByAge($array, array $key=[15,45])
{
    $res = array();
    foreach ($array as $player) {
        if($player['Age'] >= $key[0] and $player['Age'] <= $key[1]){
            array_push($res, $player);
        }

    }
    return $res;

}

//$arr1 = array(
//    array('id'=>1,'name'=>'aA','cat'=>'cc'),
//    array('id'=>2,'name'=>'aa','cat'=>'dd'),
//    array('id'=>3,'name'=>'bb','cat'=>'cc'),
//    array('id'=>4,'name'=>'bb','cat'=>'dd')
//);
//
//$res = array_msort($arr1, array('name'=>SORT_DESC, 'cat'=>SORT_ASC));
//$expected = array(
//    array('id'=>3,'name'=>'bb','cat'=>'cc'),
//    array('id'=>4,'name'=>'bb','cat'=>'dd'),
//    array('id'=>1,'name'=>'aA','cat'=>'cc'),
//    array('id'=>2,'name'=>'aa','cat'=>'dd'),
//);
//
//var_dump($expected,$res);die();