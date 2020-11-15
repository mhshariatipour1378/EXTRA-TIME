<?php
require_once 'function.php';

class API
{
    function bestPlayers()
    {
        $data = require_once "csv-to-array.php";
        $data = array_msort($data,array('OVA'=>SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'Age' => $player['Age'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }

        return json_encode($users);
    }

    function bestGK()
    {
        $data = require_once "csv-to-array.php";
        $data = array_mget($data,'GK');
        $players = array_msort($data,array('OVA'=>SORT_DESC));
        $couter = 0;
        foreach ($players as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'Age' => $player['Age'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }

        return json_encode($players);
    }

    function bestDefender()
    {
        $data = require_once "csv-to-array.php";
        $final = array();
        $SW = array_mget($data,'SW');
        $RWB = array_mget($data,'RWB');
        $LWB = array_mget($data,'LWB');
        $LB = array_mget($data,'LB');
        $RB = array_mget($data,'RB');
        $CB = array_mget($data,'CB');
        $data = array_merge($SW, $RWB, $LWB, $RB, $LB, $CB);

        $data = array_msort($data,array('OVA'=>SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));


        return json_encode($users);
    }

    function bestMidfielders()
    {
        $data = require_once "csv-to-array.php";
        $DM = array_mget($data,'DM');
        $RW = array_mget($data,'RW');
        $LW = array_mget($data,'LW');
        $LM = array_mget($data,'LM');
        $RM = array_mget($data,'RM');
        $CM = array_mget($data,'CM');
        $AM = array_mget($data,'AM');
        $data = array_merge($DM, $RW, $LW, $LM, $RM, $CM, $AM);

        $data = array_msort($data,array('OVA'=> SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));


        return json_encode($users);
    }

    function bestAttackers()
    {
        $data = require_once "csv-to-array.php";
        $CF = array_mget($data,'CF');
        $RF = array_mget($data,'RF');
        $LF = array_mget($data,'LF');
        $ST = array_mget($data,'ST');
        $data = array_merge($CF, $RF, $LF, $ST);

        $data = array_msort($data,array('OVA'=> SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));


        return json_encode($users);
    }

    function bestYoung()
    {
        $data = require_once "csv-to-array.php";

        $data = array_age23($data);
        $data = array_msort($data,array('OVA'=>SORT_DESC));

        $couter = 0;
        foreach ($data as $player) {
            $users[$couter] = array(
                'ID' => $player['ID'],
                'Name' => $player['Name'],
                'Age' => $player['Age'],
                'OVA' => $player['OVA'],

            );
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }

        return json_encode($users);
    }

}

$test = new API();
header("Content-Type: application/json");

if(isset($_GET['Best']))
{
    if ($_GET['Best'] == 'player')
    {
        echo $test->bestPlayers();

    }elseif ($_GET['Best'] == 'GK'){

        echo $test->bestGK();

    }elseif ($_GET['Best'] == 'Defender'){

        echo $test->bestDefender();

    }elseif ($_GET['Best'] == 'Midfielders'){

        echo $test->bestMidfielders();

    }elseif ($_GET['Best'] == 'Attackers'){

        echo $test->bestAttackers();

    }elseif ($_GET['Best'] == 'Young'){

        echo $test->bestYoung();

    }else{
        return 'bad';
    }
}else{
    return '404';
}