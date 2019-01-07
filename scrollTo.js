jQuery(function ($) {
    //zresetuj scrolla
        
    $.scrollTo(0);

    $('#link0').click(function () {
        $.scrollTo($('#pierwszy'), 500);
        
        naczarno();
        document.getElementById("sli1").style.backgroundColor= "#fff";
    });
    $('#link1').click(function () {
        $.scrollTo($('#drugi'), 500);
        
        naczarno();
        document.getElementById("sli2").style.backgroundColor= "#fff";
    });
    $('#link2').click(function () {
        $.scrollTo($('#trzeci'), 500);
        
        naczarno();
        document.getElementById("sli3").style.backgroundColor= "#fff";
    });
    $('#link3').click(function () {
        $.scrollTo($('#czwarty'), 500);
        
        naczarno();
        document.getElementById("sli4").style.backgroundColor= "#fff";
    });
    $('#link4').click(function () {
        $.scrollTo($('#drugi'), 500);
        
        naczarno();
        document.getElementById("sli2").style.backgroundColor= "#fff";
    });
    
    
    $('#scrl1').click(function () {
        $.scrollTo($('#pierwszy'), 500);
        
        naczarno();
        document.getElementById("sli1").style.backgroundColor= "#fff";
    });
    $('#scrl2').click(function () {
        $.scrollTo($('#drugi'), 500);
        
        naczarno();
        document.getElementById("sli2").style.backgroundColor= "#fff";
    });
    $('#scrl3').click(function () {
        $.scrollTo($('#trzeci'), 500);
        
        naczarno();
        document.getElementById("sli3").style.backgroundColor= "#fff";
    });
    $('#scrl4').click(function () {
        $.scrollTo($('#czwarty'), 500);
        
        naczarno(); 
        document.getElementById("sli4").style.backgroundColor= "#fff";
    });
});

function naczarno()
{
    document.getElementById("sli1").style.backgroundColor= "#222";
    document.getElementById("sli2").style.backgroundColor= "#222";
    document.getElementById("sli3").style.backgroundColor= "#222";
    document.getElementById("sli4").style.backgroundColor= "#222";
}
