import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public isLoading = signal<boolean>(false);

  constructor() { }

  public runLoading(): void {
    this.setIsLoading(true);
    setTimeout(() => {
      this.setIsLoading(false);
    }, 2000);
  }

  private setIsLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }
}
