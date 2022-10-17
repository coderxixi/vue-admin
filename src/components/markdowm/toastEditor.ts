export default class {
  editor:toastui.Editor
  constructor(el:string,height:string,initialValue:string){
    this.editor=new toastui.Editor({
     el:  document.querySelector(el),
     height:height,
     initialValue: initialValue,
     initialEditTYpe:"markdown",
     previewStyle:"vertical",
    })
 
  }
}