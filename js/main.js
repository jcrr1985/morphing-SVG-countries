
	$("#spain, #c1, #c2").hide();
		
		var c1 = $("#c1");
		var c2 = $("#c2");
		var india = $("#india");
		var spa = $("#spa");

		var spain = $("#spain")



	function toSpain(){
		$("#spain").css("transform","scale(1.5)")

		 t = TweenLite.to(india, 1, {
		  morphSVG: "#spain",
		  paused: true
		}).timeScale(1).play();	
		
		$('#progressbar1').LineProgressbar({
		  percentage:47,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);
		
		$('#progressbar2').LineProgressbar({
		  percentage:24,
		  fillBackgroundColor: '#BC204B',
		    height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);		
		
		$('#progressbar3').LineProgressbar({
		  percentage:33,
		  fillBackgroundColor: '#00a3a1',
		  height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);	
		
	}
		
	function toC1(){
		 t2 = TweenLite.to(india, 1, {
		  morphSVG: "#c1",
		  paused: true
		}).timeScale(1).play();
		
		$('#progressbar1').LineProgressbar({
		  percentage:33,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);
		
		$('#progressbar2').LineProgressbar({
		  percentage:84,
		  fillBackgroundColor: '#BC204B',
		    height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);		
		
		$('#progressbar3').LineProgressbar({
		  percentage:57,
		  fillBackgroundColor: '#00a3a1',
		  height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);	
	}

	//Initializing Bars to Zero Values  ---> OPTIMIZAR ESTE CÓDIGO, Super man! ;)

		$('#progressbar1').LineProgressbar({
		  percentage:0,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);

		$('#progressbar2').LineProgressbar({
		  percentage:0,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);

		$('#progressbar3').LineProgressbar({
		  percentage:0,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);

		//END of: Initializing Bars to Zero Values.


		//Optimizar este código!... acer una sola funcion que acepte parametrpos , Declarar una sola funcion para las barras de 
		//progreso tambien y leugo llamarla 3 veces dentro de toXpais() pasandole parametros.
		
	function toC2(){
		 t2 = TweenLite.to(india, 1, {
		  morphSVG: "#c2",
		  paused: true
		}).timeScale(1).play();	
		
	$('#progressbar1').LineProgressbar({
		  percentage:36,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);
		
		$('#progressbar2').LineProgressbar({
		  percentage:61,
		  fillBackgroundColor: '#BC204B',
		    height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);		
		
		$('#progressbar3').LineProgressbar({
		  percentage:19,
		  fillBackgroundColor: '#00a3a1',
		  height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);	
	}


	/*To toLuxembourg*/

	function toLuxembourg(){
		 t2 = TweenLite.to(india, 1, {
		  morphSVG: "#luxembourg",
		  paused: true
		}).timeScale(1).play();	
		
	$('#progressbar1').LineProgressbar({
		  percentage:74,
		  fillBackgroundColor: '#00338D',
		   height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);
		
		$('#progressbar2').LineProgressbar({
		  percentage:22,
		  fillBackgroundColor: '#BC204B',
		    height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);		
		
		$('#progressbar3').LineProgressbar({
		  percentage:45,
		  fillBackgroundColor: '#00a3a1',
		  height: '20px',
		  radius: '0px',
		  width:'100%',
			
		},1000);	
	}

	function from(){
		  t.timeScale(3).reverse();
	}
		
	$("li").hover(function(){
		 $(this).css("color","#00338D")
	},
	function(){
		 $(this).css("color","#000")
	});
	

	//TODAS ESTAS INSTRUCCIONES BELOW HOVER SON REPETITIVAS: 
	//HACER UNA UNICA FUNCION que contenga todo el codido de una sola de las funciones toXpais().
	// Algo como: 

	//function morphCountry(countryNameParam, progressBarParam1,progressBarParam2,progressBarParam3){ 
		//y capturar y colocar  'countryNameParam' como valor de la propiedad morphSVG,
		// del objeto que se pasa como tercer parametro al metodo tweenlite.to() contenido en esta funcion generica toXpais().

		// Los parametros progressBarParam1 ,2 y 3, se pasarán como valor a las propiedades 'percentage' del metodo
		//LineProgressbar
	//}

	 $("#spa").hover(
		 function(){
 			toSpain();
			
		 }		  
	 )
				
		
	 $("#ind").hover(
 		function(){
			toC1()
		}
	)		
		
			
	 $("#lux").hover(
 		function(){
		toC2()
		}
	)
			

