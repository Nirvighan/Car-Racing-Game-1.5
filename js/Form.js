//create the form class
class Form
{
    //create the constructor function
    constructor()
    {
      this.input = createInput("Name");
       this.button = createButton('play');
       this.greeting = createElement('h3');


    }

    //create the hide function
    hide()
    {
     this.greeting.hide();
     this.button.hide();
     this.input.hide();

    }

    //create the display function
    display()
    {
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(430,0);

      
      this.input.position(430,160);
      this.button.position(550,200);

      this.button.mousePressed(() => {
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount += 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Hello " + player.name);
         this.greeting.position(530,160);

      })


    }


};