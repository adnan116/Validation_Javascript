<?php 

	if(isset($_POST['er']))
	{
		echo $_POST['er'];
	}
	else
	{
		$name = $_POST['Name'];
		$email = $_POST['Email'];
		$uname = $_POST['Uname'];
		$pass = $_POST['Pass'];
		$gender = $_POST['Gender'];
		$day = $_POST['Day'];
		$month = $_POST['Month'];
		$year = $_POST['Year'];
		$date = $day+"/"+$month+"/"+$year;
		$bg = $_POST['BG'];
		$degree = $_POST['Degree'];
		$uid = $_POST['Uid'];

		$con = mysqli_connect('localhost','root','','WEB');
		$sql="insert into users values('{$name}','{$email}','{$uname}','{$pass}','{$gender}','{$date}','{$bg}','{$degree}','{$uid}');";
		if(mysqli_query($con, $sql))
		{
			echo "Successfully added to the database.";
		}
		else
			echo "Database error.";
	}

 ?>