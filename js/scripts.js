var growth; //рост
var weight; //вес
var frontShoulder; //плечо спереди
var backShoulder; //плечо сзади
var back; //спина
var chest; //грудь
var forearm; //предплечье
var shin; //голень
var stomach; //живот
var hip; //бедро

function getG() {
    document.getElementById('growth-1').value = growth;
    document.getElementById('growth-2').value = growth;
    document.getElementById('growth-3').value = growth;
    document.getElementById('growth-4').value = growth;
}
function getW() {
    document.getElementById('weight-1').value = weight;
    document.getElementById('weight-2').value = weight;
}
function getF() {
    document.getElementById('forearm-1').value = forearm;
    document.getElementById('forearm-2').value = forearm;
}
function getH() {
    document.getElementById('hip-1').value = hip;
    document.getElementById('hip-2').value = hip;
}
function getS() {
    document.getElementById('shin-1').value = shin;
    document.getElementById('shin-2').value = shin;
}
function getSh() {
    document.getElementById('front-shoulder-1').value = frontShoulder;
    document.getElementById('front-shoulder-2').value = frontShoulder;
    document.getElementById('back-shoulder-1').value = backShoulder;
    document.getElementById('back-shoulder-2').value = backShoulder;
}

$(document).ready(function(event) {
    $('form[name=form]').submit(function(event){
        event.preventDefault();
    });
});
$(function(){
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 50;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });
});

function bmi() {
    growth = Number(document.getElementById('growth-1').value);
    weight = Number(document.getElementById('weight-1').value);
    if (growth !== '' && weight !== '')
    {
        document.getElementById('bmi').innerHTML = 'ИМТ = ' + (weight / (growth * growth) * 10000).toFixed(2);
        $("#bmi").fadeIn(400);
        getG();
        getW();
    }
}
function fp() {
    growth = Number(document.getElementById('growth-2').value);
    weight = Number(document.getElementById('weight-2').value);
    frontShoulder = Number(document.getElementById('front-shoulder-1').value);
    backShoulder = Number(document.getElementById('back-shoulder-1').value);
    forearm = Number(document.getElementById('forearm-1').value);
    back = Number(document.getElementById('back').value);
    chest = Number(document.getElementById('chest').value);
    stomach = Number(document.getElementById('stomach').value);
    hip = Number(document.getElementById('hip-1').value);
    shin = Number(document.getElementById('shin-1').value);

    if (growth !== '' && weight !== '' && frontShoulder !== '' && backShoulder !== '' && forearm !== '' && back !== '' && chest !== '' && stomach !== '' && hip !== '' && shin !== '')
    {
        document.getElementById('fp').innerHTML = 'D = ' + (((frontShoulder + backShoulder + forearm + back + chest + stomach + hip + shin) / 16) * (1 + (weight + growth - 160) / 100) * 1.2).toFixed(2) + ' кг';
        $("#fp").fadeIn(400);
        getG();
        getW();
        getF();
        getH();
        getS();
        getSh();
    }
}
function pmm() {
    growth = Number(document.getElementById('growth-3').value);
    frontShoulder = Number(document.getElementById('front-shoulder-2').value);
    backShoulder = Number(document.getElementById('back-shoulder-2').value);
    forearm = Number(document.getElementById('forearm-2').value);
    hip = Number(document.getElementById('hip-2').value);
    shin = Number(document.getElementById('shin-2').value);

    const forearmVolume = Number(document.getElementById('forearm-volume').value);
    const hipVolume = Number(document.getElementById('hip-volume').value);
    const shinVolume = Number(document.getElementById('shin-volume').value);
    const shoulderVolume = Number(document.getElementById('shoulder-volume').value);

    if (growth !== '' && frontShoulder !== '' && backShoulder !== '' && forearm !== '' && hip !== '' && shin !== '' && forearmVolume !== '' && hipVolume !== '' && shinVolume !== '' && shoulderVolume !== '') {
        const r = (((shoulderVolume + shinVolume + hipVolume + forearmVolume) / (2 * Math.PI)) / 4) - ((((frontShoulder + backShoulder) / 2) + forearm + hip + shin) / 80);
        document.getElementById('pmm').innerHTML = 'М = ' + ((r * r * growth * 6.5) / 1000).toFixed(2) + ' кг';
        $("#pmm").fadeIn(400);
        getG();
        getF();
        getH();
        getS();
        getSh();
    }
}
function bmp() {
    growth = Number(document.getElementById('growth-4').value);
    const cubit = Number(document.getElementById('cubit').value);
    const wrist = Number(document.getElementById('wrist').value);
    const knee = Number(document.getElementById('knee').value);
    const ankle = Number(document.getElementById('ankle').value);

    if (cubit !== '' && wrist !== '' && knee !== '' && ankle !== '') {
        const o = (cubit + wrist + knee + ankle) / 4;

        document.getElementById('bmp').innerHTML = 'O = ' + ((o * o * growth * 1.2) / 1000).toFixed(2) + ' кг';
        $("#bmp").fadeIn(400);
        getG();
    }
}