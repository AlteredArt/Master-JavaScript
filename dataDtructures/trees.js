// Begin with creating a node class, which we will use to build our tree
class Node {
    //Remember constructor creates an instance of the Object every time it is called
    //Creating a new Parent Node
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    //The Add method takes of Children array and pushes on a new node with our data attached. 
    add(data) {
        this.children.push(new Node(data));
    }
    //Remove method loops through every Child of the current node and removes it
    //Since it's an array we can use the Filter Method
    //Remember Filter doesn't modify the original Array
    remove(data) {
        this.children = this.children.filter(node => {
            //return any data not equal to our data passed in remove
            return node.data !== data;
        })
    }
}

const node = new Node(1);

//Unlike liked list / we will keep our add and remove methods within the Node Class
//The Tree Class will stick will traversal methods only.
//I take this approach, so we can clearly specify which node we want to add or remove elements from.
//You can always change the method structure yourself if you would like.
class Tree {
    constructor() {
        this.root = null;
    }

    breatheFirstTraversal(fn) {
        //Set an array with the value of the Tree root
        const arr = [this.root];
        //While 
        while (arr.length) {
            //Shift the node to the array
            const node = arr.shift();
            //Then push all the Nodes Children too the array by spreading
            //Spread prevents nested arrays, because node.children is an array
            arr.push(...node.children)
            //Remember to pass in our Function with Node
            fn(node);
        }
    }

    depthFirstTraversal(fn) {
        const arr = [this.root];
        //While
        while (arr.length) {
            //Lets grab our first element in the Array
            const node = arr.shift();
            //Now take that Nodes Children and add it on to front of the Array
            //ES6 Spread really saves us some lines of code, instead of a For Loop
            arr.unshift(...node.children);
            //Remember to add our call back function with Node
            fn(node);
        }
    }

}

const tree = new Tree();
//Here we manually update the Trees root node by setting it to the node we created.
tree.root = node;