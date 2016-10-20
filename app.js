var palavras =["Acuar","Aplacar","Apocopar","Arfonte","Arretar","Burra","Escurão","Exornar","Exorar","Jadeita","Lênia","Lhano","Mansarda","Peculato","Secesso","Ucharia","Admoesta","Alarido","Alcoólatra","Alcunha","Alfândega ","Anticonstitucionalissimamente","Âmago","Aracnídeo","Ardiloso","Arroubo","Auscultador","Autoescola","Balbúrdia","Beatificação","Belicoso","Besugo","Bonançoso","Dilapidar","Engodar","Esbaforidamente","Exacerbado","Exceder","Excesso","Fenecimento","Fugaz","Fleumático","Frugal","Frugífero","Homizio","Ígneo","Ignóbil","Incomensurável","Implícito","Insolente","Irrupção","Incólume","Inócuo","Janota","Justapor","Loquaz","Melindre","Melissorafia","Mendicidade","Minucioso","Nefropata","Nictofobia","Nódoa","Obeso","Obsoleto","Obumbrar","Óbvio","Occipital","Otorrinolaringologista","Pachorrento","Pacóvio","Parco","Pedante","Perdulário","Perene","Permuta","Pernóstico","Petiz","Plissado","Perscrutar","Pândego","Pérfido","Ruar","Recôndito","Rubicundo","Sumidade","Suscitar","Tergiversar","Taciturno","Tênue","Veneta"];

var message = new SpeechSynthesisUtterance($("#text").val());
var voices = speechSynthesis.getVoices();



$("input").on("change", function () {
    console.log($(this).attr("id"), $(this).val());
    message[$(this).attr("id")] = $(this).val();
});

$("select").on("change", function () {
   
});

$("button").on("click", function () {
         message.voice =  speechSynthesis.getVoices()[15];
    speechSynthesis.speak(message);
});

// Hack around voices bug
var interval = setInterval(function () {
    voices = speechSynthesis.getVoices();
    if (voices.length) clearInterval(interval); else return;

    for (var i = 0; i < voices.length; i++) {
        $("select").append("<option value=\"" + i + "\">" + voices[i].name + "</option>");
    }
}, 10);