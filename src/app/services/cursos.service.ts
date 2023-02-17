import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursosPromesa: Curso[] = [
    {
      nombre: "Angular Promesa",
      comision: "44980",
      profesor: {
        nombre: "Fernando",
        correo: "f_gir_07@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    },
    {
      nombre: "React Promesa",
      comision: "44981",
      profesor: {
        nombre: "Roberto",
        correo: "roberto@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    },
    {
      nombre: "C# Promesa",
      comision: "44987",
      profesor: {
        nombre: "Karina",
        correo: "karina@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    }
  ]

  private cursosInformacionObservable: Curso[] = [
    {
      nombre: "Angular Observable",
      comision: "44980",
      profesor: {
        nombre: "Fernando",
        correo: "f_gir_07@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    },
    {
      nombre: "React Observable",
      comision: "44981",
      profesor: {
        nombre: "Roberto",
        correo: "roberto@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    },
    {
      nombre: "C# Observable",
      comision: "44987",
      profesor: {
        nombre: "Karina",
        correo: "karina@hotmail.com",
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2022, 2, 15),
      fechaFin: new Date(2022, 2, 15),
      inscripcionAbierta: true
    }
  ]

  //private cursos$: Observable<Curso[]>;
  private cursos$: BehaviorSubject<Curso[]>;

  constructor() {
    /*
    this.cursos$ = new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursosInformacionObservable);
    })
    */
    this.cursos$ = new BehaviorSubject(this.cursosInformacionObservable);
  }

  obtenerCursosPromise(): Promise<Curso[]> {
    return new Promise((resolve, reject) => {
      if (this.cursosPromesa.length > 0) {
        resolve(this.cursosPromesa);
      }
      else {
        reject([]);
      }
    });
  }

  obtenerCursosObservable(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  agregarCursoObservable(curso: Curso) {
    this.cursosInformacionObservable.push(curso);
  }
}
