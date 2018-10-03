import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PacienteProvider, Paciente } from '../../providers/paciente/paciente';
import { EditPacientePage } from '../edit-paciente/edit-pacientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pacientes: Array<any> = [];
  onlyInactives: boolean = false;
  searchText: string = null;

  constructor(public navCtrl: NavController, private toast: ToastController, private pacienteProvider: PacienteProvider) { }

  ionViewDidEnter() {
    this.getAllPacientes();
  }

  getAllPacientes() {
    this.pacienteProvider.getAll(!this.onlyInactives, this.searchText)
      .then((result: any[]) => {
        this.pacientes = result;
        console.log(this.pacientes);
      });
  }

  addPaciente() {
    this.navCtrl.push(EditPacientePage);
  }

  editPaciente(id: number) {
    this.navCtrl.push(EditPacientePage, { id: id });
  }

  removePaciente(paciente: Paciente) {
    this.pacienteProvider.remove(paciente.id)
      .then(() => {
        // Removendo do array de produtos
        var index = this.pacientes.indexOf(paciente);
        this.pacientes.splice(index, 1);
        this.toast.create({ message: 'Paciente removido.', duration: 3000, position: 'botton' }).present();
      })
  }

  filterPacientes(ev: any) {
    this.getAllPacientes();
  }

}
