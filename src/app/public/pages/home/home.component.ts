// src/app/pages/home/home.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoleService } from '../../../iam/services/role.service';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatButton } from '@angular/material/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatButton,
    MatSidenav,
    MatSidenavContainer
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  role: 'farmer' | 'consultant' = 'farmer';
  private roleSub!: Subscription;

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleSub = this.roleService.getRole$().subscribe(role => {
      this.role = role;
    });
  }

  switchRole(): void {
    this.roleService.toggleRole();
    // No need to manually update this.role — the subscription handles it
  }

  ngOnDestroy(): void {
    this.roleSub.unsubscribe();
  }
}
