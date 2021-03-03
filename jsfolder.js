var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}



function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["nom"] = document.getElementById("nom").value;
    formData["prenom"] = document.getElementById("prenom").value;
    formData["salaire"] = document.getElementById("salaire").value;
    formData["specialite"] = document.getElementById("specialite").value;
    return formData;
}



function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nom;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prenom;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salaire;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.specialite;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onclick="onEdit(this)" type="button" class="btn btn-primary Modifier">Modifier</button>
                       <button onclick="onDelete(this)" type="button" class="btn btn-danger supprimer">Supprimer</button>`;
    
}



function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("salaire").value = "";
    document.getElementById("specialite").value = "";
    selectedRow = null;
}



function onEdit(td) {
  $(document).ready(function () {
    $('#form').show()
    $('#table').hide()
    $('#ajouter').hide()
  }); 
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nom").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prenom").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salaire").value = selectedRow.cells[3].innerHTML;
    document.getElementById("specialite").value = selectedRow.cells[4].innerHTML;
}



function updateRecord(formData) { 
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.nom;
    selectedRow.cells[2].innerHTML = formData.prenom;
    selectedRow.cells[3].innerHTML = formData.salaire;
    selectedRow.cells[4].innerHTML = formData.specialite;
}

function onDelete(td) {
    if (confirm('Vous etes sure de supprimer ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}



$(document).ready(function () {

  $("#ajouter").on('click',function () {

      $('#table').hide()
      $('#form').show()
      $('#ajouter').hide()

  });
  $("#save").on('click',function () {

    $('#table').show()
    $('#form').hide()
    $('#ajouter').show()
  });

  
  
  $(".showInfo").click(function(){
    $("#article1").show();
    $('.title').hide();
  });

  $(".return").click(function(){
    $("#article1").hide();
    $('.title').show();
  });


}); 



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
  

      