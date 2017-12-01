var app = new Vue({
  el: '.container',
  data: {
      taches: []
  },
  created: function () {
    console.log("Démarrage TODO-APP");
  },
  beforeMount: function() {
     this.recupererListe();
  },
  methods: {
  	recupererListe: function(){
		fetch('api/liste.php', {method: "GET", credentials: 'same-origin'})
		.then(function(response){
		return response.json(); //récupération des todo
		})
		.then(function(response) {
		app.taches = response;
		})
		.catch(function(error) {
		console.log('Récupération impossible: ' + error.message);
		});
  	},
  	  ajout: function () {
      var contenu = document.getElementById("texte").value;
      if(contenu == ""){ //Si le todo est vite alors message d'erreur
        swal("Oops","Vous devez specifier du texte…" , "error" );
      }else{ // Sinon appel de l'API
		var form = new FormData();
		form.append('texte', contenu);
		fetch("api/creation.php", {
		  method: "POST",
		  body: form,
		  credentials: 'same-origin'
		})
		.then(function(response){
		  return response.json();
		})
		.then(function(response) {
		  if(response.success){
		    app.recupererListe();
		  }else{
		  swal("Oops","Vous devez specifier du texte…" , "error" );
		  }
		})
		.catch(function(error) {
		  console.log('Récupération impossible: ' + error.message);
		});
      }
    },
    terminer: function(id){
    	fetch('api/terminer.php?id=' +id, {
    		method: "GET",
    		credentials: 'same-origin'
    	}).then(function(response){
		return response.json();
		}).then(function(response) {
		app.recupererListe();
		}).catch(function(error) {
		console.log('Récupération impossible: ' + error.message);
		})
    	},
    suppression: function(id){
    	fetch('api/suppression.php?id=' +id, {
    		method: "GET",
    		credentials: 'same-origin'
    	}).then(function(response){
		return response.json();
		}).then(function(response) {
		app.recupererListe();
		}).catch(function(error) {
		console.log('Récupération impossible: ' + error.message);
		})
    	}	


		
		
    }
  })



