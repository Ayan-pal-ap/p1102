Webcam.set({
width:350,
Height:350,
image_format:Png,
Png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(functio(ndata_uri));
    document.getElementById('result').innerHTML="<img src='"+data_uri+"'>"

}
