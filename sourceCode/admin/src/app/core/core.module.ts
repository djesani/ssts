import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './guard/auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule {}