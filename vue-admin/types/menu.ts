
interface Menu {
  title?:string,
  icon?:string,
  isClick?:boolean,
}

export interface IMenu extends Menu{
   children?:Menu[]
}