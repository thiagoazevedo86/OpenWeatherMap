//cidades
var cidade = ["santo andre", "sao caetano do sul", "sao bernardo do campo", "sorocaba"];
//key API
var key = ("6a4b5faa157f0bf47e3ad98494087052");

//Loop para gera clima das cidades
for  (var i = 0; i < 4; i++) {
	//URL API
	var url = ("http://api.openweathermap.org/data/2.5/forecast?q="+cidade[i]+",br&units=metric&mode=json&lang=pt&APPID="+key);
	//Chamada Itens JSON
	$.getJSON(url, function(json) {
		//chamada cidade
		var cidade = json.city.name;
		//chamada icons
		var icone = [json.list[0].weather[0].icon,
					 json.list[2].weather[0].icon, 
					 json.list[4].weather[0].icon, 
					 json.list[6].weather[0].icon,
					 json.list[8].weather[0].icon];		
		//chamada temperatura
		var temperatura = [json.list[0].main.temp + "ºC", 
						   json.list[2].main.temp + "ºC", 
						   json.list[4].main.temp + "ºC", 
						   json.list[6].main.temp + "ºC",
						   json.list[8].main.temp + "ºC"];				
		//chamada descrição
		var descricao = [json.list[0].weather[0].description,
						 json.list[2].weather[0].description, 
						 json.list[4].weather[0].description, 
						 json.list[6].weather[0].description,
						 json.list[8].weather[0].description];
		//chamda data
		var data = [json.list[0].dt_txt,
					json.list[7].dt_txt, 
					json.list[15].dt_txt, 
					json.list[23].dt_txt,
					json.list[31].dt_txt];
		// Transformando informações JSON em HTML
			$("<div>" +
				"<div class=\"bloco0\">" +
					"<div class=\"cidade\">" + cidade +"</div>" +
					"<div class=\"data\">" + data[0] + "</div>" +
					"<div class=\"icone\">" + "<img src=\"http://openweathermap.org/img/w/" + icone[0] + ".png\">" +"</div>" +
					"<div class=\"temperatura\">" + temperatura[0] + "</div>" +
					"<div class=\"descricao\">" + descricao[0] + "</div>" +
				"</div>" +
				
				"<div class=\"bloco1\">" +
					"<div class=\"icone\">" + "<img src=\"http://openweathermap.org/img/w/" + icone[1] + ".png\">" +"</div>" +
					"<div class=\"descricao\">" + descricao[1] + "</div>" +
					"<div class=\"temperatura\">" + temperatura[1] + "</div>" +
				"</div>" +
				
				"<div class=\"bloco2\">" +
					"<div class=\"icone\">" + "<img src=\"http://openweathermap.org/img/w/" + icone[2] + ".png\">" +"</div>" +
					"<div class=\"descricao\">" + descricao[2] + "</div>" +
					"<div class=\"temperatura\">" + temperatura[2] + "</div>" +								
				"</div>" +
				
				"<div class=\"bloco3\">" +
					"<div class=\"icone\">" + "<img src=\"http://openweathermap.org/img/w/" + icone[3] + ".png\">" +"</div>" +
					"<div class=\"descricao\">" + descricao[3] + "</div>" +
					"<div class=\"temperatura\">" + temperatura[3] + "</div>" +								
				"</div>" +
				
				"<div class=\"bloco4\">" +
					"<div class=\"icone\">" + "<img src=\"http://openweathermap.org/img/w/" + icone[4] + ".png\">" +"</div>" +
					"<div class=\"descricao\">" + descricao[4] + "</div>" +
					"<div class=\"temperatura\">" + temperatura[4] + "</div>" +
				"</div>" +
			"<div>"
			).addClass('bloco').attr({id:'bloco'}).appendTo('body');
	});
}

