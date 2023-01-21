import { FormGroup, Validators } from "@angular/forms";


export function requiradFunction(control1:string,control2:string){
    return (FormGroup:FormGroup):{[key:string]:boolean} | null =>{
        const government= FormGroup.controls[control1];
        const city= FormGroup.controls[control2];
        if(government.value==="Cairo"){
            return Validators.required((city));
        }
        return null
    }
}