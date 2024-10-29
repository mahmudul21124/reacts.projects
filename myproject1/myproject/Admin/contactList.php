<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    //echo "Testing";
?>

<?php
    include_once ("dbconfig.php");

    $user = json_decode(file_get_contents('php://input'));

    $name = $user->name;
    $email = $user->email;
    $subject = $user->subject;
    $massage = $user->massage;

    if($name!="" && $email!="" && $massage!=""){
        $db->query("INSERT INTO contact(id, name, email, subject, massage) values(null, '$name', '$email', '$subject', '$massage')");
    }

    //echo "INSERT INTO users(id, name, email, mobile, created_at) values(null, '$name', '$email', '$mobile')";

    if($db->affected_rows){
        echo "Massage sent successfully";
    }
?>