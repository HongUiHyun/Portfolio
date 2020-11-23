/**
 * Binary Tree
 */

 function BinaryTreeNode(value){
     this.value = value;
     this.left = null;
     this.right = null;
 }

 function BinaryTree(){
     this._root = null;
 }

 BinaryTree.prototype.insert = function(data){
     let node = new BinaryTreeNode(data);
     if(this._root==null){
         this._root=node;
     }else{
         let parentNode ;
         let current = this._root;
         while(current){
             parentNode = current;
            if(data<current.value){
                current=current.left;
                if(current==null){
                    parentNode.left =node;
                }
            }else if(data>current.value){
                current=current.right;
                if(current==null){
                    parentNode.right =node;
                }
                
            }else{
                break; //ignore overlap
            }
        }
     }
 }

/**
 * DFS - Depth First Search
 */
 BinaryTree.prototype.traversePreOrder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node)
           return
       console.log(node.value);
       traversePreOrderHelper(node.left);
       traversePreOrderHelper(node.right);
    }

 }

 BinaryTree.prototype.traverseInOrder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node)
           return
       traversePreOrderHelper(node.left);
       console.log(node.value);
       traversePreOrderHelper(node.right);
    
     }
 }

 BinaryTree.prototype.traversePostOrder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node)
           return
       traversePreOrderHelper(node.left);
       traversePreOrderHelper(node.right);
       console.log(node.value);
    

 }
}


/**
 * BFS - Breath First Search
 */


 BinaryTree.prototype.traverseLevelOrder = function(){
    let root = this._root,queue = [],result=[];
    
    if(!root)
        return
    queue.push(root);
    while(queue.length){
        let current = queue.shift();
        result.push(current.value);

        if(current.left){
            queue.push(current.left);
        }

        if(current.right){
            queue.push(current.right);
        }

    }
    return result;

 }



 BinaryTree.prototype.remove = function(value){
    return deleteBinaryTreeNode(this._root,value);

    function findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
    function deleteBinaryTreeNode(root,value){
        if(!root){
            return null;
        }else if(value<root.value){
            root.left = deleteBinaryTreeNode(root.left,value);
        }else if(value>root.value){
            root.right = deleteBinaryTreeNode(root.right,value);
        }else{
            if(!root.right&&!root.left){
                return null;
            }else if(!root.left){
                root = root.right;
                return root
            }else if(!root.right){
                root = root.left;
                return root;
            }else{
                let temp = findMin(root.right);
                root.value = temp.value;
                root.right  = deleteBinaryTreeNode(root.right,temp.value);
                return root;
            }

        }
    return root;

    }
 }


 BinaryTree.prototype.find = function(value){
    let currentNode=this._root,result =false;
    while(currentNode){
        if(currentNode.value>value){
            currentNode = currentNode.left;
        }else if(currentNode.value<value){
            currentNode = currentNode.right;
        }else{
            result =true;
            break;
        }
    }

    return result


 }


 BinaryTree.prototype.rotateLL = function(){
    var valueBefore = this.value; //40
    var rightBefore = this.right; //45
    let node = this._root
    node.value =  node.left.value;

    node.right = node.left;
    node.left = node.left.left;
    node.right.left = node.left.right;
    node.right.right = valueBefore;
    node.right.value = rightBefore;


    // this.right = this.left;
    // this.left = this.left.left;
    // this.right.left = this.left.right;
    // this.right.value = valueBefore;
    // this.right.value = rightBefore;
    }

 let bfs = new BinaryTree();
 bfs.insert(10);
 bfs.insert(8);
 bfs.insert(7);
 console.log(bfs);
 bfs.rotateLL();
 console.log(bfs);

