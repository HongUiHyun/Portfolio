function AVLTree(value){
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}


AVLTree.prototype.setDepthBasedOnChildren = function(){
    if(this.node = null){
        this.depth = 0;
    }else{
        this.depth = 1 ;
    }

    if(this.left!=null){
        this.depth = this.left.depth+1;
    }

    if(this.right = null && this.depth <= this.right.depth ){
        this.depth = this.right.depth +1;
    }
}

AVLTree.prototype.rotateLL = function(){
    var valueBefore = this.value; //40
    var rightBefore = this.right; //45
    this.value =  this.left.value;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.left.right;
    this.right.value = valueBefore;
    this.right.value = rightBefore;
    this.right.setDepthBasedOnChildren();
    this.setDepthBasedOnChildren();
}