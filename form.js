class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.title = createElement("h2");
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display() {
        this.title.html("my game");
        this.title.position(displayWidth/2,0);

        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+80);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
        });

    }
}