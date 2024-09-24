import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Firebase Notification';

  constructor(
    private messagingService: MessagingService
  ) {}

  ngOnInit(): void {
    this.messagingService.requestToken();
  }
}
