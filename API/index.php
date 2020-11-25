<?php
require_once 'function.php';

class API
{
    function bestPlayers($num = 10)
    {
        $data = require_once "csv-to-array.php";
        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
        $users = array_slice($users, 0, $num);
        return json_encode($users);
    }

    function bestGK($num = 10)
    {
        $data = require_once "csv-to-array.php";
        $data = array_mget($data, 'GK');
        $players = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
        $users = array_slice($users, 0, $num);

        return json_encode($users);
    }

    function bestDefender($num = 10)
    {
        $data = require_once "csv-to-array.php";
        $final = array();
        $SW = array_mget($data, 'SW');
        $RWB = array_mget($data, 'RWB');
        $LWB = array_mget($data, 'LWB');
        $LB = array_mget($data, 'LB');
        $RB = array_mget($data, 'RB');
        $CB = array_mget($data, 'CB');
        $data = array_merge($SW, $RWB, $LWB, $RB, $LB, $CB);

        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));
        $users = array_slice($users, 0, $num);

        return json_encode($users);
    }

    function bestMidfielders($num = 10)
    {
        $data = require_once "csv-to-array.php";
        $DM = array_mget($data, 'DM');
        $RW = array_mget($data, 'RW');
        $LW = array_mget($data, 'LW');
        $LM = array_mget($data, 'LM');
        $RM = array_mget($data, 'RM');
        $CM = array_mget($data, 'CM');
        $AM = array_mget($data, 'AM');
        $data = array_merge($DM, $RW, $LW, $LM, $RM, $CM, $AM);

        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));

        $users = array_slice($users, 0, $num);

        return json_encode($users);
    }

    function bestAttackers($num = 10)
    {
        $data = require_once "csv-to-array.php";
        $CF = array_mget($data, 'CF');
        $RF = array_mget($data, 'RF');
        $LF = array_mget($data, 'LF');
        $ST = array_mget($data, 'ST');
        $data = array_merge($CF, $RF, $LF, $ST);

        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
//        $players = array_msort($users,array('OVA'=>SORT_DESC));

        $users = array_slice($users, 0, $num);

        return json_encode($users);
    }

    function bestYoung($num = 10)
    {
        $data = require_once "csv-to-array.php";

        $data = array_age23($data);
        $data = array_msort($data, array('OVA' => SORT_DESC));

        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'HAN' => $player['GK Handling'],
                        'KIC' => $player['GK Kicking'],
                        'POS' => $player['GK Positioning'],
                        'REF' => $player['GK Reflexes'],
                        'DIV' => $player['GK Diving'],
                        'SPE' => $player['Sprint Speed'],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter+1,
                    'Name' => $player['Name'],
                    'Age' => $player['Age'],
                    'BP' => $player['BP'],
                    'OVA' => $player['OVA'],
                    'Nationality' => $player['Nationality'],
                    'Club' => $player['Club'],
                    'BP' => $player['BP'],
                    'Player Photo' => $player['Player Photo'],
                    'Flag Photo' => $player['Flag Photo'],
                    'Club Logo' => $player['Club Logo'],
                    'card' => [
                        'PAC' => $player['PAC'],
                        'SHO' => $player['SHO'],
                        'PAS' => $player['PAS'],
                        'DRI' => $player['DRI'],
                        'DEF' => $player['DEF'],
                        'PHY' => $player['PHY']
                    ],

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }
        $users = array_slice($users, 0, $num);

        return json_encode($users);
    }

}

$test = new API();
header("Content-Type: application/json");

if (isset($_GET['Best'])) {
    if ($_GET['Best'] == 'Player') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestPlayers($_GET['num']);
        else
            echo $test->bestPlayers();

    } elseif ($_GET['Best'] == 'GK') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestGK($_GET['num']);
        else
            echo $test->bestGK();

    } elseif ($_GET['Best'] == 'Defender') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestDefender($_GET['num']);
        else
            echo $test->bestDefender();

    } elseif ($_GET['Best'] == 'Midfielder') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestMidfielders($_GET['num']);
        else
            echo $test->bestMidfielders();

    } elseif ($_GET['Best'] == 'Attacker') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestAttackers($_GET['num']);
        else
            echo $test->bestAttackers();

    } elseif ($_GET['Best'] == 'Young') {
        if (isset($_GET['num']) and is_numeric($_GET['num']))
            echo $test->bestYoung($_GET['num']);
        else
            echo $test->bestYoung();

    } else {
        return 0;
    }
} else {
    return 0;
}