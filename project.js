/* Before Page */
let tableElemants =[
    {
        "firmaAdi": "Doğa Tohumculuk",
        "isiUstlenenFirma": "",
        "konum":"Ereğli/Konya",
        "ACguc":"10500Kw",
        "DCguc":"10500Kw",
        "araziCati":"Arazi",
        "isBedeli":"10.000.000$",
        "hesaplananMaliyet":"10.000.000$",
        "gerceklesenMaliyet":"10.000.000$",
        "tesvik":"20.000$",
        "KDVTuari":"10.000$",
        "hesaplananKarZarar":"10.000$",
        "gerceklesenKarZarar":"10.000$",
        "isinBaslamaTarihi":"10.02.2023",
        "isin BitisTarihi":"10.02.2023",
        "durum":"-/"
    },
    {
        "firmaAdi": "Doğa Tohumculuk",
        "isiUstlenenFirma": "",
        "konum":"Ereğli/Konya",
        "ACguc":"10500Kw",
        "DCguc":"10500Kw",
        "araziCati":"Arazi",
        "isBedeli":"10.000.000$",
        "hesaplananMaliyet":"10.000.000$",
        "gerceklesenMaliyet":"10.000.000$",
        "tesvik":"20.000$",
        "KDVTuari":"10.000$",
        "hesaplananKarZarar":"10.000$",
        "gerceklesenKarZarar":"10.000$",
        "hesaplananKarOrani":"10.000$",
        "gerceklesenKarOrani":"10.000$",
        "isinBaslamaTarihi":"10.02.2023",
        "isin BitisTarihi":"10.02.2023",
        "durum":"-/"
    }
];
displayTable()

/*  Search Box  */
document.querySelector('.icon').onclick = function(){
    document.querySelector('.search').classList.toggle('active')
    }

/*  Ekleme Butonları*/
function modalAc(){

}

//-------------------
document.getElementById("gelir-ac").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("gelir-modal").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "none";
});


document.getElementById("gider-ac").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "flex";
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("gider-modal").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("is-ac").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
});
document.getElementById("is-modal").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "none";
});


document.getElementById("project-ac").addEventListener("click", function(){
    document.querySelector(".projeBaslatWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("project-modal").addEventListener("click", function(){
    document.querySelector(".projeBaslatWindow").style.display = "none";
});
document.getElementById("firmaAdd-modal").addEventListener("click", function(){
    document.querySelector(".firmaAddWindow").style.display = "none";
});
// document.getElementById("yeni-firma-window-ac").addEventListener("click", function(){
//     document.querySelector(".firmaAddWindow").style.display = "flex";
// });



document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("mySelect");
    selectElement.addEventListener("change", function() {
      var selectedOptionId = this.options[this.selectedIndex].id;
      if (selectedOptionId === "option1") {
        checkOption1();
      } else if (selectedOptionId === "option2") {
        checkOption2();
      }
    });
  
    function checkOption1() {
      console.log("Seçenek 1 tıklandı!");      
        document.querySelector(".firmaAddWindow").style.display = "flex";
    
    }
  
    function checkOption2() {
      console.log("Seçenek 2 tıklandı!");n
    }
  });

//--------------------------------------------//
/*  Tabloda Elemanları Gösterme */



function displayTable(){
    document.querySelector("#tbody").innerHTML="";
    for(element of tableElemants){
        let tr =`
        <tr>
        <td ><a href="project-start.html">${element.firmaAdi}</a></td>
        <td><a href="project-start.html">${element.konum}</a></td>
        <td><a href="project-start.html">${element.ACguc}</a></td>
        <td><a href="project-start.html">${element.hesaplananMaliyet}</a></td>
        <td><a href="project-start.html">${element.araziCati}</a></td>
        <td><a href="project-start.html">${element.isinBaslamaTarihi}</a></td>
        <td><a href="project-start.html">${element.durum}</a></td>
        </tr>    
    `;    
    document.querySelector("#tbody").insertAdjacentHTML("beforeend", tr);
    }    
}
document.querySelector("#project-create-btn").addEventListener("click", projectAdd);


function projectAdd(event){
    if(document.querySelector("#firmaAdiInput").value=="")
    {
       alert("Lütfen firma adını giriniz!");
    }

    else{
        tableElemants.push({
            "firmaAdi": document.querySelector("#firmaAdiInput").value,
            "isiUstlenenFirma": document.querySelector("#isiUstlenenFirmaInput").value,
            "konum":document.querySelector("#konumInput").value,
            "isBedeli":document.querySelector("#isBedeli").value,
            "ACguc":document.querySelector("#acGuc").value,
            "DCguc":document.querySelector("#dcGuc").value,
            "araziCati":document.querySelector("#araziCati").value,
            "isBedeli":document.querySelector("#konumInput").value,
            "hesaplananMaliyet":document.querySelector("#hesaplananMaliyet").value,
            "gerceklesenMaliyet":document.querySelector("#gerceklesenMaliyet").value,
            "tesvik":document.querySelector("#tesvik").value,
            "KDVTuari":document.querySelector("#kdvTutari").value,
            "hesaplananKarZarar":document.querySelector("#hesaplananKarZarar").value,
            "gerceklesenKarZarar":document.querySelector("#gerceklesenKarZarar").value,
            "hesaplananKarOrani":document.querySelector("#hesaplananKarOrani").value,
            "gerceklesenKarOrani":document.querySelector("#gerceklesenKarOrani").value,
            "isinBaslamaTarihi":document.querySelector("#tarih").value,
            "isinBitisTarihi":document.querySelector("#tarih2").value,
            "durum":"-/"
        });       
        document.querySelector(".modal-3").style.display = "none";
        displayTable()
    }
    event.preventDefault();
}

document.querySelector("#project-create-btn").addEventListener("click", projectAdd);

/* Dosya ekle */ 

let giderFileInput = document.getElementById("gider-file-input");
let giderFileList = document.getElementById("gider-files-list");
let giderNumOfFiles = document.getElementById("gider-num-of-files");
giderFileInput.addEventListener("change", () => {
    giderFileList.innerHTML = "";
    giderNumOfFiles.textContent = `${giderFileInput.files.length} Files Selected`;
  for (i of giderFileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    giderFileList.appendChild(listItem);
  }
});
let isFileInput = document.getElementById("is-file-input");
let isFileList = document.getElementById("is-files-list");
let isNumOfFiles = document.getElementById("is-num-of-files");
isFileInput.addEventListener("change", () => {
    isFileList.innerHTML = "";
    isNumOfFiles.textContent = `${isFileInput.files.length} Files Selected`;
  for (i of isFileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    isFileList.appendChild(listItem);
  }
});
let gelirFileInput = document.getElementById("gelir-file-input");
let gelirFileList = document.getElementById("gelir-files-list");
let gelirNumOfFiles = document.getElementById("gelir-num-of-files");
gelirFileInput.addEventListener("change", () => {
    gelirFileList.innerHTML = "";
    gelirNumOfFiles.textContent = `${gelirFileInput.files.length} Files Selected`;
  for (i of gelirFileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    gelirFileList.appendChild(listItem);
  }
});

 
