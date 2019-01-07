<?php
error_reporting(0);

    if(!isset($_POST["submit"]))
    {
        header("Location: index.html");
    }
    
    else
    {
        if(empty($_POST["imieinazwisko"]) || empty($_POST["email"]) || empty($_POST["temat"]) || empty($_POST["tresc"]) )
        {
            header("Location: index.html");
        }
        else
        {
            $hcinstal = "hcinstal@onet.pl";
            $imieinazwisko = $_POST["imieinazwisko"];
            $temat = $_POST["temat"];
            $tresc = $_POST["tresc"];
            
            $nadawca = 'From: '.$_POST["email"]." - ".$imieinazwisko."\r\n";
            
            mail($hcinstal, $temat, $tresc, $nadawca);
            header("Location: index.html");

        }
    
        
    }
        
    ?>
