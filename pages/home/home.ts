import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { BrMaskModel, BrMaskerIonic3 } from 'brmasker-ionic-3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BrMaskerIonic3]
})
export class HomePage {

  form: FormGroup;

  constructor(public navCtrl: NavController, private brMaskerIonic3: BrMaskerIonic3) {
    this.form = this.createForm();

  }

  protected createForm(): FormGroup {
    return new FormGroup({
      money: new FormControl(this.createPhone())
    });

  }

  private createPhone(): string {
    const config: BrMaskModel = new BrMaskModel();
    config.money = true;
    config.thousand = '.';
    config.decimal = 2;
    return this.brMaskerIonic3.writeCreateValue('05', config);
  }

}
