import { Component } from '@angular/core';
   
import { FileUploadService } from '../../services/file-upload.service';
import { AnsRecord } from '../../model/ans-record.model';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
    selectedFile: File | null = null;
    message: string = '';
    records: AnsRecord[] = [];
    currentPage: number = 1;
    pageSize: number = 10;
  
    constructor(private uploadService: FileUploadService) {}
  
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      this.message = '';
      this.records = [];
      this.currentPage = 1;
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
            this.records = JSON.parse(response);
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
  
    get paginatedRecords(): AnsRecord[] {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.records.slice(startIndex, startIndex + this.pageSize);
    }
  
    get totalPages(): number {
      return Math.ceil(this.records.length / this.pageSize);
    }
  
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }