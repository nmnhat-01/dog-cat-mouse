function dog() {
    this.weight = '3kg';
    this.height = "0.5m";
    this.age = '2';
    this.stomach = [];
}
dog.prototype.eat = function(food){
    this.stomach.push(food);
}
