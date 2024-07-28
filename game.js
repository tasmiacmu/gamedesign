var config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var lilZara;
var bigZara;
var lilBrynn;
var bigBrynn;
var lilThane;
var bigThane;
var background;
var speech1;
var speech2;
var speech3;
var close1;
var close2;
var close3;

var interactionAmount = 0;
var brynnScore = 0;
var brynnTalkTo = 0;
var zaraScore = 0;
var zaraTalkTo = 0;
var thaneScore = 0;
var thaneTalkTo = 0;


//brynn interaction 1
var speechText; 

var brynnDialog2;
var brynnDialog3;
var brynnDialog4;
var brynnDialog5;
var brynnDialog6;
var brynnDialog7;
var brynnDialog8;
var brynnDialog9;

var brynnOption1;
var brynnOption2;
var brynnOption3;
var brynnOption4;
var brynnOption5;
var brynnOption6;
var brynnOption7;
var brynnOption8;
var brynnOption9;
var brynnOption10;


var zaraDialogue; 
var zaraDialogue2; 
var zaraOption1;
var zaraOption2;
var zaraOption3;
var zaraOption4;


function preload() {
    this.load.image('background', 'assets/bg.png');
    this.load.image('lilZara', 'assets/littlezara.png');
    this.load.image('lilBrynn', 'assets/littlebrynn.png');
    this.load.image('lilThane', 'assets/littlethane.png');
    this.load.image('bigZara', 'assets/bigzara.png');
    this.load.image('bigBrynn', 'assets/bigbrynn.png');
    this.load.image('bigThane', 'assets/bigthane.png');
    this.load.image('speech', 'assets/speech.png');
    this.load.image('close', 'assets/x.png');
}

function create() {
    // Building the background and tilemap

    
    background = this.add.image(550, 400, 'background');
    lilZara = this.add.image(450, 200, 'lilZara');
    lilBrynn = this.add.image(650, 200, 'lilBrynn');
    lilThane = this.add.image(850, 200, 'lilThane');



    speech1 = this.add.image(650, 450, 'speech').setAlpha(0);
    speech2 = this.add.image(650, 450, 'speech').setAlpha(0);
    speech3 = this.add.image(650, 450, 'speech').setAlpha(0);

    // Initially, bigZara is invisible
    bigZara = this.add.image(200, 375, 'bigZara').setAlpha(0);
    bigBrynn = this.add.image(200, 375, 'bigBrynn').setAlpha(0);
    bigThane = this.add.image(200, 375, 'bigThane').setAlpha(0);

    close1 = this.add.image(900, 350, 'close').setAlpha(0);
    close1.setScale(32 / close1.width, 32 / close1.height);

    close2 = this.add.image(900, 350, 'close').setAlpha(0);
    close2.setScale(32 / close2.width, 32 / close2.height);

    close3 = this.add.image(900, 350, 'close').setAlpha(0);
    close3.setScale(32 / close3.width, 32 / close3.height);

   

    // Set interactive property to true to enable input events
    lilZara.setInteractive();
    lilBrynn.setInteractive();
    lilThane.setInteractive();
    close1.setInteractive();
    close2.setInteractive();
    close3.setInteractive();

    //brynn


    charName = this.add.text(375, 325, '', {
        fontSize: '20px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    speechText = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    brynnOption1 = this.add.text(400, 475, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption2 = this.add.text(400, 500, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog2 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog3 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog4 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog5 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog6 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog7 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog8 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnDialog9 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    brynnOption3 = this.add.text(400, 450, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption4 = this.add.text(400, 500, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption5 = this.add.text(400, 450, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption6 = this.add.text(400, 500, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    brynnOption7 = this.add.text(400, 475, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption8 = this.add.text(400, 500, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    brynnOption9 = this.add.text(400, 475, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    brynnOption10 = this.add.text(400, 545, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    zaraDialogue = this.add.text(400, 355, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    zaraDialogue2 = this.add.text(400, 400, '', {
        fontSize: '18px',
        fontFamily: 'Pixelify Sans',
        color: '#000',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    zaraOption1 = this.add.text(400, 430, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    zaraOption2 = this.add.text(400, 465, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    zaraOption3 = this.add.text(400, 500, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);

    zaraOption4 = this.add.text(400, 550, '', {
        fontSize: '16px',
        fontFamily: 'Pixelify Sans',
        color: '#752438',
        wordWrap: {
            width: 500
        }
    }).setAlpha(0);


    brynnOption1.setInteractive();
    brynnOption2.setInteractive();
    brynnOption3.setInteractive();
    brynnOption4.setInteractive();
    brynnOption5.setInteractive();
    brynnOption6.setInteractive();
    brynnOption7.setInteractive();
    brynnOption8.setInteractive();
    brynnOption9.setInteractive();
    brynnOption10.setInteractive();

    brynnDialog2.setInteractive();
    brynnDialog3.setInteractive();
    brynnDialog4.setInteractive();
    brynnDialog5.setInteractive();
    brynnDialog6.setInteractive();
    brynnDialog7.setInteractive();
    brynnDialog8.setInteractive();
    brynnDialog9.setInteractive();


    zaraDialogue.setInteractive();
    zaraDialogue2.setInteractive();
    zaraOption1.setInteractive();
    zaraOption2.setInteractive();
    zaraOption3.setInteractive();
    zaraOption4.setInteractive();


    brynnOption1.on('pointerdown', function () {
        updateDialog("Anyway, let’s talk about you! Do you prefer to hunt or gather?", brynnDialog2);
        updateDialog("> Hunt! It's not just about the kill; it's about connecting with the ancient dance of predator and prey", brynnOption3);
        updateDialog("> Oh, I'm more of a gatherer. I mean, chasing after wild berries requires way less stamina than chasing after wild animals. Plus, they don't bite back... usually.", brynnOption4);
        brynnDialog2.setAlpha(1);
        brynnOption3.setAlpha(1);
        brynnOption4.setAlpha(1);
        speechText.destroy();
        brynnOption1.destroy();
        brynnOption2.destroy();
    });

    brynnOption2.on('pointerdown', function () {
        updateDialog("Anyway, let’s talk about you! Do you prefer to hunt or gather?", brynnDialog2);
        updateDialog("> Hunt! It's not just about the kill; it's about connecting with the ancient dance of predator and prey", brynnOption3);
        updateDialog("> Oh, I'm more of a gatherer. I mean, chasing after wild berries requires way less stamina than chasing after wild animals. Plus, they don't bite back... usually.", brynnOption4);
        brynnDialog2.setAlpha(1);
        brynnOption3.setAlpha(1);
        brynnOption4.setAlpha(1);
        speechText.destroy();
        brynnOption1.destroy();
        brynnOption2.destroy();
    });

    brynnOption3.on('pointerdown', function () {
        updateDialog("I’m really more of a hunt for a nice cave kind of gal.", brynnDialog3);
        brynnDialog3.setAlpha(1);
        brynnDialog2.destroy();
        brynnOption3.destroy();
        brynnOption4.destroy();
        brynnScore = brynnScore + 1;
        interactionAmount = interactionAmount + 1;
        brynnTalkTo = brynnTalkTo + 1;
    });

    brynnOption4.on('pointerdown', function () {
        updateDialog("By the mammoth’s tusks, me too! There’s just something about collecting berries and nuts all day.", brynnDialog4);
        brynnDialog4.setAlpha(1);
        brynnDialog2.destroy();
        brynnOption3.destroy();
        brynnOption4.destroy();
        brynnScore = brynnScore + 2;
        interactionAmount = interactionAmount + 1;
        brynnTalkTo = brynnTalkTo + 1; 
    });

    brynnOption5.on('pointerdown', function () {
        updateDialog("Ugh, don't remind me! But no, my fatal weakness is… Okay. Don’t laugh. I actually really love the romance cave paintings in the Southern mountains.", brynnDialog6);
        updateDialog("> Really? We used to make fun of those!", brynnOption7);
        updateDialog("> They’re not bad… but the plots are kind of cliche. ", brynnOption8);
        brynnDialog6.setAlpha(1);
        brynnOption7.setAlpha(1);
        brynnOption8.setAlpha(1);


        brynnDialog5.destroy();
        brynnOption5.destroy();
        brynnOption6.destroy();
    });

    brynnOption6.on('pointerdown', function () {
        updateDialog("Oh, you snake charmer! But no, my fatal weakness is… Okay. Don’t laugh. I actually really love the romance cave paintings in the Southern mountains.", brynnDialog6);
        updateDialog("> Really? We used to make fun of those!", brynnOption7);
        updateDialog("> They’re not bad… but the plots are kind of cliche. ", brynnOption8);
        brynnDialog6.setAlpha(1);
        brynnOption7.setAlpha(1);
        brynnOption8.setAlpha(1);

        brynnDialog5.destroy();
        brynnOption5.destroy();
        brynnOption6.destroy();
        
    });

    brynnOption7.on('pointerdown', function () {
        updateDialog("I know, I know. But I just can’t help but dream of that kind of all-consuming love. Someone who will always keep the fire lit and stay every winter by my side.", brynnDialog7);
        updateDialog("> I can’t say yet if we’re meant to be… but I’m the kind of person who will fight off a saber-tooth tiger for you. Winters together are just the start.", brynnOption9);
        updateDialog("> That’s me. We don’t have to dream any longer.", brynnOption10);
        brynnDialog7.setAlpha(1);
        brynnOption9.setAlpha(1);
        brynnOption10.setAlpha(1);


        brynnDialog6.destroy();
        brynnOption7.destroy();
        brynnOption8.destroy();
    });

    brynnOption8.on('pointerdown', function () {
        updateDialog("I know, I know. But I just can’t help but dream of that kind of all-consuming love. Someone who will always keep the fire lit and stay every winter by my side.", brynnDialog7);
        updateDialog("> I can’t say yet if we’re meant to be… but I’m the kind of person who will fight off a saber-tooth tiger for you. Winters together are just the start.", brynnOption9);
        updateDialog("> That’s me. We don’t have to dream any longer.", brynnOption10);
        brynnDialog7.setAlpha(1);
        brynnOption9.setAlpha(1);
        brynnOption10.setAlpha(1);


        brynnDialog6.destroy();
        brynnOption7.destroy();
        brynnOption8.destroy();
    });

    brynnOption9.on('pointerdown', function () {
        updateDialog("I appreciate knowing that about you. I really do.", brynnDialog8);
       
        brynnDialog8.setAlpha(1);
       


        brynnDialog7.destroy();
        brynnOption9.destroy();
        brynnOption10.destroy();

        brynnScore = brynnScore + 2;
        interactionAmount = interactionAmount + 1;
        brynnTalkTo = brynnTalkTo + 1;
    });

    brynnOption10.on('pointerdown', function () {
        updateDialog("Woah… Isn’t this moving a bit too fast?", brynnDialog8);
      
        brynnDialog8.setAlpha(1);
      


        brynnDialog7.destroy();
        brynnOption9.destroy();
        brynnOption10.destroy();

        brynnScore = brynnScore + 1;
        interactionAmount = interactionAmount + 1;
        brynnTalkTo = brynnTalkTo + 1;
    });

    zaraOption1.on('pointerdown', function () {
        updateDialog("And a heart as big as a wooly mammoth, I expect? I struggle sometimes to express how I feel.", zaraDialogue2);
      
        zaraDialogue2.setAlpha(1);
        zaraDialogue.destroy();
        zaraOption1.destroy();
        zaraOption2.destroy();
        zaraOption3.destroy();
        zaraOption4.destroy();
      
        zaraScore = zaraScore + 1;
        interactionAmount = interactionAmount + 1;
        zaraTalkTo = zaraTalkTo + 1;
    });


    zaraOption2.on('pointerdown', function () {
        updateDialog("I don’t lack in courage, but it takes a different kind of bravery to lead our people. I hope I can live up to their expectations.", zaraDialogue2);
      
        zaraDialogue2.setAlpha(1);
        zaraDialogue.destroy();
        zaraOption1.destroy();
        zaraOption2.destroy();
        zaraOption3.destroy();
        zaraOption4.destroy();
      
        zaraScore = zaraScore + 2;
        interactionAmount = interactionAmount + 1;
        zaraTalkTo = zaraTalkTo + 1;
    });


    zaraOption3.on('pointerdown', function () {
        updateDialog("That’s something I desire from my partner too. You can teach courage, warmth, and wit, but kindness is a different matter.", zaraDialogue2);
      
        zaraDialogue2.setAlpha(1);
        zaraDialogue.destroy();
        zaraOption1.destroy();
        zaraOption2.destroy();
        zaraOption3.destroy();
        zaraOption4.destroy();
      
        zaraScore = zaraScore + 3;
        interactionAmount = interactionAmount + 1;
        zaraTalkTo = zaraTalkTo + 1;
    });


    zaraOption4.on('pointerdown', function () {
        updateDialog("Ha! I have to admit, I might fall short of that. I’ve stumbled into Thane’s hunting traps all too many times, and, well, he’s Thane.", zaraDialogue2);
      
        zaraDialogue2.setAlpha(1);
        zaraDialogue.destroy();
        zaraOption1.destroy();
        zaraOption2.destroy();
        zaraOption3.destroy();
        zaraOption4.destroy();
      
        zaraScore = zaraScore + 1;
        interactionAmount = interactionAmount + 1;
        zaraTalkTo = zaraTalkTo + 1;
    });


    
}



function updateDialog(text, dialogue) {
    dialogue.setText(text);
}

function interactionBrynn() {
    updateDialog("Wow, hi! This is a lot of pressure, isn’t it? It feels like that last time I saw you, you were trying to chew on my pigtails.", speechText);

    updateDialog("> You still remember that?", brynnOption1);
    updateDialog("> I only chew food now, I promise", brynnOption2);
}

function interactionBrynn2() {
    
    updateDialog("I have a fatal weakness. I bet you can’t guess what it is.", brynnDialog5);
    updateDialog("> If it’s avoiding saber-tooth tigers, we’ve all been there.", brynnOption5);
    updateDialog("> I don’t know about you, but my fatal weakness is looking at you too long.", brynnOption6);
    brynnDialog5.setAlpha(1);
    brynnOption5.setAlpha(1);
    brynnOption6.setAlpha(1);
}

function interactionZara() {

    updateDialog("Long time no see, stranger. We don’t have a lot of time, so I’ll get straight to the point. What do you look for in a partner?", zaraDialogue);
    updateDialog("> I want someone with a heart warmer than a wooly mammoth.", zaraOption1);
    updateDialog("> I want someone more courageous than a lion.", zaraOption2);
    updateDialog("> I want someone kind enough to always keep the hearth fire burning.", zaraOption3);
    updateDialog("> I want someone clever enough to outsmart a fox.", zaraOption4);

    zaraDialogue.setAlpha(1);
    zaraOption1.setAlpha(1);
    zaraOption2.setAlpha(1);
    zaraOption3.setAlpha(1);
    zaraOption4.setAlpha(1);

}

function update() {
    // Check if the pointer is over lilZara

    if (this.input.activePointer.isDown) {
        if (close1.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make all characters and speech bubbles invisible
            bigZara.setAlpha(0);
            bigBrynn.setAlpha(0);
            bigThane.setAlpha(0);
            speech1.setAlpha(0);
            speech2.setAlpha(0);
            speech3.setAlpha(0);
            speechText.setAlpha(0);
            brynnOption1.setAlpha(0);
            brynnOption2.setAlpha(0);
            brynnDialog2.setAlpha(0);
            close1.setAlpha(0);
            charName.setAlpha(0);
            brynnDialog3.setAlpha(0);
            brynnDialog4.setAlpha(0);
            brynnDialog8.setAlpha(0);
            zaraDialogue2.setAlpha(0);
        }
    }

    if (this.input.activePointer.isDown) {
        if (close2.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make all characters and speech bubbles invisible
            bigZara.setAlpha(0);
            bigBrynn.setAlpha(0);
            bigThane.setAlpha(0);
            speech1.setAlpha(0);
            speech2.setAlpha(0);
            speech3.setAlpha(0);
            speechText.setAlpha(0);
            brynnOption1.setAlpha(0);
            brynnOption2.setAlpha(0);
            brynnDialog2.setAlpha(0);
            close2.setAlpha(0);
            charName.setAlpha(0);
            brynnDialog3.setAlpha(0);
            brynnDialog4.setAlpha(0);
            brynnDialog8.setAlpha(0);
            zaraDialogue2.setAlpha(0);
        }
    }

    if (this.input.activePointer.isDown) {
        if (close3.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make all characters and speech bubbles invisible
            bigZara.setAlpha(0);
            bigBrynn.setAlpha(0);
            bigThane.setAlpha(0);
            speech1.setAlpha(0);
            speech2.setAlpha(0);
            speech3.setAlpha(0);
            speechText.setAlpha(0);
            brynnOption1.setAlpha(0);
            brynnOption2.setAlpha(0);
            brynnDialog2.setAlpha(0);
            close3.setAlpha(0);
            charName.setAlpha(0);
            brynnDialog3.setAlpha(0);
            brynnDialog4.setAlpha(0);
            brynnDialog8.setAlpha(0);
            zaraDialogue2.setAlpha(0);
        }
    }

    if (this.input.activePointer.isDown) {
        if (lilZara.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make bigZara visible
            bigZara.setAlpha(1);
            speech1.setAlpha(1);
            close1.setAlpha(1);
            charName.setAlpha(1);
            updateDialog("Zara of the Red Moon", charName);

            if (zaraTalkTo == 0) {
                interactionZara();
                }
        }
    }

   
    if (this.input.activePointer.isDown) {
        if (lilBrynn.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make bigBrynn visible
            bigBrynn.setAlpha(1);
            speech2.setAlpha(1);
            speechText.setAlpha(1);
            brynnOption1.setAlpha(1);
            brynnOption2.setAlpha(1);
            close2.setAlpha(1);
            charName.setAlpha(1);
            updateDialog("Brynn of the River", charName);
            if (brynnTalkTo == 0) {
            interactionBrynn();
            }

            if (brynnTalkTo == 1) {
                interactionBrynn2();
                }
        } 
    }

    if (this.input.activePointer.isDown) {
        if (lilThane.getBounds().contains(this.input.x, this.input.y)) {
            // If yes, make bigZara visible
            bigThane.setAlpha(1);
            speech3.setAlpha(1);
            close3.setAlpha(1);
            charName.setAlpha(1);
            updateDialog("Thane the Steadfast", charName);
        } 
    }
    // Additional update logic here if needed
}
