
let firmaTables=[
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    },
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    }
];
let firmaTables2=[
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    },
    {   
        "detay": "paneş",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    }
];
let table=[
    {
        "id":"1",
        "firmaAdi": "Firma 1",
        "detaylar": firmaTables,
    },
    {
        "id":"2",
        "firmaAdi": "Firma 2",
        "detaylar": firmaTables2,
    }
];
let sagfirmaTables=[
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    },
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    }
];
let sagfirmaTables2=[
    {   
        "detay": "Kablo",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    },
    {   
        "detay": "paneş",
        "adet": "30 Metre",
        "maliyet":"30.000$",
        "tarih":"07.09.2019"   
    }
];
let sagtable=[
    {
        "id":"1",
        "firmaAdi": "Firma 1",
        "detaylar": sagfirmaTables,
    },
    {
        "id":"2",
        "firmaAdi": "Firma 2",
        "detaylar": sagfirmaTables2,
    }
];
    let view1 = document.querySelectorAll(".view-1");
    let view2 = document.querySelectorAll(".view-2"); 

function displayFirma(){
    document.querySelector("#firmaUl").innerHTML="";
    for(element of table){
        let li =`
        <li id="${element.id}" onclick="displayTable(${element.id}),displayTable2(${element.id})">${element.firmaAdi}</li>
    `;    
    document.querySelector("#firmaUl").insertAdjacentHTML("beforeend", li);
    }    
}

displayFirma();

function displayTable(id){
    for(let index in table){
        if(table[index].id == id){
            document.querySelector("#tbody").innerHTML="";
            for(element of table[index].detaylar){
                let tr =`
                <tr>
                <td ><a href="project-start.html">${element.detay}</a></td>
                <td><a href="project-start.html">${element.adet}</a></td>
                <td><a href="project-start.html">${element.maliyet}</a></td>
                <td><a href="project-start.html">${element.tarih}</a></td>
                </tr>    
            `;    
            document.querySelector("#tbody").insertAdjacentHTML("beforeend", tr);
            }               
            for(let index of view1){
                index.style.display ='flex';
                    
            }
            for(let index of view2){
                index.style.display ='none';
            }            
        }
    }
}
function displayTable2(id){
    for(let index in sagtable){
        if(table[index].id == id){
            document.querySelector("#tbody-2").innerHTML="";
            for(element of table[index].detaylar){
                let tr =`
                <tr>
                <td ><a href="project-start.html">${element.detay}</a></td>
                <td><a href="project-start.html">${element.adet}</a></td>
                <td><a href="project-start.html">${element.maliyet}</a></td>
                <td><a href="project-start.html">${element.tarih}</a></td>
                </tr>    
            `;    
            document.querySelector("#tbody-2").insertAdjacentHTML("beforeend", tr);
            }               
            for(let index of view1){
                index.style.display ='flex';
                    
            }
            for(let index of view2){
                index.style.display ='none';
            }            
        }
    }
} 




/*  Search Box  */
document.querySelector('.icon').onclick = function(){
    document.querySelector('.search').classList.toggle('active')
    }
    
    function modalAc(){

    }
    
    //-------------------
    
    
    document.getElementById("gider-ac").addEventListener("click", function(){
        document.querySelector(".giderWindow").style.display = "flex";
       
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
    });
    document.getElementById("is-modal").addEventListener("click", function(){
        document.querySelector(".isWindow").style.display = "none";
    });
    
    
 //-----
 document.getElementById("head-gider-ac").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "flex";
   
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("gider-modal").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("tablotr-is-ac").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
});
document.getElementById("is-modal").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "none";
});
//-----
document.getElementById("tabletr-gider-ac").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "flex";
   
});
document.getElementById("gider-modal").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("head-is-ac").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
});
document.getElementById("is-modal").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "none";
});

/*  Total Maliyet Tablosu   */
document.getElementById("toplam-maliyet").addEventListener("click", function(){       
    for(let index of view1){
        index.style.display ='none';
        
    }
    for(let index of view2){
        index.style.display ='block';
    }
});

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
