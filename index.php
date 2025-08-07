<?php
session_start();
include('connection.php')
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="Css/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" />
    <title>Dashboard</title>
</head>

<body>
    <div class="icon">
        <i class="fa-solid fa-bars toggle-button" id="toggleBtn"></i>
    </div>

    <aside class="header" id="header">
        <img src="images.jpg" alt="Profile Picture" />
        <i class="fa-solid fa-xmark close-button" id="closeBtn"></i>

        <nav>
            <ul class="navlist" id="navlist">
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Items</a></li>
                <li><a href="#">User</a></li>
                <li><a href="#">Dashboard</a></li>
            </ul>
        </nav>
    </aside>

    <div class="container">
        <a href="#home.html"><i class="fa-solid fa-arrow-left logout"></i></a>
        <h2>Dashboard</h2>
        <div class="box-container">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
        </div>

        <table class="table-container">
            <tr class="table-row">
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Option</th>
            </tr>

            <tr class="table-info">
                <td>John Michael</td>
                <td>Boboy San Luis Batangas</td>
                <td>johnmichaelbcastor@gmail.com</td>
                <td id="option">
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    <a href="#">View</a>
                </td>

            </tr>
        </table>

        <div class="chart-container">
            <h2>Data Chart</h2>
            <canvas id="myChart"></canvas>
        </div>

        <div class="datime">
            <p>copy &nbsp; <span id="datime"></span> &nbsp; all rights!</p>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/script.js"></script>
</body>

</html>