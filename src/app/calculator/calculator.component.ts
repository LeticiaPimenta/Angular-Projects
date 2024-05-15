import { CalculatorService } from './service/calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  //private because just this class can be access
private number1: string;
private number2: string;
private result: number;
private operation: string;

constructor(
  private calculatorService: CalculatorService
) {}

ngOnInit(): void {
  this.limpar();

}

limpar() {
  this.number1 = "0";
  this.number2 = null;
  this.result = null;
  this.operation = null;
}


addNumber(number: string): void {
  if(this.operation === null) {
    this.number1 = this.concatenateNumber(this.number1, number);
  } else {
    this.number2 = this.concatenateNumber(this.number2, number);
  }
}

concatenateNumber(currentNumber: string, concatenateNumber: string): string {
  if(currentNumber == '0' || currentNumber == null){
    currentNumber = '';
  }
  if(concatenateNumber == '.' && currentNumber == ''){
    return '0.';
  }
  if(concatenateNumber == '.' && currentNumber.indexOf('.') > -1){
    return currentNumber;
  }
  return currentNumber + concatenateNumber;
}

setOperation(operation: string) {
  if(this.operation === null) {
    this.operation = operation;
    return;
  }
  if (this.number2 !== null){
    this.result = this.calculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    );
    this.operation = operation;
    this.number1 = this.result.toString();
    this.number2 = null;
    this.result = null;
  }
}

calculate() {
  if (this.number2 == null) {
    return;
  }

  this.result = this.calculatorService.calculate(
    parseFloat(this.number1),
    parseFloat(this.number2),
    this.operation
  );
}

get display() : string {
  if (this.result !== null) {
    return this.result.toString();
  }
  if (this.number2 !== null) {
    return this.number2;
  }
  return this.number1;
}
}
