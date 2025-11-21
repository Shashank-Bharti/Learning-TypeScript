// let weight: number & string; //this is not possible

type Draggable = {
    drag: ()=> void;
}

type Resizable = {
    resize: ()=> void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag: ()=> {},
    resize: ()=>{}
}