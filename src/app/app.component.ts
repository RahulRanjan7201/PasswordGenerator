import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Password-generator';
  password:string = "";
  includeLetters:boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false; 
  passwordLength:number = 0;
  onButtonClick() {
    const numbers = '1234567890';
    const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if(this.includeLetters) {
      validChars += uppercaseLetter;
      validChars += lowerCase;
    }
    if(this.includeNumbers) {
      validChars +=numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for(let i=0;i<this.passwordLength; i++) {
       const index = Math.floor(Math.random() * validChars.length);
       generatedPassword +=  validChars[index];
    }     
    this.password =generatedPassword;
  }
  getPassword() {
    return this.password;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = ! this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value: string) {
    const parseValue = parseInt(value);
    if(!isNaN(parseValue)) {
      this.passwordLength = parseValue;
    }
  }
}
