import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {
    transform(value: any,arg: string) {
        if(arg == 'uppercase') {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }
    }
}