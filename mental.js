var vidArr, vidArr2 = []
var num;
        
    function equal() {
        vidArr = ["https://www.youtube.com/embed/-OAjfrhuwRk","https://www.youtube.com/embed/agPsqRDNS3g","https://www.youtube.com/embed/_gJ5V525SCk","https://www.youtube.com/embed/ZWVcSwcbDK0","https://www.youtube.com/embed/nLnxWlXf3OM","https://www.youtube.com/embed/NQcYZplTXnQ","https://www.youtube.com/embed/oWjSdwzOA6k"];
        vidArr2 = vidArr;
    }
    
    function mentalVid() {
        if (vidArr2.length == 0) {
            equal();
            num = Math.floor(Math.random()*vidArr2.length);
        }
        else {
            num = Math.floor(Math.random()*vidArr2.length);
        }
        document.getElementById("video").src = vidArr2[num];
        vidArr2.splice(num, 1);
    }   