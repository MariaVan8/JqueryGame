'use strict';

const game = {
    title: "Splash",
    isRunning: false,
    SwitchScreen(screenId){
        $('[id^="screen"]').hide()
        $('#'+screenId).show()
        if(screenId !== 'screen2'){
            game.isRunning=false;
        }

    },
    Toggle(){
        
        // Toggle the game's running state
        this.isRunning = !this.isRunning;

      
        let button = $('.play-pause');
        let container = $('.box-container');

        if (game.isRunning) {
            console.log("TEST!!!")

            button.removeClass('play-icon').addClass('pause-icon');
            container.addClass('running');
        } else {
        console.log("TEST 2!!!")

            button.removeClass('pause-icon').addClass('play-icon');
            container.removeClass('running');
        }
    },
    init(){
        //Event listeners

        $('.start-button').click(()=>{
          this.SwitchScreen('screen2'); 
        });

        $('.play-icon').click(()=>{
           this.Toggle();
        });

        $('#screen2 .quit-button').click(function(){
            if(!game.isRunning){
                game.SwitchScreen('screen3');
            }
        });

        $('.again-button').click(()=>{
            game.SwitchScreen('screen2');
            game.isRunning = false;
           
           
        });

        $('.exit-button').click(function(){
            if(!game.isRunning){
                game.SwitchScreen('screen1');
            
            }
        });



    }

};

$(document).ready(()=>{
    game.init();
})

