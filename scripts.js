function consultar(){

    var texto = document.getElementById("palabra").value;
    let urlAPI = "https://www.themealdb.com/api/json/v1/1/search.php?f="+texto

    const api = new XMLHttpRequest ();
    api.open('GET', urlAPI, true);
    api.send();
    api.onreadystatechange = function (){
        if(this.status==200 && this.readyState==4 )
            {
                let bd=JSON.parse(this.responseText);
                dbpuro = bd.meals;
                console.log (bd);
                var datos="";

                for(var i=0; i < dbpuro.length; i++)

                    {

                        datos+= "<tr>" +
                        "<td>"+dbpuro[i].strMeal+ "</td>"+
                        "<td>"+dbpuro[i].strCategory+ "</td>"+
                        "<td>"+dbpuro[i].strArea+ "</td>"+
                        "<td><img src="+dbpuro[i].strMealThumb+" width = '50' heigt = '50'></td>"+
                        "</tr>";
                    }
                document.getElementById("tabla").innerHTML=datos;

            }
    }

}
function visualizar(){


    let urlAPI = "https://www.themealdb.com/api/json/v1/1/categories.php"

    const api = new XMLHttpRequest ();
    api.open('GET', urlAPI, true);
    api.send();
    api.onreadystatechange = function (){
        if(this.status==200 && this.readyState==4 )
            {
                let bd=JSON.parse(this.responseText);
                dbpuro = bd.categories;
                console.log (bd);
                var datos="";

                for(var i=0; i < dbpuro.length; i++)

                    {

                        datos+= "<tr>" +
                        "<td>"+dbpuro[i].idCategory+ "</td>"+
                        "<td>"+dbpuro[i].strCategory+ "</td>"+

                        "<td>"+dbpuro[i].strCategoryDescription+ "</td>"+
                        "<td><img src="+dbpuro[i].strCategoryThumb+" width = '50' heigt = '50'></td>"+
                            "</tr>";
                    }
                document.getElementById("tabla").innerHTML=datos;

            }
    }

}
