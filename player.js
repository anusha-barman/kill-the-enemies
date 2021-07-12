class Player{
constructor(x,y,w,h){
this.image= loadImage("girl 4.jfif")
this.body=Bodies.rectangle(x,y,w,h)
this.w= w
this.h= h
World.add(world,this.body);



}


display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)





}





}