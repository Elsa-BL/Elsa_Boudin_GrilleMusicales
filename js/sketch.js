let zoom = 0.02
let sound;
let amp;
let time = 0;


function preload(){
   sound = loadSound('sound/MikaRefrain.mp3');
   sound = loadSound('sound/Gam Gam.mp3');
   sound2=  loadSound('sound/Jaunter-Reset.mp3')
   sound3=  loadSound('sound/Nemesis.mp3')
   sound4=  loadSound('sound/99LuftBallons.mp3')
}



function setup() {

    frameRate(60)
    colorMode(HSL)
    amp = new p5.Amplitude();
    

 createCanvas(windowWidth, windowHeight);
 
}



function draw() {
    let level = amp.getLevel()

    time += level
    console.log(level)
    background(0)
    noStroke()
    // let color = 1
    // let color = (noise(frameCount*0.01)*360)

    for (let x = 0; x <= width; x += 10) {
        for (let y = 0 ; y <= height; y += 10){
            // noStroke()
            // fill(random(255),random(255),random(255))
            // ellipse(x, y, 2)
            
            // fill(15,20,240)
            // txt = int(random(10))
            // text(txt, x, y)
            
            
            
            fill(190, 50,50)
            // let s = noise(frameCount*0.01+x*zoom,frameCount*0.01+y*zoom)*100
            let s = noise(x*zoom,y*zoom, time)*100
            fill(s, 50,50)
            ellipse(x, y, 20)




            
        }
        
        
    }
 
}

function mousePressed(){
    if (sound.isPlaying()){
        sound.stop();
    } else  
    sound.play();
}

function keyPressed(){
    if (key == 'a' ){
        if (sound2.isPlaying()){
        sound2.stop();
    } else  
    sound2a.play();
    }
    if (key == 'z' ){
        if (sound3.isPlaying()){
        sound3.stop();
    } else  
    sound3.play();
    }
    if (key == 'e' ){
        if (sound4.isPlaying()){
        sound4.stop();
    } else  
    sound4.play();
    }
    
}