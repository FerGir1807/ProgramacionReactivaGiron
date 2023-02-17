import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, from, map, of, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {

  suscription!: Subscription;
  constructor(private cursoService: CursosService) {

  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe;
  }
  ngOnInit(): void {
    this.cursoService.obtenerCursosPromise().then((cursos: Curso[]) => {
      this.cursosPromesas = cursos;
    }).catch((error: any) => {
      console.log("No existen cursos disponibles");
    });

    this.suscription = this.cursoService.obtenerCursosObservable().subscribe((cursos) => {
      this.cursosObservable = cursos;
    })
  }

  cursosPromesas: Curso[] = [];
  cursosObservable: Curso[] = [];
  cursosObservableMap: Curso[] = [];



  agregarCursoObservable() {

    let curso: Curso = {
      nombre: "Excel Observable",
      comision: "117788",
      fechaFin: new Date,
      fechaInicio: new Date,
      inscripcionAbierta: true,
      profesor: {
        nombre: "Roberto",
        correo: "f_gir_07@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      }
    }

    this.cursoService.agregarCursoObservable(curso);
  }

}
