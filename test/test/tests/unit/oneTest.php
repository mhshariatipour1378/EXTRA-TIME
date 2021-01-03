<?php

namespace Test;


use PHPUnit\Framework\TestCase;

class oneTest extends TestCase
{
    public function test_array_msort()
    {
        $arr1 = array(
            array('id'=>1,'name'=>'aA','cat'=>'cc'),
            array('id'=>2,'name'=>'aa','cat'=>'dd'),
            array('id'=>3,'name'=>'bb','cat'=>'cc'),
            array('id'=>4,'name'=>'bb','cat'=>'dd')
        );
        $expected = array(
            array('id'=>3,'name'=>'bb','cat'=>'cc'),
            array('id'=>4,'name'=>'bb','cat'=>'dd'),
            array('id'=>1,'name'=>'aA','cat'=>'cc'),
            array('id'=>2,'name'=>'aa','cat'=>'dd'),
        );

        $res = array_msort($arr1, array('name'=>SORT_DESC, 'cat'=>SORT_ASC));
        $i = 0;
        foreach ($res as $d)
        {
            $this->assertEquals($expected[$i],$d);
            $i++;

        }
    }

    public function test_array_getKeyValue()
    {
        $arr1 = array(
            array('id'=>1,'name'=>'ali','cat'=>'cm'),
            array('id'=>2,'name'=>'aa','cat'=>'dd'),
            array('id'=>3,'name'=>'ali','cat'=>'cc'),
            array('id'=>4,'name'=>'bfb','cat'=>'dd'),
            array('id'=>5,'name'=>'buub','cat'=>'dd'),
            array('id'=>6,'name'=>'bpkob','cat'=>'dd')
        );

        $expected = array(
            array('id'=>1,'name'=>'ali','cat'=>'cm'),
            array('id'=>3,'name'=>'ali','cat'=>'cc'),

        );

        $res = array_getKeyValue($arr1, 'name','ali');
        $i = 0;
        foreach ($res as $d)
        {
            $this->assertEquals($expected[$i],$d);
            $i++;

        }

    }

    public function test_searchByAge()
    {
        $arr1 = array(
            array('id'=>1,'name'=>'aa1','Age'=>20),
            array('id'=>2,'name'=>'aa2','Age'=>31),
            array('id'=>3,'name'=>'aa3','Age'=>24),
            array('id'=>4,'name'=>'aa4','Age'=>19),
            array('id'=>5,'name'=>'aa5','Age'=>29),
            array('id'=>6,'name'=>'aa6','Age'=>31),
            array('id'=>7,'name'=>'aa6','Age'=>22),
            array('id'=>8,'name'=>'aa7','Age'=>27),
            array('id'=>9,'name'=>'aa8','Age'=>37),
            array('id'=>10,'name'=>'aa9','Age'=>17),
            array('id'=>11,'name'=>'aa7','Age'=>32),
        );

        $expected = array(
            array('id'=>3,'name'=>'aa3','Age'=>24),
            array('id'=>5,'name'=>'aa5','Age'=>29),
            array('id'=>8,'name'=>'aa7','Age'=>27),

        );

        $res = searchByAge($arr1,[23,30]);
        $i = 2;
        $expected1 = array_msort($expected,array('id'=>SORT_DESC));
        $res1 = array_msort($res,array('id'=>SORT_DESC));
        foreach ($res1 as $d)
        {
            $this->assertEquals($expected1[$i],$d);

            $i--;

        }

    }
}