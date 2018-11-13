<?PHP

$host       = "localhost";
$user       = "root";
$senha      = "";
$db_name    = "marcio";

$conn = new PDO('mysql:host = localhost; dbname=marcio','root','');

$stmt = $conn->prepare("SELECT * FROM login");
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if($results !=""){
    echo json_encode($results);
}else{
    return 'Alessandro';
}
?>