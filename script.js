let sutUrunleri=["peynir","40","süt","12","yoğurt","27","kaymak","50","teryağı","75"];
let gidaUrunleri=["makarna","6","pirinç","30","bulgur","35","arpa şehriye","5","mercimek","25"];
let temizlikUrunleri=["çamaşır suyu","30","sabun","7","deterjan","80","şampuan","35","bulaşık süngeri","15"];
let i;
for(i=0;i<document.getElementsByName("kategori").length;i++){
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}

function urunleriGetir(){
    const silinecekler=document.getElementById("urunPaneli");
    for(i=0;i<silinecekler.length;i++){
        silinecekler.removeChild(silinecekler.firstChild);
    }

    if(document.getElementById("kategoriSut").checked){
        for(i=0;i<sutUrunleri.length;i+2){
            let urunAciklama=document.createElement("label");
            let urunSecenek=document.createElement("input");
            document.getElementById("urunPaneli").appendChild(urunAciklama);
            document.getElementById("urunPaneli").appendChild(urunSecenek);
            urunSecenek.type="checkbox";
            urunSecenek.setAttribute("name","urunler");
            urunAciklama.innerHTML=sutUrunleri[i];
            urunSecenek.value=sutUrunleri[i];
            urunAciklama.setAttribute("for","urunler");
            urunAciklama.setAttribute("class","aciklama");
        }
    }
    else if(document.getElementById("kategoriGida").checked){
        for(i=0;i<gidaUrunleri.length;i+2){
            let urunAciklama=document.createElement("label");
            let urunSecenek=document.createElement("input");
            document.getElementById("urunPaneli").appendChild(urunAciklama);
            document.getElementById("urunPaneli").appendChild(urunSecenek);
            urunSecenek.type="checkbox";
            urunSecenek.setAttribute("name","urunler");
            urunAciklama.innerHTML=gidaUrunleri[i];
            urunSecenek.value=gidaUrunleri[i];
            urunAciklama.setAttribute("for","urunler");
            urunAciklama.setAttribute("class","aciklama");
        }
    }
    else if(document.getElementById("kategoriTemizlik").checked){
        for(i=0;i<temizlikUrunleri.length;i+2){
            let urunAciklama=document.createElement("label");
            let urunSecenek=document.createElement("input");
            document.getElementById("urunPaneli").appendChild(urunAciklama);
            document.getElementById("urunPaneli").appendChild(urunSecenek);
            urunSecenek.type="checkbox";
            urunSecenek.setAttribute("name","urunler");
            urunAciklama.innerHTML=temizlikUrunleri[i];
            urunSecenek.value=temizlikUrunleri[i];
            urunAciklama.setAttribute("for","urunler");
            urunAciklama.setAttribute("class","aciklama");
        }
    }
}