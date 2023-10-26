import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cells: string[] = new Array(10).fill('blue_ball.png');
  message: string = '';
  playAgainButtonVisible: boolean = false;
  // bodyBackgroundImage: string = 'url("../assets/background1.jpg")'; 
  bodyBackgroundImage = '../assets/background1.jpg';
  
  nemoCellLocation: number = this.generateRandomLocation();
  attempts: number = 0;
  gameOver: boolean = false;

  cellClicked(index: number): void {
    if (!this.gameOver) {
      this.attempts++;

      if (index === this.nemoCellLocation) {
        this.cells[index] = 'nemo.png';
        // this.cells[index] = true;
        this.message = `Congratulations! You Won!! Attempts: ${this.attempts}`;
        this.playAgainButtonVisible = true;
        this.gameOver = true;
        // this.bodyBackgroundImage = 'url("../assets/background2.jpg")';
        this.bodyBackgroundImage = '../assets/background2.jpg';

      } 
      else {
        this.cells[index] = 'error.png'; 
        if (this.attempts >= 6) {
          this.message = 'Sorry. You Lose. Nemo No More!! Maximum attempt limit exhausted.';
          this.playAgainButtonVisible = true;
          this.gameOver = true;
          // this.bodyBackgroundImage = 'url("../assets/background3.jpg")';
          this.bodyBackgroundImage = '../assets/background3.jpg';

        }
      }
    }
  }

  playAgain(): void {
    this.cells.fill('blue_ball.png');
    this.nemoCellLocation = this.generateRandomLocation();
    this.attempts = 0;
    this.message = '';
    this.playAgainButtonVisible = false;
    this.gameOver = false;
    // this.bodyBackgroundImage = 'url("../assets/background1.jpg")';
    this.bodyBackgroundImage = '../assets/background1.jpg';
  }

  generateRandomLocation(): number {
    return Math.floor(Math.random() * 10);
  }
}
