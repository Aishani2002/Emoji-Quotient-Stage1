var DevilwearsPrada, HarryPotter, PlanetoftheApes, MeninBlack, Titanic, CharliesAngels, EdwardscissorHands;
var  PrincessDiaries, RunawayBride,JurassicPark;
var DwPimg, Hpimg,PAimg, MiBimg, Titaimg, CAimg, EsHimg, PDimg, RBimg, JPimg;

var Backtoyou, BlankSpace, BlindingLights, ColdWater, DanceMonkey, EyeoftheTiger, KillmwKindness, Rockabye;
var SevenRings, Sucker;
var Btyimg, BSimg, BLimg, CWimg, DMimg, ETimg, KwKimg, Rockimg, SRimg, Suckerimg;

var movieB, songB, bookB, citieB;
var ques, mAns, sAns,bAns,cAns, next;
var movies,songs,books,cities;

function preload(){

    bg = loadImage("Emojis/background.jpg");
   

   DwPimg = loadImage("Emojis/movies/DevilWearsPrada.png");
Hpimg = loadImage("Emojis/movies/Harry potter.png");
PAimg = loadImage("Emojis/movies/Planet of the Apes.png");
MiBimg = loadImage("Emojis/movies/Men in Black.png");
Titaimg = loadImage("Emojis/movies/Titanic.png");
CAimg = loadImage("Emojis/movies/Charlie's Angels.png");
EsHimg = loadImage("Emojis/movies/Edward Scissor Hands.png");
PDimg = loadImage("Emojis/movies/Princess Diaries.png");
RBimg = loadImage("Emojis/movies/Runaway Bride.png");
JPimg = loadImage("Emojis/movies/Jurrasic Park.png");

/*Btyimg = loadImage("Emojis/songs/Back to you.jpg");
BSimg = loadImage("Emojis/songs/Blank Space.jpg");
BLimg = loadImage("Emojis/songs/Blinding Lights.jpg");
CWimg = loadImage("Emojis/songs/Cold Water.jpg")
DMimg = loadImage("Emojis/songs/Dance Monkey.jpg");
ETimg = loadImage("Emojis/songs/Eye of the Tiger.jpg");
KwKimg = loadImage("Emojis/songs/Killem with kindness.jpg");
Rockimg = loadImage("Emojis/songs/Rockabye.jpg");
SRimg = loadImage("Emojis/songs/Seven Rings.jpg");
Suckerimg = loadImage("Emojis/songs/Sucker.jpg");*/



}

function setup(){
    
createCanvas(displayWidth-20,displayHeight-20);


 



   /* Backtoyou= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    Backtoyou.addImage("Btyimg", Btyimg);
    BlankSpace= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    BlankSpace.addImage("BSimg", BSimg);
    BlindingLights= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    BlindingLights.addImage("BLimg", BLimg);
    ColdWater= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    ColdWater.addImage("CWimg", CWimg);
    DanceMonkey= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    DanceMonkey.addImage("DMimg", DMimg);
    EyeoftheTiger= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    EyeoftheTiger.addImage("ETimg", ETimg);
    KillmwKindness= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    KillmwKindness.addImage("KwKimg", KwKimg);
    Rockabye= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    Rockabye.addImage("Rockimg", Rockimg);
    SevenRings= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    SevenRings.addImage("SRimg", SRimg);
    Sucker= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
    Sucker.addImage("Suckerimg", Suckerimg);*/

}

    function draw() {
 background(bg);
        drawSprites();
       
        movieB= createButton("Movie");
        movieB.position(displayWidth/2, displayHeight/2-200);
        movieB.mousePressed(function () {
            movieB.hide();
            ques= createElement('h1');
            ques.html("Guess the movie name by these Emojis");
            ques.position(displayWidth/3-50,100);
            mAns= createInput();
            mAns.position(displayWidth/3-50,600);
            next = createButton("NEXT");
            next.position(displayWidth/2+60,600);
            next.mousePressed(function(){
                
                var rnumber = Math.round(random(1,10));
                switch(rnumber) {
                        case 1: DevilwearsPrada= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        DevilwearsPrada.addImage("DwPimg", DwPimg);
                        DevilwearsPrada.destroy();
                       break;
                case 2: HarryPotter= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        HarryPotter.addImage("Hpimg", Hpimg);
                         //break;
                         HarryPotter.destroy();
                case 3:  PlanetoftheApes= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                           PlanetoftheApes.addImage("PAimg", PAimg);
                          // PlanetoftheApes.destroy();
                        break;
                case 4: MeninBlack= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                           MeninBlack.addImage("MiBimg", MiBimg);
                          // MeninBlack.destroy();
                        break;
                case 5: Titanic= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                          Titanic.addImage("Titaimg", Titaimg);
                         // Titanic.destroy();
                        break;
                case 6: CharliesAngels= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                           CharliesAngels.addImage("CAImg", CAimg);
                           //CharliesAngels.destroy();
                        break;
                case 7: EdwardscissorHands= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                          EdwardscissorHands.addImage("EsHimg", EsHimg);
                         // EdwardscissorHands.destroy();
                        break;
                case 8:  PrincessDiaries= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                          PrincessDiaries.addImage("PDimg", PDimg);
                         // PrincessDiaries.destroy();
                        break;
                case 9: RunawayBride= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                           RunawayBride.addImage("RBimg", RBimg);
                          // RunawayBride.destroy();
                        break;
              case 10:  JurassicPark= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                          JurassicPark.addImage("JPimg", JPimg);
                          //JurassicPark.destroy();
                        break;
                          
                default: break;               }
            })

            
            var rand = Math.round(random(1,10));
            switch(rand) {
      case 1: DevilwearsPrada= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
              DevilwearsPrada.addImage("DwPimg", DwPimg);
              //DevilwearsPrada.destroy();
              break;
      case 2: HarryPotter= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
              HarryPotter.addImage("Hpimg", Hpimg);
              //HarryPotter.destroy();
              break;
      case 3:  PlanetoftheApes= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                 PlanetoftheApes.addImage("PAimg", PAimg);
                // PlanetoftheApes.destroy();
              break;
      case 4: MeninBlack= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                 MeninBlack.addImage("MiBimg", MiBimg);
                // MeninBlack.destroy();
              break;
      case 5: Titanic= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Titanic.addImage("Titaimg", Titaimg);
                //Titanic.destroy();
              break;
      case 6: CharliesAngels= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                 CharliesAngels.addImage("CAImg", CAimg);
                 //CharliesAngels.destroy();
              break;
      case 7: EdwardscissorHands= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                EdwardscissorHands.addImage("EsHimg", EsHimg);
               // EdwardscissorHands.destroy();
              break;
      case 8:  PrincessDiaries= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                PrincessDiaries.addImage("PDimg", PDimg);
                //PrincessDiaries.destroy();
              break;
      case 9: RunawayBride= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                 RunawayBride.addImage("RBimg", RBimg);
                 //RunawayBride.destroy();
              break;
    case 10:  JurassicPark= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                JurassicPark.addImage("JPimg", JPimg);
                //JurassicPark.destroy();
              break;
      default: break;
    }
})


    }

    