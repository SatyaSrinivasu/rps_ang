import { Directive, Input, OnInit, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    //[] must for selector
    selector: "[highlight]"
})
export class HighlightDirective  implements OnInit {
    @Input()
    color: string = "yellow";
    
    //Dependency injection
    constructor(private element:ElementRef,private renderer: Renderer) {
        console.log("element:-->"+element);
        console.log("renderer:-->"+renderer);
    }

    ngOnInit() {
        this.setColor(this.color);
    }

    @HostListener("mouseenter")
    onMouseEnter(){
        this.setColor(this.color);
    }

    @HostListener("mouseleave")
    onMouseLeave(){
        this.setColor('');
    }

    setColor(bgColor: string) {
        this.renderer.setElementStyle(
            this.element.nativeElement,
            "background",
            bgColor
        )
    }

}