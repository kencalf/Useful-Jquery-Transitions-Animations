 $(document).ready(function() {
	 
//FADING IN THE WHOLE WEBSITE-------------------	 
	 $('html').hide();	
	 $('#logo').hide().transition({perspective: '300px',rotateX: '270deg',delay:0});
	 $('nav').hide().transition({ y: '-40px' });
	 $('#div1').hide();
	 $(document).ready(function(){
	 $('.circle,.circle1, .content').fadeOut(1000);	 
	 $('html').fadeIn(100).delay(0);
	 $('#logo').fadeIn(500).transition({perspective: '300px',rotateX: '360deg',delay:0});
	 $('nav').fadeIn(500).transition({ y: '100px' });
	 $('#div1').fadeIn(2000);
   });
   
   
 
 //end of functions--------------------------------------- 
 });
 