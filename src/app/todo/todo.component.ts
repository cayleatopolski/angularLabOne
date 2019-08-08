import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  toDoList: Todo[] = [
    { task: "Go to class", completed: true },
    { task: "Drink too much coffee", completed: true },
    { task: "Get a headache", completed: true },
    { task: "Take Excedrin", completed: true },
    { task: "Do a lab", completed: false },
    { task: "Sit in traffic", completed: false },
    { task: "Space out on couch", completed: true }
  ];

  ngOnInit() {}
}
