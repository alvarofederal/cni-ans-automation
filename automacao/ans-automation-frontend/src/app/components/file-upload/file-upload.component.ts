import { Component } from '@angular/core';
   
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
  export class FileUploadComponent {
    selectedFile: File | null = null;
    message: string = '';

    constructor(private uploadService: FileUploadService) {}

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      this.message = '';
      if (this.selectedFile) {
        console.log('Arquivo selecionado:', this.selectedFile.name, 'Tamanho:', this.selectedFile.size);
      } else {
        console.log('Nenhum arquivo selecionado.');
      }
    }

    upload() {
      if (this.selectedFile) {
        console.log('Enviando arquivo:', this.selectedFile.name);
        this.uploadService.uploadFile(this.selectedFile).subscribe({
          next: (response) => {
            this.message = response;
            console.log('Resposta do backend:', response);
          },
          error: (error) => {
            this.message = 'Erro ao fazer upload: ' + error.message;
            console.error('Erro na requisição:', error);
          }
        });
      } else {
        this.message = 'Selecione um arquivo primeiro!';
      }
    }
  }