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
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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
        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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
        $AM = array_mget($data, 'CAM');
        $data = array_merge($DM, $RW, $LW, $LM, $RM, $CM, $AM);

        $data = array_msort($data, array('OVA' => SORT_DESC));
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'HAN',
                            'val' => $player['GK Handling']
                        ],
                        [
                            'name' => 'KIC',
                            'val' => $player['GK Kicking']
                        ],
                        [
                            'name' => 'POS',
                            'val' => $player['GK Positioning']
                        ],
                        [
                            'name' => 'REF',
                            'val' => $player['GK Reflexes']
                        ],
                        [
                            'name' => 'DIV',
                            'val' => $player['GK Diving']
                        ],
                        [
                            'name' => 'SPE',
                            'val' => $player['Sprint Speed']
                        ],
                    ],

                );
            } else {
                $users[$couter] = array(
                    'ID' => $player['ID'],
                    'Rank' => $couter + 1,
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
                        [
                            'name' => 'PAC',
                            'val' => $player['PAC']
                        ],
                        [
                            'name' => 'SHO',
                            'val' => $player['SHO']
                        ],
                        [
                            'name' => 'PAS',
                            'val' => $player['PAS']
                        ],
                        [
                            'name' => 'DRI',
                            'val' => $player['DRI']
                        ],
                        [
                            'name' => 'DEF',
                            'val' => $player['DEF']
                        ],
                        [
                            'name' => 'PHY',
                            'val' => $player['PHY']
                        ]
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

    function getById($id)
    {
        $data = require_once "csv-to-array.php";
        $data = array_getKeyValue($data, 'ID', $id);
        $couter = 0;
        foreach ($data as $player) {
            if ($player['BP'] == 'GK') {
                $users[$couter] = array(
                    'status' => 'ok',
                    'data' => [
                        'ID' => $player['ID'],
                        'INFO' => [
                            'Name' => $player['Name'],
                            'Age' => $player['Age'],
                            'Nationality' => $player['Nationality'],
                            'Club' => $player['Club'],
                            'Height' => $player['Height'],
                            'Weight' => $player['Weight'],
                            'foot' => $player['foot'],
                            'TeamContract' => $player['Team & Contract'],
                            'Value' => $player['Value'],
                            'ReleaseClause' => $player['Release Clause'],

                        ],
                        'photo' => [
                            'PlayerPhoto' => $player['Player Photo'],
                            'FlagPhoto' => $player['Flag Photo'],
                            'ClubLogo' => $player['Club Logo'],
                        ],
                        'OVA' => $player['OVA'],
                        'BP' => $player['BP'],
                        'card' => [
                            [
                                'name' => 'HAN',
                                'val' => $player['GK Handling']
                            ],
                            [
                                'name' => 'KIC',
                                'val' => $player['GK Kicking']
                            ],
                            [
                                'name' => 'POS',
                                'val' => $player['GK Positioning']
                            ],
                            [
                                'name' => 'REF',
                                'val' => $player['GK Reflexes']
                            ],
                            [
                                'name' => 'DIV',
                                'val' => $player['GK Diving']
                            ],
                            [
                                'name' => 'SPE',
                                'val' => $player['Sprint Speed']
                            ],
                        ],
                        'Attacking' => [
                            'item' => [['name' => 'Crossing', 'value' => $player['Crossing']],
                                ['name' => 'Finishing', 'value' => $player['Finishing']],
                                ['name' => 'Heading Accuracy', 'value' => $player['Heading Accuracy']],
                                ['name' => 'Short Passing', 'value' => $player['Short Passing']],
                                ['name' => 'Volleys', 'value' => $player['Volleys']]
                            ],
                            'total' => $player['Attacking'],
                            'Average' => $player['Attacking'] / 5,
                        ],
                        'Skill' => [
                            'item' => [['name' => 'Dribbling', 'value' => $player['Dribbling']],
                                ['name' => 'Curve', 'value' => $player['Curve']],
                                ['name' => 'FK Accuracy', 'value' => $player['FK Accuracy']],
                                ['name' => 'Long Passing', 'value' => $player['Long Passing']],
                                ['name' => 'Ball Control', 'value' => $player['Ball Control']]],
                            'total' => $player['Skill'],
                            'Average' => $player['Skill'] / 5,
                        ],
                        'Movement' => [
                            'item' =>
                                [['name' => 'Acceleration', 'value' => $player['Acceleration']],
                                    ['name' => 'Sprint Speed', 'value' => $player['Sprint Speed']],
                                    ['name' => 'Agility', 'value' => $player['Agility']],
                                    ['name' => 'Reactions', 'value' => $player['Reactions']],
                                    ['name' => 'Balance', 'value' => $player['Balance']]],
                            'total' => $player['Movement'],
                            'Average' => $player['Movement'] / 5,
                        ],
                        'Power' => [
                            'item' => [['name' => 'Shot Power', 'value' => $player['Shot Power']],
                                ['name' => 'Jumping', 'value' => $player['Jumping']],
                                ['name' => 'Stamina', 'value' => $player['Stamina']],
                                ['name' => 'Strength', 'value' => $player['Strength']],
                                ['name' => 'Long Shots', 'value' => $player['Long Shots']]],
                            'total' => $player['Power'],
                            'Average' => $player['Power'] / 5,
                        ],
                        'Mentality' => [
                            'item' => [['name' => 'Aggression', 'value' => $player['Aggression']],
                                ['name' => 'Interceptions', 'value' => $player['Interceptions']],
                                ['name' => 'Positioning', 'value' => $player['Positioning']],
                                ['name' => 'Vision', 'value' => $player['Vision']],
                                ['name' => 'Penalties', 'value' => $player['Penalties']]],
                            'total' => $player['Mentality'],
                            'Average' => $player['Mentality'] / 5,
                        ],
                        'Defending' => [
                            'item' => [
                                ['name' => 'Marking', 'value' => $player['Marking']],
                                ['name' => 'Standing Tackle', 'value' => $player['Standing Tackle']],
                                ['name' => 'Sliding Tackle', 'value' => $player['Sliding Tackle']]],
                            'total' => $player['Defending'],
                            'Average' => $player['Defending'] / 3,
                        ],
                        'Goalkeeping' => [
                            'item' => [['name' => 'GK Diving', 'value' => $player['GK Diving']],
                                ['name' => 'GK Handling', 'value' => $player['GK Handling']],
                                ['name' => 'GK Kicking', 'value' => $player['GK Kicking']],
                                ['name' => 'GK Positioning', 'value' => $player['GK Positioning']],
                                ['name' => 'GK Reflexes', 'value' => $player['GK Reflexes']]],
                            'total' => $player['Goalkeeping'],
                            'Average' => $player['Goalkeeping'] / 5,
                        ],
                        'TotalStats' => $player['Total Stats'],
                        'BaseStats' => $player['Base Stats'],

                    ]

                );
            } else {
                $users[$couter] = array(
                    'status' => 'ok',
                    'data' => [
                        'ID' => $player['ID'],
                        'INFO' => [
                            'Name' => $player['Name'],
                            'Age' => $player['Age'],
                            'Nationality' => $player['Nationality'],
                            'Club' => $player['Club'],
                            'Height' => $player['Height'],
                            'Weight' => $player['Weight'],
                            'foot' => $player['foot'],
                            'TeamContract' => $player['Team & Contract'],
                            'Value' => $player['Value'],
                            'ReleaseClause' => $player['Release Clause'],

                        ],
                        'photo' => [
                            'PlayerPhoto' => $player['Player Photo'],
                            'FlagPhoto' => $player['Flag Photo'],
                            'ClubLogo' => $player['Club Logo'],
                        ],
                        'OVA' => $player['OVA'],
                        'BP' => $player['BP'],
                        'card' => [
                            [
                                'name' => 'PAC',
                                'val' => $player['PAC']
                            ],
                            [
                                'name' => 'SHO',
                                'val' => $player['SHO']
                            ],
                            [
                                'name' => 'PAS',
                                'val' => $player['PAS']
                            ],
                            [
                                'name' => 'DRI',
                                'val' => $player['DRI']
                            ],
                            [
                                'name' => 'DEF',
                                'val' => $player['DEF']
                            ],
                            [
                                'name' => 'PHY',
                                'val' => $player['PHY']
                            ]
                        ],
                        'Attacking' => [
                            'item' => [['name' => 'Crossing', 'value' => $player['Crossing']],
                                ['name' => 'Finishing', 'value' => $player['Finishing']],
                                ['name' => 'Heading Accuracy', 'value' => $player['Heading Accuracy']],
                                ['name' => 'Short Passing', 'value' => $player['Short Passing']],
                                ['name' => 'Volleys', 'value' => $player['Volleys']]
                            ],
                            'total' => $player['Attacking'],
                            'Average' => $player['Attacking'] / 5,
                        ],
                        'Skill' => [
                            'item' => [['name' => 'Dribbling', 'value' => $player['Dribbling']],
                                ['name' => 'Curve', 'value' => $player['Curve']],
                                ['name' => 'FK Accuracy', 'value' => $player['FK Accuracy']],
                                ['name' => 'Long Passing', 'value' => $player['Long Passing']],
                                ['name' => 'Ball Control', 'value' => $player['Ball Control']]],
                            'total' => $player['Skill'],
                            'Average' => $player['Skill'] / 5,
                        ],
                        'Movement' => [
                            'item' =>
                                [['name' => 'Acceleration', 'value' => $player['Acceleration']],
                                    ['name' => 'Sprint Speed', 'value' => $player['Sprint Speed']],
                                    ['name' => 'Agility', 'value' => $player['Agility']],
                                    ['name' => 'Reactions', 'value' => $player['Reactions']],
                                    ['name' => 'Balance', 'value' => $player['Balance']]],
                            'total' => $player['Movement'],
                            'Average' => $player['Movement'] / 5,
                        ],
                        'Power' => [
                            'item' => [['name' => 'Shot Power', 'value' => $player['Shot Power']],
                                ['name' => 'Jumping', 'value' => $player['Jumping']],
                                ['name' => 'Stamina', 'value' => $player['Stamina']],
                                ['name' => 'Strength', 'value' => $player['Strength']],
                                ['name' => 'Long Shots', 'value' => $player['Long Shots']]],
                            'total' => $player['Power'],
                            'Average' => $player['Power'] / 5,
                        ],
                        'Mentality' => [
                            'item' => [['name' => 'Aggression', 'value' => $player['Aggression']],
                                ['name' => 'Interceptions', 'value' => $player['Interceptions']],
                                ['name' => 'Positioning', 'value' => $player['Positioning']],
                                ['name' => 'Vision', 'value' => $player['Vision']],
                                ['name' => 'Penalties', 'value' => $player['Penalties']]],
                            'total' => $player['Mentality'],
                            'Average' => $player['Mentality'] / 5,
                        ],
                        'Defending' => [
                            'item' => [
                                ['name' => 'Marking', 'value' => $player['Marking']],
                                ['name' => 'Standing Tackle', 'value' => $player['Standing Tackle']],
                                ['name' => 'Sliding Tackle', 'value' => $player['Sliding Tackle']]],
                            'total' => $player['Defending'],
                            'Average' => $player['Defending'] / 3,
                        ],
                        'Goalkeeping' => [
                            'item' => [['name' => 'GK Diving', 'value' => $player['GK Diving']],
                                ['name' => 'GK Handling', 'value' => $player['GK Handling']],
                                ['name' => 'GK Kicking', 'value' => $player['GK Kicking']],
                                ['name' => 'GK Positioning', 'value' => $player['GK Positioning']],
                                ['name' => 'GK Reflexes', 'value' => $player['GK Reflexes']]],
                            'total' => $player['Goalkeeping'],
                            'Average' => $player['Goalkeeping'] / 5,
                        ],
                        'TotalStats' => $player['Total Stats'],
                        'BaseStats' => $player['Base Stats'],

                    ]

                );

            }
            $couter++;
//            var_dump($users);die();
//            $final = array_push($users);


        }

        if ($couter == 0) {
            $users = [
                'status' => 'notFound',
                'data' => null
            ];
        }

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
} elseif (isset($_GET['playerId']) and !empty($_GET['playerId'])) {
    echo $test->getById($_GET['playerId']);

} else {
    return 0;
}