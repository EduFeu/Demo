import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Paciente, PacienteProvider } from '../../providers/paciente/paciente';


// @IonicPage()
@Component({
  selector: 'page-edit-paciente',
  templateUrl: 'edit-paciente.html',
})
export class EditPacientePage {
  model: Paciente;
  categories: any[];

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private pacienteProvider: PacienteProvider
    ) {

    this.model = new Paciente();

    if (this.navParams.data.id) {
      this.pacienteProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.model = result;          
        })
    }
  }

  /**
   * Runs when the page has loaded
   */
  ionViewDidLoad() {
    // this.categoryProvider.getAll()
    //   .then((result: any[]) => {
    //     this.categories = result;
    //   })
    //   .catch(() => {
    //     this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
    //   });
  }

  save() {
    this.savePaciente()
      .then(() => {
        this.toast.create({ message: 'Paciente salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o paciente.', duration: 3000, position: 'botton' }).present();
      });
  }

  private savePaciente() {
    if (this.model.id) {
      return this.pacienteProvider.update(this.model);
    } else {
      return this.pacienteProvider.insert(this.model);
    }
  }

}
