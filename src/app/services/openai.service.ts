import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey: string = `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`;
  
  constructor(private http: HttpClient) { }

  // Method to send a question to ChatGPT 4 and get a response
  askQuestion(question: string) {
    return this.http.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  getChatResponse(wodName: string, movement: string, part: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    console.log('THIS IS CHAT RESPONSE wodName', wodName, movement, part);
    // Message format for ChatGPT
    const prompt = `Answer me as a CrossFit specialist to help me achieve nicely in a WOD named ${wodName} which I'm doing as RX. Could you give me the details of how I should divide my movement of ${movement} in part ${part}, how much time it will take me, and how much rest should I take before going to the next movement?`;

    const body = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a CrossFit specialist.' },
        { role: 'user', content: prompt }
      ]
    };

    return this.http.post(this.apiUrl, body, { headers });

    
  }
  
}


// Absolutely! "Fran" is one of the classic CrossFit 
// workouts and is known for its intensity. 
// It consists of thrusters and pull-ups, specifically: - 21-15-9 reps of: - Thrusters (95/65 lbs) - 
// Pull-Ups ### Pull-Up Strategy **1. Movement 
// Division:** For the pull-ups, a good strategy would be to break them down
//  into manageable sets to avoid failure. Here’s a possible 
//  breakdown: - **21 Pull-Ups:** - Try 3 sets: 7-7-7 or 6-6-6-6-3 (adjust based on your strength and fatigue) -
//   **15 Pull-Ups:** - 2 sets: 8-7 or 5-5-5 (again, adjust as necessary) - **9 Pull-Ups:** 
//   - 1 set (or 5-4 if you're feeling fatigued) **2. Time Management:** Depending on your fitness level, 
//     here's an estimate for how long you might take for the pull-ups: - For the **21 Pull-Ups**: 1-2 minutes - 
//     For the **15 Pull-Ups**: 1-1.5 minutes - For the **9 Pull-Ups**: 30 seconds - 
//     1 minute This adds up to approximately 2.5 to 4.5 minutes for the pull-up portions of the workout. 
//     ### Rest Periods **Resting is crucial
//     ** to maintain intensity throughout the workout. 
//     A general guideline for rest can be: - 
//     **After each set of Pull-Ups
//     **: Take a rest period that allows you to feel recovered but not too long to lose momentum. 
//     For example: - After the 21 pull-ups: Rest about 1 minute or until your heart rate drops enough to continue. 
//     - After the 15 pull-ups: Same as above, about 30 seconds to 1 minute. 
//     - After the 9 pull-ups: 30 seconds or as needed. 
//     ### Summary 1. 
//     **Pull-Up Breakdown**: - 21: 7-7-7 - 15: 8-7 - 9: 9 (or 5-4 if fatigued) 2. 
//     **Estimated Time**: - Pull-Ups: 2.5 to 4.5 minutes total 3. 
//     **Rest**: - 1 minute after 21; up to 1 minute after 15; 30 seconds after 9. 
//     Remember to listen to your body. 
//     If you feel fatigued and need a longer rest, take it, but try to stay engaged mentally during recovery. 
//     Good luck, and most importantly, 
//     have fun with "Fran"!