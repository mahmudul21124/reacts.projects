<?php
session_start();

if (!isset($_SESSION['email']) && !isset($_SESSION['utype'])) {
	header("Location:../signin.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Edit Student</title>
    <meta name="description" content="A responsive bootstrap 4 admin dashboard template by hencework" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- Data Table CSS -->
    <link href="vendors/datatables.net-dt/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
    <link href="vendors/datatables.net-responsive-dt/css/responsive.dataTables.min.css" rel="stylesheet" type="text/css" />

    <!-- Toggles CSS -->
    <link href="vendors/jquery-toggles/css/toggles.css" rel="stylesheet" type="text/css">
    <link href="vendors/jquery-toggles/css/themes/toggles-light.css" rel="stylesheet" type="text/css">

    <!-- Custom CSS -->
    <link href="dist/css/style.css" rel="stylesheet" type="text/css">

</head>

<body>

    <!-- HK Wrapper -->
    <div class="hk-wrapper hk-vertical-nav">

        <!-- Top Navbar -->
        <?php include "parts/top_navbar.php" ?>
        <!-- /Top Navbar -->

        <!-- Vertical Nav -->
        <?php include "parts/vertical_nav.php" ?>
        <!-- /Vertical Nav -->

        <!-- Main Content -->
        <div class="hk-pg-wrapper">
            <!-- Breadcrumb -->
            <nav class="hk-breadcrumb" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-light bg-transparent">
                    <li class="breadcrumb-item"><a href="#">Forms</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Edit Student</li>
                </ol>
            </nav>
            <!-- /Breadcrumb -->

            <!-- Container -->
            <div class="container">

                <!-- Title -->
                <div class="hk-pg-header">
                    <h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="database"></i></span></span>Edit Student</h4>
                </div>
                <!-- /Title -->

                <!-- Row -->
                <div class="row">
                    <div class="col-xl-12">

                        <section class="hk-sec-wrapper">
                            <h5 class="hk-sec-title">Edit Student</h5>
                            <div class="row">
                                <div class="col-lg-8 offset-2">
                                    <div class="card">
                                        <div class="card-body">

                                            <h4 class="mt-0 header-title">Student Edit Form</h4>
                                            <?php
                                            include_once "dbconfig.php";
                                            $id = $_REQUEST['id'];
                                            
                                            if (isset($_POST['submit'])) {
                                                extract($_POST);

                                                

                                                
                                                    $sq = "UPDATE students SET roll_no='$roll_no', name='$name', parents_name='$pname', department='$department', class='$cls', gender='$gender', dob='$bdate', contact_no='$contact', address='$address', email='$email' WHERE id='$id'";

                                                    $update = mysqli_query($db,$sq);

                                                    if ($update) {
                                                        echo "UPDATED";
                                                    }
                                            }

                                            $sql = $db->query("SELECT * FROM students WHERE id='$id'");
                                            $result = $sql->fetch_assoc();
                                            
                                            ?>

                                            <p class="sub-title"></p>

                                            <form class="" action="" method="post" enctype="multipart/form-data">

                                            <div class="form-group">
                                                    <label>Department</label>
                                                    <?php
                                                    include_once "dbconfig.php";
                                                    $sql = $db->query("SELECT department FROM department");
                                                    ?>
                                                    <select name="department" id="" class="form-control" selected>
                                                        <option value=""><?php echo $result['department'] ?></option>
                                                    <?php while($row = $sql->fetch_assoc()){ ?>
                                                        <option value="<?php echo $row['department'] ?>"><?php echo $row['department'] ?></option>
                                                    <?php } ?>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Student Name</label>
                                                    <input type="text" class="form-control" required placeholder="Enter Students Name" name="name" value="<?php echo $result['name'] ?>"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Roll No</label>
                                                    <input type="text" class="form-control" required placeholder="Enter Roll No" name="roll_no" value="<?php echo $result['roll_no'] ?>"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Class</label>
                                                    <?php
                                                    include_once "dbconfig.php";
                                                    $sql = $db->query("SELECT class FROM class");
                                                    ?>
                                                    <select name="cls" id="" class="form-control">
                                                        <option value=""><?php echo $result['class'] ?></option>
                                                        <?php while ($row = $sql->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row['class'] ?>"><?php echo $row['class'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label>Gender</label><br>
                                                    Male <input type="radio" class="form-control-m" required name="gender" value="Male" <?php if($result['gender'] == 'Male') echo 'checked'; ?>/>
                                                    Female <input type="radio" class="form-control-m" required name="gender" value="Female" <?php if($result['gender'] == 'Female') echo 'checked'; ?>/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Parents Name</label>
                                                    <input type="text" class="form-control" required placeholder="Enter Parents Name" name="pname" value="<?php echo $result['parents_name'] ?>"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Date of Birth</label>
                                                    <input type="date" class="form-control" required name="bdate" value="<?php echo $result['dob'] ?>"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Contact</label>
                                                    <input type="text" class="form-control" required placeholder="Enter Contact Number" name="contact" value="<?php echo $result['contact_no'] ?>"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Address</label>
                                                    <div>
                                                        <textarea required class="form-control" rows="5" placeholder="Enter Address" name="address"> <?php echo $result['address'] ?></textarea>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" required placeholder="Enter Email address" name="email" value="<?php echo $result['email'] ?>"/>
                                                </div>
                                                
                                                <div class="form-group mb-0">
                                                    <div>
                                                        <button type="submit" name="submit" class="btn btn-primary waves-effect waves-light">
                                                            Submit
                                                        </button>
                                                        <button type="reset" name="cancel" class="btn btn-secondary waves-effect m-l-5">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
                        </section>
                    </div>
                </div>
                <!-- /Row -->

            </div>
            <!-- /Container -->

            <!-- Footer -->
            <?php include "parts/footer.php" ?>
            <!-- /Footer -->

        </div>
        <!-- /Main Content -->

    </div>
    <!-- /HK Wrapper -->

    <!-- jQuery -->
    <script src="vendors/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendors/popper.js/dist/umd/popper.min.js"></script>
    <script src="vendors/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Slimscroll JavaScript -->
    <script src="dist/js/jquery.slimscroll.js"></script>

    <!-- Data Table JavaScript -->
    <script src="vendors/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="vendors/datatables.net-dt/js/dataTables.dataTables.min.js"></script>
    <script src="vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="vendors/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="vendors/datatables.net-buttons/js/buttons.flash.min.js"></script>
    <script src="vendors/jszip/dist/jszip.min.js"></script>
    <script src="vendors/pdfmake/build/pdfmake.min.js"></script>
    <script src="vendors/pdfmake/build/vfs_fonts.js"></script>
    <script src="vendors/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="vendors/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="vendors/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="dist/js/dataTables-data.js"></script>

    <!-- FeatherIcons JavaScript -->
    <script src="dist/js/feather.min.js"></script>

    <!-- Fancy Dropdown JS -->
    <script src="dist/js/dropdown-bootstrap-extended.js"></script>

    <!-- Toggles JavaScript -->
    <script src="vendors/jquery-toggles/toggles.min.js"></script>
    <script src="dist/js/toggle-data.js"></script>

    <!-- Init JavaScript -->
    <script src="dist/js/init.js"></script>

</body>

</html>