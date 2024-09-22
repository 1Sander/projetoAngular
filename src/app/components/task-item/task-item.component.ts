import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { MatIconModule } from '@angular/material/icon';  // Angular Material Icon
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-task-item', 
  standalone: true, 
  imports: [MatIconModule, CommonModule],  
  templateUrl: './task-item.component.html', 
  styleUrls: ['./task-item.component.css'] 
})
export class TaskItemComponent {
  
  @Input() tarefa!: Tarefa; 
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); 
  @Output() onToggleConcluido = new EventEmitter<Tarefa>(); 

  // emite o evento de exclusão da tarefa
  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa); // Emite a tarefa a ser excluída
  }
  
  // emite o evento de alternância de conclusão da tarefa
  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}
