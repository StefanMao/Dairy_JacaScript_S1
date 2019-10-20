<?php
checkreapet($_GET["user_input1"] , $_GET["user_input2"], $_GET["user_input3"], $_GET["user_input4"]);

function checkreapet($D1,$D2,$D3,$D4)
{
	if($D1<$D3 && $D2<$D3)
	{
		echo "兩個區間日期未重複 !!";
	}
	else if($D1>$D4 && $D2>$D4)
	{
		echo "兩個區間日期未重複 !!";
	}
	else
	{
		echo "兩個區間日期重複 !!";
	}


}





?>