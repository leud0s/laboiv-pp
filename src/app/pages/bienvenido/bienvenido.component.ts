import { Component, OnInit } from '@angular/core';
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

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.cargarUsuario();
    this.githubService.getInfo().then((res) => {
      this.infoGithub = res;
    });
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
