
 function saveNewProduct(){
    if(typeof(Storage) !== "undefined") {

   if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont)+1;
   } else {
      localStorage.cont = 1;
   }
   
   product= document.getElementById('category').value + ' ; ' + document.getElementById('productName').value + ' ; ' + document.getElementById('productMarking').value + 
   ' ; ' + document.getElementById('codeEAN').value + ' ; ' + document.getElementById('codeNCM').value + ' ; ' + document.getElementById('price').value + 
   ' ; ' + document.getElementById('quantity').value + ' ; ' + document.getElementById('textprod').value;
   localStorage.setItem("product_: "+localStorage.cont,product);

   alert(`Produto Cadastrado Com Sucesso!`);
   

 } else {
      
   }
}



function saveNewClient(){
   if(typeof(Storage) !== "undefined") {

   if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont)+1;
   } else {
      localStorage.cont = 1;
   }
   
   client= document.getElementById('nome').value + ' ; ' + document.getElementById('email').value + ' ; ' + document.getElementById('rg').value +
   ' ; ' + document.getElementById('cpf').value + ' ; ' + document.getElementById('tel1').value + ' ; ' + document.getElementById('tel2').value +
   ' ; ' + document.getElementById('cep').value + ' ; ' + document.getElementById('logradouro').value + ' ; ' + document.getElementById('complemento').value + ' ; ' + document.getElementById('bairro').value +
   ' ; ' + document.getElementById('cidade').value + ' ; ' + document.getElementById('uf').value + ' ; ';
   localStorage.setItem("client_: "+localStorage.cont,client);
     
   alert(`Cliente Cadastrado Com Sucesso!`);

   } else {

   }
}   



