let grille = 18;
let marge = 30;


let sound, soundPlus, amp, amp2, timeCode;

let affichage = 1;

let temps =0;
let lissage =0.2; //ralentir la vitesse de variation de la grille
//niveau de détail de la grille
let zoom =0.005;
let temps2 = 0;


function preload(){
    sound = loadSound('sound/StarryNight.mp3')

    soundPlus = loadSound("sound/starrySelection.mp3")
    // soundPlus = loadSound("sound/Nemesis.mp3")
}

function setup() {
    colorMode(HSL)
    createCanvas(windowWidth, windowHeight);
    amp = new p5.Amplitude();
    amp.setInput(sound)

    amp2 = new p5.Amplitude();
    amp2.setInput(soundPlus);
}

//lecture de la musique
function mousePressed(){
 print(timeCode)//impression du time code

 let lecture = sound.isPlaying();

 let lecture2 = soundPlus.isPlaying();

 if(lecture == false){
      sound.play()
 }    

  if(lecture2 == false){
      soundPlus.play()
 }    
}


function draw() {
	if(sound.isPlaying){
		timeCode = sound.currentTime(); ///time code actuel de la musique
	}

    if(soundPlus.isPlaying){
		timeCode = soundPlus.currentTime(); ///time code actuel de la musique
	}
   background(0)

   if (affichage ==1){
    grille2()
    grille1();
    grille3();  
   }
   

//    if(affichage1){
//       grille1();
//    }  
   
//       if(affichage3){
//       grille3();
//    }    

if (affichage == 2){
    grille4(); 
    grille5();
    
    grille6();
    
}

 if (affichage == 3){
    grille8();
    grille10();
    grille6();

 }   


if (affichage == 4) {
    grille22()
grille9();
grille11();
}
    

    // grille11();
    // grille9();
}



function keyPressed(){
   if(key=='1'){
     affichage = 1
   }

    if(key=='2'){
     affichage = 2
   }
   if(key=='3'){
     affichage = 3
   }
   if(key=='4'){
     affichage = 4
   }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


///Une fonction = un effet avec une structure similaire   //EFFET BLANC
function grille1(){   
      let level = amp.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = 0; x <width; x+=grille*0.5) {
      for (let y = 0; y<height; y+=grille*0.5) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;
         //ci dessous modifier les paramètres pour afficher des formes 
         let noise3d = noise(paramX,paramY,temps)*grille*2
        //  console.log(noise3d)
         fill(0,0,0)

         if (noise3d > 18){
            ellipse(x,y,noise3d*1.2)
        }
       
       //
      }
 }
}

function grille2(){
      let level = amp2.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = 0; x <width; x+=grille) {
      for (let y = 0; y<height; y+=grille) {
        noStroke()
 
         let paramX=x*(zoom*0.001);
         let paramY =y*(zoom*0.001);
         //ci dessous modifier les paramètres pour afficher des formes 
         let noise3d = noise(paramX,paramY,temps)*360
         
         fill(250,50 ,20)

        let s = noise(x*zoom,y*zoom, temps)*100


        console.log(level)
        
        if (level<0.06){
            fill(s+220, 60,30)
        }else {
            fill(280+s,60,35)
        }
        
         
       square(x,y,grille)
       //
      }
 }
}

function grille22(){
      let level = amp2.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = 0; x <width; x+=grille) {
      for (let y = 0; y<height; y+=grille) {
        noStroke()
 
         let paramX=x*(zoom*0.001);
         let paramY =y*(zoom*0.001);
         //ci dessous modifier les paramètres pour afficher des formes 
         let noise3d = noise(paramX,paramY,temps)*360
         
         fill(250,50 ,20)

        let s = noise(x*zoom,y*zoom, temps)*100


        console.log(level)
        
        fill(s+220, 60,30)
         
       square(x,y,grille)
       //
      }
 }
}


function grille3(){
    
      let level = amp.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = 0; x <width; x+=grille/3) {
      for (let y = 0; y<height; y+=grille/3) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;
         //ci dessous modifier les paramètres pour afficher des formes 
         let filtre = noise(paramX+976,paramY,temps)
         fill(0,80,100)

         if(filtre<0.3){
            noStroke()
       ellipse(x,y,grille*0.5)
       }else if(filtre>0.70){
        stroke(20,100,100)
        strokeWeight(1)
        line(x,y,x+grille,y+grille)
       }
      }
 }


    // let level2 = amp2.getLevel();
    // temps = temps + level2*lissage


}

//EFFET NOIR
function grille4(){  

    
    let level = amp.getLevel();
     
    temps = temps+level*lissage*0.5; 

    for (let x = marge; x <width-marge; x+=grille) {
        for (let y = marge; y<height-marge; y+=grille) {
    
            let paramX=x*zoom;
            let paramY =y*zoom;
            //ci dessous modifier les paramètres pour afficher des formes 
            let filtre3 = noise(paramX,paramY,temps)
            fill(0)
            if(filtre3<0.3){
            ellipse(x,y,grille)
            }else if(filtre3>0.80){
                stroke(20,100,100)
                noStroke()
                line(x,y,x+grille,y+grille)
            }
        }
    }
}

function grille5(){  
    noStroke()

    
    let level = amp.getLevel();
     
    temps = temps+level*lissage*0.5; 

    for (let x = marge; x <width-marge; x+=grille) {
        for (let y = marge; y<height-marge; y+=grille) {
    
            let paramX=x*zoom;
            let paramY =y*zoom;
            //ci dessous modifier les paramètres pour afficher des formes 
            let filtre2 = noise(paramX,paramY,temps)
            let s = noise(x*zoom,y*zoom, temps)*100
            fill(s+200, 50,30)
            ellipse(x,y,grille*2)

            
            if(filtre2<0.1){
                fill(340,100,60)
                ellipse(x,y,grille*1.5)
            }else if(filtre2<0.2){
                fill(340,100,40)
                ellipse(x,y,grille*1.5)
            }else if(filtre2<0.3){
                fill(340,100,25)
                ellipse(x,y,grille*1.5)
            }else if(filtre2<0.4){
                fill(340,100,10)
                ellipse(x,y,grille*1.5)
            }
        }
    }
}

function grille6(){  
    noStroke()

    
    let level = amp.getLevel();
     
    temps = temps+level*lissage*0.5;

    for (let x = marge; x <width-marge; x+=grille) {
        for (let y = marge; y<height-marge; y+=grille) {    

            let paramX=x*zoom;
            let paramY =y*zoom;
            let filtre4 = noise(paramX,paramY,temps)


            if(filtre4>0.7){
            fill(random(50, 360),50,60)
            triangle(x, y, x+2, y, x, y+3)
        }
    }

}
}


//lignes
function grille7(){  
    stroke(255)

    strokeWeight(1)
    let level = amp.getLevel();
     
    temps = temps+level*lissage;

    for (let x = marge; x <width-marge; x+=grille) {
        for (let y = marge; y<height-marge; y+=grille) {    

            let paramX=x*zoom;
            let paramY =y*zoom;
            let noise3d = noise(paramX,paramY,temps)*100
            let noise3d2 = noise(paramX+200,paramY,temps)*100
            strokeWeight(noise3d*0.01)

line(x, y, x+grille*3+noise3d, y+grille*3+noise3d2)
        }
    }

    for (let x = marge; x <width-marge; x+=grille) {
        for (let y = marge; y<height-marge; y+=grille) {  

            let paramX=x*zoom;
            let paramY =y*zoom;
            
            // let noiseColor = (100*noise(0.005*frameCount))
            // stroke((noiseColor+x+y)/5,100,60)
            let noiseColor = noise(paramX,paramY,temps)*360
            stroke(70+(noiseColor),100,60)

            

            let noise3d = noise(paramX,paramY,temps)*100
            let noise3d2 = noise(paramX+200,paramY,temps)*100
            let noise3 = noise(paramX,paramY+1000,temps)*100
            let noise4 = noise(paramX+200,paramY+1000,temps)*50
            strokeWeight(noise3d2*0.01)

line(x+grille*3+noise3d, y+grille*3+noise3d2, x+grille*3.5+noise3 , (y+grille*3+noise3d2)+noise4)
        }
    }

}


function grille8(){
    let level = amp.getLevel();
    temps = temps+level*lissage;
    zoom2 = 0.005

        for (let x = marge; x <width-marge; x+=grille/2) {
        for (let y = marge; y<height-marge; y+=grille/2) {  

            // zoom2 = zoom2 +30.0000001

            let paramX=x*zoom2;
            let paramY =y*zoom2;

            let noise3d = noise(paramX,paramY,temps)*100
            let noise3d2 = noise(paramX+200,paramY,temps)*100
            
            // let noiseColor = (100*noise(0.005*frameCount))
            // stroke((noiseColor+x+y)/5,100,60)
            let noiseColor = noise(paramX,paramY,temps)*360
            stroke(100+(noiseColor),90,10+noise3d)
            console.log("zoom"+zoom2)

            

            
            strokeWeight(0.1)

line(x,y,x+grille+noise3d, y+grille+noise3d2)
        }
    }
}

function grille9(){
    colorMode = ("RGB")
    let level2 = amp2.getLevel();
    
    temps2 = temps2+level2*lissage;
    console.log("L : "+temps2)

        for (let x = marge; x <width-marge; x+=grille*2) {
        for (let y = marge; y<height-marge; y+=grille*2) {  

            let paramX=x*zoom;
            let paramY =y*zoom;

            let noise3d = noise(paramX,paramY,temps2)*100
            let noise3d2 = noise(paramX+200,paramY,temps2)*100
            
            // let noiseColor = (100*noise(0.005*frameCount))
            // stroke((noiseColor+x+y)/5,100,60)
            let noiseColor = noise(paramX,paramY,temps2)*360
            stroke(25,25,64,0.2)

            

            
            strokeWeight(noise3d*0.5)

line(x,y,x+grille+noise3d, y+grille+noise3d2)
        }
    }
}

function grille10(){
    zoom = 0.005
    colorMode = ("RGB")
    let level = amp.getLevel();
    temps = temps+level*lissage;
    // zoom = 0.001
    
    

        for (let x = marge+marge/2; x <width-(marge+marge/2); x+=grille*5 ){
        for (let y = marge+marge/2; y<height-(marge+marge/2); y+=grille*5 ) {  

            let paramX=x*zoom;
            let paramY =y*zoom;

            // zoom = zoom + temps*0.000000001

            // x = x + noise(51,654,temps)
            y = y + noise(415,654,temps)
            console.log(zoom)
           

            let noise3dTrans = noise(paramX,paramY,temps)
            let noise3d = noise(paramX,paramY,temps)*100
            let noise3d2 = noise(paramX+200,paramY,temps)*100
            
            // let noiseColor = (100*noise(0.005*frameCount))
            // stroke((noiseColor+x+y)/5,100,60)
            // let noiseColor = noise(paramX,paramY,temps)*360
            // stroke(25,25,64,level)
            // console.log("temps"+temps)
            // console.log(noise3dTrans)
            // console.log(level)

        
            
            strokeWeight(5)

            // line(x,y,x+grille+noise3d, y+grille+noise3d2)
            let filtre = noise(paramX,paramY,temps)

            if (filtre < 0.3){
                strokeWeight(1)
                fill(255,255,255, 0.15)
            ellipse(x,y, (noise3d2*6)*level*2)
            }

            // console.log(noise3d-50)
                    }
                }
            }


function grille11(){
    zoom = 0.005
    let level = amp.getLevel();
    temps = temps+level*lissage;

    
    

    for (let x = marge; x <width; x+=grille*2) {
        for (let y = marge; y<height-marge; y+=grille*2) { 

            console.log(height, width, y)

            let paramX=x*zoom; 
            let paramY =y*zoom;

            let noise3d = noise(paramX+2456,paramY,temps)*1.2
            let noise3d2 = noise(paramX+256,paramY,temps)*1.2


            // fill(255,255,255,0.2)
            // noStroke()
            // ellipse(x+noise3d,y*noise3d2,marge/2)
            stroke(40,80,50)
            strokeWeight(1)
            noFill()
            arc(x*noise3d,y*noise3d2,marge/4.5,marge/4.5,0,HALF_PI);
            arc(x*noise3d,y*noise3d2,marge/6,marge/6,HALF_PI,PI);
            arc(x*noise3d,y*noise3d2,marge/4,marge/4,PI+QUARTER_PI);
            arc(x*noise3d,y*noise3d2,marge/4.5,marge/4.5,PI+QUARTER_PI,TWO_PI);
            stroke(330,70,50)
            arc(width-x*noise3d,height-y*noise3d2,marge/6,marge/6,0,HALF_PI);
            arc(width-x*noise3d,height-y*noise3d2,marge/4.5,marge/4.5,HALF_PI,PI);
            arc(width-x*noise3d,height-y*noise3d2,marge/5,marge/5,PI+QUARTER_PI);
            arc(width-x*noise3d,height-y*noise3d2,marge/4,marge/4,PI+QUARTER_PI,TWO_PI);


            // arc(x+noise3d,y*noise3d2,marge,marge,0,HALF_PI);
            // arc(x+noise3d,y*noise3d2,marge/1.5,marge/1.5,HALF_PI,PI);
            // arc(x+noise3d,y*noise3d2,marge/2,marge/2,PI,PI+QUARTER_PI);
            // arc(x+noise3d,y*noise3d2,marge/3,marge/3,PI+QUARTER_PI,TWO_PI);

            // arc(x+noise3d,y*noise3d2,marge,marge,0,HALF_PI);
            // arc(x+noise3d,y*noise3d2,marge/1.5,marge/1.5,HALF_PI,PI);
            // arc(x+noise3d,y*noise3d2,marge/2,marge/2,PI,PI+QUARTER_PI);
            // arc(x+noise3d,y*noise3d2,marge/3,marge/3,PI+QUARTER_PI,TWO_PI);
            
        }

    }






}
