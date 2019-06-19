function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      document.getElementById('arquivo').innerHTML += (`<img src="${reader.result}" />`)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }


 document.querySelector('#files').addEventListener('change', function() {
  getBase64(this.files[0]);
 });

 
 
