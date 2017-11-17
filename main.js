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
		return response.json();
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
      if(contenu == ""){
        swal("Oops","Vous devez spécifier du texte…" , "error" );
      }else{
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
		    // Sweetalert pour l’utilisateur.
		  }
		})
		.catch(function(error) {
		  console.log('Récupération impossible: ' + error.message);
		});
      }
    },
    terminer: function(id){
    	fetch('api/terminer.php', {
    		method: "GET",
    		credentials: 'same-origin'
    	})
    	if("terminer.php?id=="+id){
    		.then(function(response){
		return response.json();
		})
		.then(function(response) {
		app.recupererListe();
		})
    	}
    	else{
    		.catch(function(error) {
		console.log('Récupération impossible: ' + error.message);
		});
    	}
		
		
    }
  }


})
