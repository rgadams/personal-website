import { Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
// import { NgxMatColorPickerInputEvent } from '@angular-material-components/color-picker';

@Component({
    selector: 'app-mix-blend-mode',
    templateUrl: './mix-blend-mode.component.html',
    styleUrls: ['./mix-blend-mode.component.less']
})
export class MixBlendModeComponent{
    colorCtr: AbstractControl = new FormControl(null, [Validators.required]);
    touchUi = false;
    color: ThemePalette = 'primary';

    // handleColorChange(event: NgxMatColorPickerInputEvent) {
    //     const mixBlendModeElement = document.getElementById('mix-blend-mode');
    //     mixBlendModeElement.style.backgroundColor = event.value.toHexString();
    // }
}
