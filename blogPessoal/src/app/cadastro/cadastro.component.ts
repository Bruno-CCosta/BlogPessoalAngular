import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: String;

  constructor(
    private authService: AuthService, 
    private router: Router

  ) { }

  ngOnInit(): void{
 
  }

  confirmarSenha(event: any){
          this.senha = event.target.value
  }

  cadastrar() {
    if ( this.senha === this.usuario.senha ) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)  => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    } else {
      alert('Suas senhas não conferem')
      }

      
    }

 

}

