export interface HeaderProps{
    openMenu:boolean;
    checkedList:string[];
    onOpenMenu:() => void;
    onCloseMenu:() => void;
    onSelectItemMenu:(item:string) => void;
}