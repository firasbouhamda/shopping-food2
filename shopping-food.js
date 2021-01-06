var escaloppePoulet= {
    id:1,
      libelleProduit : "Escalope de poulet", prix : "12",
       image:"img/escaloppe-poulet-2672.jpg", classeCSS:"escalope"

     }
     
     var saladeComposee=
     {
         id:2,
      libelleProduit : "Salade composée", prix : "9",
       image:"img/salade-composee.jpg", classeCSS:"salade"

     }
     var paellaMini=
     {
         id:3,
      libelleProduit : "paella mini", prix : "23",
       image:"img/paella-mini-black.jpg", classeCSS:"paella"

     }
     var plats=[escaloppePoulet,saladeComposee,paellaMini]
     var panier=[]
     function getPlatById(platId)
     {
         var platTrouve = null
         for(plat of plats)
         {
             if (plat.id==platId)
             {
                 platTrouve = plat
                 break
             }
         }
        
        return platTrouve
     }
     function ajouterPlat(platId)
     {

          var quantiteParPlatTrouve = null
         for(quantiteParPlat of panier)
         {
            if (quantiteParPlat[0] === platId)
            {
                quantiteParPlatTrouve = quantiteParPlat
                break
            }
         }
         if (quantiteParPlatTrouve == null)
         {
             panier.push([platId,1])
         }
         else
         {
             quantiteParPlatTrouve[1]++
          }
          afficherPanier()
     }
     function afficherPanier()
     {
      var panierElement = document.getElementById('panier-items')
         panierElement.innerHTML = ''
         for(quantiteParPlat of panier)
         {
             var plat = getPlatById(quantiteParPlat[0])
             var platElement = document.createElement('div')
             var platHTML = plat.libelleProduit +' <button onclick="plusPlat('+plat.id+')">+ </button>'+ quantiteParPlat[1]+'<button onclick="moinsPlat('+plat.id+')"> - </button>'
             platHTML += '<button onclick="supprimerPlat('+plat.id+')"> supprimer </button>'
             platElement.innerHTML = platHTML
                 panierElement.appendChild(platElement)

         }
         var totalElement = document.getElementById("total")
         totalElement.innerHTML = prixTotal()
     }
      function supprimerPlat(platId)
      {
          var quantiteParPlatTrouve = null
          for(quantiteParPlat of panier)
         {
            if (quantiteParPlat[0] === platId)
            {
                quantiteParPlatTrouve = quantiteParPlat
                break
            }
         }
         var indexQuantiteParPlatTouve = panier.indexOf(quantiteParPlatTrouve)
         panier.splice(indexQuantiteParPlatTouve)
         afficherPanier()
      }
    function plusPlat(platId)
    {
          for(quantiteParPlat of panier)
         {
            if (quantiteParPlat[0] === platId)
            {
              quantiteParPlat[1]++
                break
            }
          }
          afficherPanier()
    }
    function moinsPlat(platId)
    {
          for(quantiteParPlat of panier)
         {
            if (quantiteParPlat[0] === platId)
            {         
                if( quantiteParPlat[1]>0) 
                {
                     quantiteParPlat[1]--
                } 
             
                break
            } 
          }
          afficherPanier()
         
    }
    function prixTotal()
    {
        var total = 0
        for(quantiteParPlat of panier)
         {
             var plat = getPlatById(quantiteParPlat[0])
            total += plat.prix * quantiteParPlat[1]
          }
          return total
    }

    function like(heart)
    {
     if(heart.classList.contains("selected"))
     {
         heart.classList.remove('selected')
         
     }
     else{
      heart.classList.add('selected')
     }
                
    }
    function dontlike(heart)
    {
        heart.class = "like-heart"
        heart.onclick="like(this)"
    }
    var itemsElement=document.getElementById('items')
for(plat of plats)
       {
                var itemElement = document.createElement('div')
                itemElement.class=plat.classeCSS  
                var item='<img class="image-plat" src="'+plat.image+'" alt="'+plat.libelleProduit+'">'
                 item +='<h2> '+plat.libelleProduit+'</h2>'
                  item +='<h4>prix = '+plat.prix+' DT </h4>'
                  item += '<div class="like-heart" src="img/heart.png" onclick="like(this)"></div>'
                  item+='<button onclick="ajouterPlat('+plat.id+')"> ajouter </button>'
                 itemElement.innerHTML=item
                   itemsElement.appendChild(itemElement)
       }