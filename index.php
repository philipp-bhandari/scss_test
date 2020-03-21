<!DOCTYPE html>
<html>
<head>
<title>Volvo</title>
<meta name="viewport" content="width=device-width">
<!-- JQUERY -->
<script
src="https://code.jquery.com/jquery-2.2.4.min.js"
integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
crossorigin="anonymous"></script>

<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
<link rel="stylesheet" href="static/css/main.css">

<!-- SCRIPTS -->
<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
<script src="static/main.js"></script>

<script>
    $(document).ready(function() {
        __COMMON.commonFunctions();

    });
</script>
</head>

<body>
<?php
    include 'templates/block_about_company.html';
    include 'templates/block_services.html';
    include 'templates/block_models.html';
    include 'templates/block_contacts.html';
?>

</body>
</html>