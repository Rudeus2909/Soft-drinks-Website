<?php
include "config/connectdb.php";
// include "header.php";
    
    if(isset($_GET['act'])) {
        switch ($_GET['act']) {
            case 'login':
                include "login.php";
                include "login_code.php";
                break;
        }
    }// else {
    //     include "../apps/home.php";
    // }

    // include "../apps/footer.php";
?>