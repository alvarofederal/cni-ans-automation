import { Component } from '@angular/core';
   
import { FileUploadService } from '../../services/file-upload.service';
import { AnsRecord } from '../../model/ans-record.model';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
  export class FileUploadComponent {


selectedFile: File | null = null;
  message: string = '';
  records: AnsRecord[] = [];

  constructor(private uploadService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.message = '';
    this.records = [];
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
          // Parsear o JSON recebido
          this.records = JSON.parse(response);
          // Criar um blob para o JSON e iniciar o download
          const blob = new Blob([response], { type: 'application/json' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'ans_records.json';
          a.click();
          window.URL.revokeObjectURL(url);
          this.message = `Arquivo JSON gerado com sucesso! ${this.records.length} registros carregados.`;
          console.log('Registros carregados:', this.records);
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