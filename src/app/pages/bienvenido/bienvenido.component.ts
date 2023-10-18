import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss'],
  
})
export class BienvenidoComponent implements OnInit{
  user!: any;
  loading = false;
  infoGithub!: any;

  constructor(private githubService: GithubService,private authService: AuthService) {}
  ngOnInit(): void {
    this.cargarUsuario();
    this.githubService.getInfo().then((res) => {
      this.infoGithub = res;
    });
  }

  cargarUsuario() {
    this.user  = this.authService.getCurrentUser();
  }
}
