import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { interval, Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
    selector: "app-rxjs",
    standalone: true,
    imports: [CommonModule],
    template: `
    <div>
        <h3>Lesson 1: Simple Counter</h3>
        <p>Counter : {{ count }}</p>
        <button (click)="startCounter()">Start Counter</button>

    </div>
    `
})
    export class RxjsComponent implements OnInit, OnDestroy {
        
        count: number = 0;
        number: string = '';
        doubledNumbers: string = '';

        private subscription?: Subscription;


        ngOnInit(): void {
        console.log('RxJS Component loaded!');
        }

        // lesson1 counts from 0 to 9
        startCounter(): void {
            //create observable 
            this.subscription = interval(1000).pipe(take(10)).subscribe(value => {
                this.count = value;
                console.log('Counter Value:', value);
            });
        }
        
        ngOnDestroy(): void {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        }
   
    }