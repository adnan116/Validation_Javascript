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
		$date = $day."/".$month."/".$year;
		$bg = $_POST['BG'];
		$degree = $_POST['Degree'];
		$uid = $_POST['Uid'];

		$conn = mysqli_connect('localhost','root','','web');
		$sql = "insert into users values('','{$name}','{$email}','{$uname}','{$pass}','{$gender}','{$date}','{$bg}','{$degree}','{$uid}')";
		if(mysqli_query($conn, $sql))
		{
			echo "Successfully added to the database.";
			//echo $_POST['BG'];
		}
		else
			echo "Database error.";
	}

 ?>