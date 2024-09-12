import { Component, input, Input } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrl: './movement-details.component.scss'
})
export class MovementDetailsComponent {

  @Input() movement: any;
  @Input() wodName: string ='';

  chatResponse: string = '';

  constructor(private openaiService: OpenaiService) {}

  ngOnInit(): void {
    if (this.movement && this.wodName) {
      this.getAdvice(this.wodName, this.movement.movement, this.movement.part);
    }
  }
  
  // Method to send a request to ChatGPT and get a response
  getAdvice(wodName: string, movement: string, part: number): void {
    this.openaiService.getChatResponse(wodName, movement, part)
    .subscribe(response => {
      this.chatResponse = response.choices[0].message.content;
    });
  }
}
