<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    //echo "Testing";
?>

<?php
    include_once ("dbconfig.php");

   

    $sql = "SELECT * FROM teachers";

    $result = $db->query($sql);

    $dataset = [];

    while ($row = $result->fetch_assoc()){
        //$dataset[] = $row['id'] . " " . $row['name'] . " " . $row['email'] . " " . $row['mobile'] ; 
        $dataset[] = $row ;
    }

    echo json_encode($dataset);

    
?>