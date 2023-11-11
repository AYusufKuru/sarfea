document.getElementById("gelir-ac").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "flex";    
});
document.getElementById("gelir-modal").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "none";
});


/* Dosya ekle */ 

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