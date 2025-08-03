// JavaScript Document


		var buttons;
		var snoekButton;
		var baarsButton;
		var snoekbaarsButton;
		var meervalButton;

		var tDL = false;

		
		function timeDelay()
		{

			window.onload = setTimeout(function() {

				tDL = true;
	
			}, 3000);

		}

		
		function strobo()
		{
	


			var logo = document.getElementById("bfLogo");
			var logoY = document.getElementById("bfLogoY");

			logo.onload = setTimeout(function() {

				logo.style.animationName = "stroboLogo";			
				logo.style.animationDuration = "0.4s";
				logo.style.transition = "ease-in-out";
				logo.style.animationTimingFunction = "cubic-bezier(1, 0.44, 1, 0.09);";


			}, 5880);

			logoY.onload = setTimeout(function() {

				logoY.style.animationName = "stroboLogoY";			
				logoY.style.animationDuration = "0.24s";
				logoY.style.transition = "ease-out";
				logoY.style.animationFillMode = "forwards";
				logoY.style.animationIterationCount = "2";

				logoY.style.animationTimingFunction = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";


			}, 6280);

			logoY.on= setTimeout(function() {

		
				logoY.style.animationName = "stroboLogoYF";			
				logoY.style.animationDuration = "0.16s";
				logoY.style.transition = "ease-out";
				logoY.style.animationIterationCount = "4";
				logoY.style.animationFillMode = "forwards";

			}, 7380);

		}


		/* wijs elementen (menu knoppen) toe aan variabelen */

		function getElementsID()
		{
			snoekButton = document.getElementById("snoekButton");
			baarsButton = document.getElementById("baarsButton");
			snoekbaarsButton = document.getElementById("snoekbaarsButton");
			meervalButton = document.getElementById("meervalButton");
			
			/* zet elementen op volgorde in lijst */
			
			buttons = [snoekButton,baarsButton,snoekbaarsButton,meervalButton];
		}
		
		
		/* (snoek) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function snoekLaad_Pagina()
		{	
			
			/* neem elementen */
			
			getElementsID();

			/* laad documenten */
			
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/snoek-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/snoek-beschrijving.html';
			
			
			/* styling: geselecteerd item */
			
			buttons[0].style.color = "#96f4ff";
			buttons[0].style.paddingBottom = "10px";
			buttons[0].style.backgroundSize = "51px 8px";
			buttons[0].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=0)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				
				}
			}	
		}

		
		/* (baars) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function baarsLaad_Pagina()
		{
			/* neem elementen */
			
			getElementsID();
			
			/* laad documenten */
			
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/baars-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/baars-beschrijving.html';
			
			/* styling: geselecteerd item */
			
			buttons[1].classList.add("actief");
			buttons[1].style.color = "#96f4ff";
			buttons[1].style.paddingBottom = "10px";
			buttons[1].style.backgroundSize = "51px 8px";
			buttons[1].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=1)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}

		
		/* (snoekbaars) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function snoekbaarsLaad_Pagina()
		{
			/* neem elementen */
			getElementsID();
			
			/* laad documenten */
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/snoekbaars-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/snoekbaars-beschrijving.html';
			
			/* styling: geselecteerd item */
			buttons[2].classList.add("actief");
			buttons[2].style.color = "#96f4ff";
			buttons[2].style.paddingBottom = "10px";
			buttons[2].style.backgroundSize = "51px 8px";
			buttons[2].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=2)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}
		
		/* (meerval) button: laad documenten in iframes, afbeelding en beschrijving. Bewerk styling */

		function meervalLaad_Pagina()
		{
			/* neem elementen */
			getElementsID();
			
			/* laad documenten */
			document.querySelector('iframe[name="roofvisAfbeelding"]').src = 'pages/roofvis/meerval-afbeelding.html';
			document.querySelector('iframe[name="roofvisInfo"]').src = 'pages/roofvis/meerval-beschrijving.html';
			
			/* styling: geselecteerd item */
			buttons[3].classList.add("actief");
			buttons[3].style.color = "#96f4ff";
			buttons[3].style.paddingBottom = "10px";
			buttons[3].style.backgroundSize = "51px 8px";
			buttons[3].style.textShadow = "2px 2px black";
			
			/* andere menu items uitgezonderd deze, inactief (styling) */
			for (var i=0;i<buttons.length;i++)
			{
				if (i!=3)
				{
					buttons[i].style.color = "#44d9bd";
					buttons[i].style.backgroundSize = "0px 0px";
					buttons[i].style.textShadow = "0px 0px";
				}
			}	
		}


	   /* titel pagina: menu icon, fade in animatie */

		function animeerMenuIcon_Over() {

			var menuIcon;

			menuIcon = document.getElementById("menuIcon");

			if (tDL) {

				menuIcon.style.animationFillMode = "none";
				menuIcon.style.transition = "opacity 0.25s steps(2)";
				menuIcon.style.opacity = "1";
				menuIcon.style.width = "55px";
				menuIcon.style.height = "57px";

			}

		}


		/* titel pagina: menu icon, fade out animatie */

		function animeerMenuIcon_Out() {

			var menuIcon;

			menuIcon = document.getElementById("menuIcon");

			if (tDL) {

				menuIcon.style.transition = "opacity 0.25s steps(3)";
				menuIcon.style.opacity = "0.5";
				menuIcon.style.width = "50px";
				menuIcon.style.height = "52px";

			}

		}


	  /* selecteer gallerij button voor styling */

	  function gallerijButton_Activeer(actief)
	  {
		 
		 /* wijs elementen toe aan variabelen */
		  
		 var gallerijButtons = [document.getElementById("gallerijButton1"),document.getElementById("gallerijButton2"),document.getElementById("gallerijButton3"),document.getElementById("gallerijButton4")];
		
		 /* style actief element */
		  
		 gallerijButtons[actief].style.border = "inset 3px rgba(90,186,71,1)";
		 gallerijButtons[actief].style.boxShadow = "0px 0px 1px 2px rgba(0,0,0,0.5)";

		 /* style inactieve elementen */	
		 for (var i=0;i<gallerijButtons.length;i++)
		 {	
			if (i!=actief)
			{
				gallerijButtons[i].style.border = "inset 4px rgba(68,217,189,0.75)";
				gallerijButtons[i].style.boxShadow = "0px 0px 2px 2px rgba(0,0,0,0.3)";
			}
		 }  
	  }


	  /* controleer contact formulier op lege velden (validatie) */	

	  function formValidatie()
	  {
		  
		  /* wijs elementen toe aan variabelen */
		  
		  var vnaam = document.getElementById("voornaam");
		  var anaam = document.getElementById("achternaam");
		  var email = document.getElementById("email");
		  var bericht = document.getElementById("bericht");
		  
		  /* controleer velden */
		  
		  if (vnaam.value=="") vnaam.value="Wat is jouw voornaam?";
		  
		  if (anaam.value=="") anaam.value="Wat is jouw achternaam?";
		  
		  if (email.value=="") email.value="e-mail adres?";
		  
		  if (bericht.value=="") bericht.value="Wil je wat zeggen?";
		  
	  }


	  function createFPOverlay()
	  {
				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events: none;filter:blur(1px);">');
				document.write('<div style="width:1px;height:inherit;background:rgba(0,0,0,0.4);display:inline-block;margin-left:-9px;box-shadow: -8px 0px 0px 0.0002cm rgba(255, 255, 255, 0.23),-4px 0px 0px 0.0002cm rgba(255, 255, 255, 0.33);">');
				
				document.write('<div style="width:1px;height:inherit;background:rgba(0,0,0,0.42);margin-left:12px;"></div>');	
				document.write('</div>');
				document.write('<div style="position:absolute;width:1px;height:inherit;background:rgba(0,0,0,0.4);display:inline-block;margin-left:1346px;box-shadow: 8px 0px 0px 0.0002cm rgba(255, 255, 255, 0.23),4px 0px 0px 0.0002cm rgba(255, 255, 255, 0.33);">');
				document.write('<div style="width:1px;height:inherit;background:rgba(0,0,0,0.42);margin-left:-12px;"></div>');
				document.write('</div>');
				document.write('</div>');


				document.write('    <div style="height:calc(var(--overlayH1) + 2px);width:4px;background:rgba(120, 156, 255, 0.23);margin-left:-515px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.002cm rgba(49, 64, 157, 1));border-left: 1px dashed rgba(255, 230, 249, 0.4);background-image:url(images/achtergrondPatroonSV2-BxFP.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 8px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');


				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;transform:scaleX(-1);">');
				document.write('    <div style="height:calc(var(--overlayH1) + 2px);width:4px;background:rgba(120, 156, 255, 0.23);margin-left:-515px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.002cm rgba(49, 64, 157, 1));border-left: 1px dashed rgba(255, 230, 249, 0.4);background-image:url(images/achtergrondPatroonSV2-BxFP.png);"></div>');
				
				document.write('    <div style="height:calc(var(--overlayH1) + 8px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-525px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');


				document.write('</div>');

	  }


	  function createOverlayA(bl_U, bl_D, sdw_C, bl_I)
	  {

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.091);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');


	
				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');



				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;transform:scaleX(-1);">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');

				

				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');


				
				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');
				


				
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="margin-top:-4px;width:1323px;height:4px;opacity:0.2;background-image:url(images/Bl.png);pointer-events:none;position:absolute;z-index:1;filter:drop-shadow(1px 6px 1px rgba(85, 237, 248, 1));"></div>');
				document.write('<div style="margin-left:4px;margin-top:2px;width:1322px;height:40px;background-image:url(images/achtergrondPatroonSV2.png);pointer-events:none;position:absolute;"></div>');


				document.write('<div style="margin-top:-4px;width:1345px;height:4px;opacity:1;background-image:url(images/bgRC.png);filter:hue-rotate(290deg);transform:scaleY(-1);opacity:0.37;border-top:3px double rgba(139,139,139,0.25);margin-top:-10px;margin-left:-6px;pointer-events:none;display:inline-block;position:absolute;z-index:1;"></div>');


				document.write('<div style="margin-top:-3px;pointer-events:none;">');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;float:left;margin-left:1327px;transform:scaleX(-1);">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.31);margin-top:5px;margin-left:4px;">');
				document.write('        <div style="width:1323px;height:6px;background-color: rgba(255,255,255,0.13);position:absolute;margin-top:5px;"></div>');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(30, 196, 160, 0.424);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(61, 136, 180, 0.224);position:absolute;margin-top:-3px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.13);margin-left:4px;">');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(255,255,255,0.185);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:4px;background-color: rgba(255,255,255,0.135);position:absolute;margin-top:8px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('    </div>');
				document.write('    <div style="transform: scaleY(-1);opacity:0.5;position:absolute;margin-top:-17px;margin-left:4px;">');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.27);margin-top:5px;">');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(255, 255, 255, 0.17);position:absolute;margin-top:5px;"></div>');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(87, 230, 255, 0.350);position:absolute;margin-top:-3px;box-shadow: 0px 10px 8px #ffffff5e, 0px -10px 5px var(--'+sdw_C+');"></div>');
				document.write('        </div>');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.15);">');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255, 255, 255, 0.25);position:absolute;margin-top:-2px;"></div>');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255,255,255,0.365);position:absolute;margin-top:8px;"></div>');
				document.write('            <div style="width:1323px;height:3px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('        </div>');
				document.write('    </div>');
				document.write('</div>');

	  }



	  function createOverlay(bl_U, bl_D, sdw_C, bl_I)
	  {

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.091);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');


	
				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');



				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;transform:scaleX(-1);">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');

				

				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');


				
				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');
				


				
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="margin-top:-4px;width:1323px;height:4px;opacity:0.2;background-image:url(images/Bl.png);pointer-events:none;position:absolute;z-index:1;filter:drop-shadow(1px 6px 1px rgba(85, 237, 248, 1));"></div>');
				document.write('<div style="margin-left:4px;margin-top:2px;width:1322px;height:40px;background-image:url(images/achtergrondPatroonSV2.png);pointer-events:none;position:absolute;"></div>');


				document.write('<div style="margin-top:-3px;pointer-events:none;">');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,magenta,cyan);opacity:0.15;float:left;margin-left:1327px;transform:scaleX(-1);">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.31);margin-top:5px;margin-left:4px;">');
				document.write('        <div style="width:1323px;height:6px;background-color: rgba(255,255,255,0.13);position:absolute;margin-top:5px;"></div>');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(30, 196, 160, 0.424);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(61, 136, 180, 0.224);position:absolute;margin-top:-3px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.13);margin-left:4px;">');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(255,255,255,0.185);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:4px;background-color: rgba(255,255,255,0.135);position:absolute;margin-top:8px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('    </div>');
				document.write('    <div style="transform: scaleY(-1);opacity:0.5;position:absolute;margin-top:-17px;margin-left:4px;">');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.27);margin-top:5px;">');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(255, 255, 255, 0.17);position:absolute;margin-top:5px;"></div>');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(87, 230, 255, 0.350);position:absolute;margin-top:-3px;box-shadow: 0px 10px 8px #ffffff5e, 0px -10px 5px var(--'+sdw_C+');"></div>');
				document.write('        </div>');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.15);">');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255, 255, 255, 0.25);position:absolute;margin-top:-2px;"></div>');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255,255,255,0.365);position:absolute;margin-top:8px;"></div>');
				document.write('            <div style="width:1323px;height:3px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('        </div>');
				document.write('    </div>');
				document.write('</div>');

	  }



	  function createOverlayC(bl_U, bl_D, sdw_C, bl_I)
	  {

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.091);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');


	
				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');



				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');


				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="position:absolute;width:inherit;height:inherit;display:block;pointer-events:none;margin-top:-2px;transform:scaleX(-1);">');
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-left:-9px;">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-left:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1px;height:var(--overlayH2);background:rgba(120, 156, 255, 0.45);margin-left:-15px;margin-top:50px;display:inline-block;position:absolute;"></div>');
				document.write('    <div style="height:1px;width:504px;background:rgba(120, 156, 255, 0.25);margin-left:-506px;margin-top:-5px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255,0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) - 50px);width:4px;background:rgba(120, 156, 255, 0.27);margin-top:50px;margin-left:-513px;display:inline-block;position:absolute;filter:drop-shadow(3px 2px 0.02cm rgba(19, 54, 137, 0.86));border-left: 1px dashed rgba(29, 269, 234, 0.29);background-image:url(images/achtergrondPatroonSV2-Bx.png);"></div>');

				document.write('    <div style="height:calc(var(--overlayH1) + 5px);width:1px;background:linear-gradient(blue,cyan,blue,cyan,violet,blue);margin-left:-523px;display:inline-block;position:absolute;opacity:0.31;filter:blur(1px);"></div>');

				

				document.write('<div style="width:100px;height:47px;background:linear-gradient(to left,rgba(128, 0, 128, 0.8),rgba(238, 130, 238,0.6),rgba(128, 128, 128,0.4),rgba(0, 255, 255,0.75));position:absolute;display:inline-block;margin-left:-513px;opacity:0.05;border-right:4px dashed black;filter:drop-shadow(1px 1px 1px rgba(255, 192, 203,0.8));"></div>');
				document.write('<div style="width:100px;height:47px;position:absolute;display:inline-block;margin-left:-513px;opacity:1;background-image:url(images/aPb2.png);"></div>');

				document.write('<div style="width:2px;height:47px;background:rgba(235, 206, 250,0.3);position:absolute;display:inline-block;margin-left:-408px;opacity:0.3;border-right:inset 2px rgba(128,64,196,0.65);filter:drop-shadow(-1px 1px 1px rgba(0,0,255,1));"></div>');
				document.write('<div style="width:90px;height:28px;background:rgba(0, 0, 0,0.1);position:absolute;display:inline-block;margin-left:-505px;margin-top:10px;opacity:0.32;"></div>');


				
				document.write('    <div style="height:1px;width:492px;background:rgba(120, 156, 255, 0.3);margin-left:-508px;margin-top:48px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(44, 206, 255, 0.67));border-top: 1px dashed rgba(255, 255, 255, 0.1);border-bottom:dashed 1px rgba(0,0,255,0.4);"></div>');
			
			    document.write('    <div style="height:1px;width:498px;background:#4259b7;margin-left:-508px;margin-top:-2px;display:inline-block;position:absolute;border-top:dashed 1px rgba(0,255,255,0.13);"></div>');
				document.write('    <div style="height:1px;width:498px;background:#365ca7;margin-left:-508px;margin-top:-1px;display:inline-block;position:absolute;border-bottom:dashed 1px rgba(0,255,255,0.15);"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(64, 128, 255, 0.33);margin-left:-510px;margin-top:50px;display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.44));border-top: 1px dashed rgba(44, 64, 193, var(--'+bl_I+'));opacity:var(--'+bl_D+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(0, 255, 255, 0.23);margin-left:-510px;margin-top:-8px;transform:scaleY(-1);display:inline-block;position:absolute;filter:drop-shadow(4px 1px 0.02cm rgba(244, 243, 193, 0.87));border-top: 1px dashed rgba(144, 164, 193,var(--'+bl_I+'));opacity:var(--'+bl_U+');"></div>');
				document.write('    <div style="height:2px;width:492px;background:rgba(16, 64, 128, 0.25);margin-left:-507px;margin-top:53px;display:inline-block;position:absolute;border-top:dashed 1px rgba(127,0,255,0.6);border-bottom:dashed 1px rgba(0,255,255,0.3);"></div>');
				document.write('    <div style="height:1px;width:492px;background:rgba(16, 64, 128, 0.16);margin-left:-507px;margin-top:-6px;display:inline-block;position:absolute;border-top:dashed 1px rgba(255,0,255,0.15);border-bottom:dashed 1px rgba(0,255,255,0.25);"></div>');
				document.write('    <div style="height:2px;width:492px;background:lightblue;margin-left:-507px;margin-top:56px;display:inline-block;position:absolute;opacity:0.4;filter:blur(1px);"></div>');
				


				
				document.write('    <div style="width:3px;height:var(--overlayH1);background:rgba(41, 80, 153, 0.882);display:inline-block;margin-right:-9px;transform:scaleX(-1);">');
				document.write('        <div style="width:1px;height:var(--overlayH2);background:rgba(0,0,0,0.23);margin-right:12px;margin-top:50px;"></div>');
				document.write('    </div>');
				document.write('</div>');

				document.write('<div style="margin-top:-4px;width:1323px;height:4px;opacity:0.2;background-image:url(images/Bl.png);pointer-events:none;position:absolute;z-index:1;filter:drop-shadow(1px 6px 1px rgba(85, 237, 248, 1));"></div>');
				document.write('<div style="margin-left:4px;margin-top:2px;width:1322px;height:40px;background-image:url(images/achtergrondPatroonSV2.png);pointer-events:none;position:absolute;"></div>');


				document.write('<div style="margin-top:-3px;pointer-events:none;">');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,orange,cyan);opacity:0.15;">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="position:absolute;width:3px;height:var(--overlayH3);background:linear-gradient(cyan,magenta,cyan,orange,cyan);opacity:0.15;float:left;margin-left:1327px;transform:scaleX(-1);">');
				document.write('        <div style="width:8px;height:100%;background-image:url(images/bS.png);margin-left:-6px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.31);margin-top:5px;margin-left:4px;">');
				document.write('        <div style="width:1323px;height:6px;background-color: rgba(255,255,255,0.13);position:absolute;margin-top:5px;"></div>');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(30, 196, 160, 0.424);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(61, 136, 180, 0.224);position:absolute;margin-top:-3px;"></div>');
				document.write('    </div>');
				document.write('    <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.13);margin-left:4px;">');
				document.write('        <div style="width:1323px;height:2px;background-color: rgba(255,255,255,0.185);position:absolute;margin-top:-2px;"></div>');
				document.write('        <div style="width:1323px;height:4px;background-color: rgba(255,255,255,0.135);position:absolute;margin-top:8px;"></div>');
				document.write('        <div style="width:1323px;height:1px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('    </div>');
				document.write('    <div style="transform: scaleY(-1);opacity:0.5;position:absolute;margin-top:-17px;margin-left:4px;">');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.27);margin-top:5px;">');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(255, 255, 255, 0.17);position:absolute;margin-top:5px;"></div>');
				document.write('            <div style="width:1323px;height:2px;background-color: rgba(87, 230, 255, 0.350);position:absolute;margin-top:-3px;box-shadow: 0px 10px 8px #ffffff5e, 0px -10px 5px var(--'+sdw_C+');"></div>');
				document.write('        </div>');
				document.write('        <div style="width:1323px;border-bottom:15px ridge rgba(68,225,220,0.15);">');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255, 255, 255, 0.25);position:absolute;margin-top:-2px;"></div>');
				document.write('            <div style="width:1323px;height:1px;background-color: rgba(255,255,255,0.365);position:absolute;margin-top:8px;"></div>');
				document.write('            <div style="width:1323px;height:3px;background-color: rgba(0,0,0,0.2);position:absolute;margin-top:2px;"></div>');
				document.write('        </div>');
				document.write('    </div>');
				document.write('</div>');

	  }






	  
	  function createBorderShade()
	  {
		document.write('<div style="pointer-events:none;width:1355px;height:2px;background-image:linear-gradient(black,pink,black,magenta,black,green);filter:drop-shadow(1px -1px 1px cyan);border-top:solid 1px rgba(0,0,255,1);display:inline-block;position:absolute;margin-top:-6px;margin-left:-13px;opacity:0.23;"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:2px;background:palegreen;display:inline-block;position:absolute;margin-top:48px;margin-left:3px;opacity:0.1;border-bottom:1px dashed red;border-top:solid 1px cyan;filter:blur(1px);"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:1px;display:inline-block;position:absolute;margin-top:48px;margin-left:3px;opacity:0.15;border-top:1px dashed violet;border-bottom:1px solid rgba(0, 255, 255, 0.5);filter:drop-shadow(1px 1px 1px red);"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:1px;background:rgb(218, 0, 255);display:inline-block;position:absolute;margin-top:-9px;margin-left:3px;opacity:0.2;"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:1px;background:rgb(0, 0, 0);display:inline-block;position:absolute;margin-top:49px;margin-left:3px;opacity:0.1;"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:1px;background:darkblue;display:inline-block;position:absolute;margin-top:54px;margin-left:3px;opacity:0.15;border-bottom:dashed 1px lightblue;border-top:dashed 1px green;filter:blur(1px);"></div>');
		document.write('<div style="pointer-events:none;width:1324px;height:20px;background-image:linear-gradient(grey,white);display:inline-block;position:absolute;margin-left:3px;margin-top:50px;opacity:0.1;transform:scaleY(-1);filter:blur(10px);"></div>');
	  }

	 

	  function createBorderOverlay(wrapperH)
	  {
		document.write('<div style="position:absolute;width:500px; height:100%;margin-top:calc(var(--'+wrapperH+') - 80px);">');
		document.write('<div style="position: relative; height:100%;filter:drop-shadow(1px 1px 1px rgba(1, 17, 161, 0.699));">');
		document.write('<img src="images/pointer.png" style="opacity:0.73;position:absolute;margin-left:415px;">');
		document.write('<img src="images/pointer.png" style="opacity:0.65;position:absolute;margin-left:415px;filter:blur(1px);">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:375px;margin-top:-35px;transform:rotate(45deg);opacity:var(--visjeOP1);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis1SHD)));filter:hue-rotate(var(--vis1HUE));">');
		document.write('<img src="images/visje.png" style="width:37px;height:37px;position:absolute;margin-left:340px;margin-top:-80px;transform:rotate(65deg);opacity:var(--visjeOP2);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis2SHD)));filter:hue-rotate(var(--vis2HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:310px;margin-top:-130px;transform:rotate(70deg);opacity:var(--visjeOP3);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis3SHD)));filter:hue-rotate(var(--vis3HUE));">');
		document.write('<img src="images/visje.png" style="width:45px;height:45px;position:absolute;margin-left:290px;margin-top:-180px;transform:rotate(67deg);opacity:var(--visjeOP4);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis4SHD)));filter:hue-rotate(var(--vis4HUE));">');
		document.write('<img src="images/visje.png" style="width:44px;height:44px;position:absolute;margin-left:270px;margin-top:-230px;transform:rotate(77deg);opacity:var(--visjeOP5);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis5SHD)));filter:hue-rotate(var(--vis5HUE));">');
		document.write('<img src="images/visje.png" style="width:43px;height:43px;position:absolute;margin-left:250px;margin-top:-280px;transform:rotate(55deg);opacity:var(--visjeOP6);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis6SHD)));filter:hue-rotate(var(--vis6HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:220px;margin-top:-330px;transform:rotate(40deg);opacity:var(--visjeOP7);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis7SHD)));filter:hue-rotate(var(--vis7HUE));">');
		document.write('<img src="images/visje.png" style="width:41px;height:41px;position:absolute;margin-left:175px;margin-top:-350px;transform:rotate(15deg);opacity:var(--visjeOP8);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis8SHD)));filter:hue-rotate(var(--vis8HUE));">');
		document.write('<img src="images/visje.png" style="width:40px;height:40px;position:absolute;margin-left:120px;margin-top:-345px;transform:rotate(-25deg);opacity:var(--visjeOP9);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis9SHD)));filter:hue-rotate(var(--vis9HUE));">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:75px;margin-top:-310px;transform:rotate(-55deg);opacity:var(--visjeOP10);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis10SHD)));filter:hue-rotate(var(--vis10HUE));">');
		document.write('<img src="images/visje.png" style="width:28px;height:28px;position:absolute;margin-left:60px;margin-top:-260px;transform:rotate(-70deg);opacity:var(--visjeOP11);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis11SHD)));filter:hue-rotate(var(--vis11HUE));">');
		document.write('<img src="images/visje.png" style="width:21px;height:21px;position:absolute;margin-left:55px;margin-top:-215px;transform:rotate(-105deg);opacity:var(--visjeOP12);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis12SHD)));filter:hue-rotate(var(--vis12HUE));">');
		document.write('</div>');
		document.write('</div>');
	
		document.write('<div style="position:absolute;width:500px; height:100%;margin-top:calc(var(--'+wrapperH+') - 80px);transform:scaleX(-1);margin-left:1865px;">');
		document.write('<div style="position: relative; height:100%;filter:drop-shadow(1px 1px 1px rgba(1, 17, 161, 0.699));">');
		document.write('<img src="images/pointer.png" style="opacity:0.73;position:absolute;margin-left:430px;">');
		document.write('<img src="images/pointer.png" style="opacity:0.65;position:absolute;margin-left:430px;filter:blur(1px);">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:390px;margin-top:-35px;transform:rotate(45deg);opacity:var(--visjeOP1);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis1SHD)));filter:hue-rotate(var(--vis1HUE));">');
		document.write('<img src="images/visje.png" style="width:37px;height:37px;position:absolute;margin-left:355px;margin-top:-80px;transform:rotate(65deg);opacity:var(--visjeOP2);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis2SHD)));filter:hue-rotate(var(--vis2HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:325px;margin-top:-130px;transform:rotate(70deg);opacity:var(--visjeOP3);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis3SHD)));filter:hue-rotate(var(--vis3HUE));">');
		document.write('<img src="images/visje.png" style="width:45px;height:45px;position:absolute;margin-left:305px;margin-top:-180px;transform:rotate(67deg);opacity:var(--visjeOP4);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis4SHD)));filter:hue-rotate(var(--vis4HUE));">');
		document.write('<img src="images/visje.png" style="width:44px;height:44px;position:absolute;margin-left:285px;margin-top:-230px;transform:rotate(77deg);opacity:var(--visjeOP5);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis5SHD)));filter:hue-rotate(var(--vis5HUE));">');
		document.write('<img src="images/visje.png" style="width:43px;height:43px;position:absolute;margin-left:265px;margin-top:-280px;transform:rotate(55deg);opacity:var(--visjeOP6);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis6SHD)));filter:hue-rotate(var(--vis6HUE));">');
		document.write('<img src="images/visje.png" style="width:42px;height:42px;position:absolute;margin-left:235px;margin-top:-330px;transform:rotate(40deg);opacity:var(--visjeOP7);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis7SHD)));filter:hue-rotate(var(--vis7HUE));">');
		document.write('<img src="images/visje.png" style="width:41px;height:41px;position:absolute;margin-left:190px;margin-top:-350px;transform:rotate(15deg);opacity:var(--visjeOP8);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis8SHD)));filter:hue-rotate(var(--vis8HUE));">');
		document.write('<img src="images/visje.png" style="width:40px;height:40px;position:absolute;margin-left:135px;margin-top:-345px;transform:rotate(-25deg);opacity:var(--visjeOP9);filter:drop-shadow(1px 1px 1px rgb(0, 0, 0,var(--vis9SHD)));filter:hue-rotate(var(--vis9HUE));">');
		document.write('<img src="images/visje.png" style="width:35px;height:35px;position:absolute;margin-left:90px;margin-top:-310px;transform:rotate(-55deg);opacity:var(--visjeOP10);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis10SHD)));filter:hue-rotate(var(--vis10HUE));">');
		document.write('<img src="images/visje.png" style="width:28px;height:28px;position:absolute;margin-left:75px;margin-top:-260px;transform:rotate(-70deg);opacity:var(--visjeOP11);filter:drop-shadow(1px -1px 1px rgb(0, 0, 0,var(--vis11SHD)));filter:hue-rotate(var(--vis11HUE));">');
		document.write('<img src="images/visje.png" style="width:21px;height:21px;position:absolute;margin-left:70px;margin-top:-215px;transform:rotate(-105deg);opacity:var(--visjeOP12);filter:drop-shadow(-1px 1px 1px rgb(0, 0, 0,var(--vis12SHD)));filter:hue-rotate(var(--vis12HUE));">');
	
		document.write('</div>');
		document.write('</div>');


	  }

	  function placeBorderAttachment()
	  {

		document.write('<img src="images/sbXSd.png" style="position:absolute;margin-left:1px;margin-top:-3px;display:block;">');
		document.write('<img src="images/sbXSd.png" style="position:absolute;margin-left:1px;margin-top:59px;display:block;">');

		document.write('<img src="images/sbXSd.png" style="position:absolute;margin-left:1857px;margin-top:-3px;display:block;">');
		document.write('<img src="images/sbXSd.png" style="position:absolute;margin-left:1857px;margin-top:59px;display:block;">');

		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:15px;margin-top:-3px;display:block;opacity:0.53;">');
		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:200px;margin-top:-3px;display:block;opacity:0.53;">');
		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:390px;margin-top:-3px;display:block;opacity:0.53;">');

		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:1897px;margin-top:-3px;display:block;opacity:0.53;">');
		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:2072px;margin-top:-3px;display:block;opacity:0.53;">');
		document.write('<img src="images/hlB.png" style="position:absolute;margin-left:2262px;margin-top:-3px;display:block;opacity:0.53;">');


		document.write('<div style="width:493px;height:1px;background-color: rgba(153, 90, 243, 0.270);position:absolute;margin-top:60px;border-bottom:1px solid rgba(0,0,0,0.23);border-top:dashed 1px rgba(0,255,0,0.29);filter:blur(1px);box-shadow:1px 1px 1px -1px green;"></div>');

		document.write('<div style="width:493px;height:1px;background-color: rgba(153, 90, 243, 0.270);position:absolute;margin-top:60px;margin-left:1857px;border-bottom:1px solid rgba(0,0,0,0.23);border-top:dashed 1px rgba(0,255,0,0.29);filter:blur(1px);box-shadow:1px 1px 1px -1px green;"></div>');



		document.write('<div style="width:1324px;height:4px;background-color: rgba(84,123, 223, 1);position:absolute;margin-top:-4px;margin-left:513px;"></div>');
		document.write('<div style="width:1324px;height:1px;background-color: rgba(0,255,196, 0.1);position:absolute;margin-top:57px;margin-left:513px;border-bottom:dashed 1px rgba(255,255,0,0.42);filter:blur(1px);"></div>');
		document.write('<div style="width:1324px;height:4px;background-color: rgba(84,123, 223, 0.35);position:absolute;margin-top:54px;margin-left:513px;border-bottom:1px solid rgba(0,0,255,0.17);"></div>');

		

	  }