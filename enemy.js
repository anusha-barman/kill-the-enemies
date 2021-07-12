class Enemy{
    constructor(x,y,w,h){
    var options={
        isStatic:true
    }
    this.image=loadImage("covid-cells.png")
    this.body=Bodies.rectangle(x,y,w,h,options )
    this.w= w
    this.h= h
    World.add(world,this.body);
    
    
    
    }
    
    
    display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    
    
    
    
    
    }
    
    
    
    
    
    }