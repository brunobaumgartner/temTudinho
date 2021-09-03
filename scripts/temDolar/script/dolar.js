console.log("Usanso Fetch");
fetch(/* URL da API */"https://api.hgbrasil.com/finance?key=50ea43b3")
    .then(function(response){
        return response.jsonCORS();
    })
    .then(function(data){
        console.log(data);
    });