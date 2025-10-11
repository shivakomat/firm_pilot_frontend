import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

export interface FileUploadConfig {
  acceptedTypes?: string[];
  maxFileSize?: number;
  maxFiles?: number;
  allowMultiple?: boolean;
}

export interface UploadedFileInfo {
  file: File;
  id: string;
  name: string;
  size: number;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() config: FileUploadConfig = {
    acceptedTypes: ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'],
    maxFileSize: 10 * 1024 * 1024,
    maxFiles: 10,
    allowMultiple: true
  };
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Drag & drop files here';

  @Output() filesSelected = new EventEmitter<UploadedFileInfo[]>();

  isDragOver: boolean = false;
  uploadedFiles: UploadedFileInfo[] = [];

  onDragOver(event: DragEvent): void {
    if (this.disabled) return;
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    if (this.disabled) return;
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    if (this.disabled) return;
    event.preventDefault();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files) this.handleFiles(files);
  }

  onFileSelected(event: any): void {
    if (this.disabled) return;
    const files = event.target.files;
    if (files) this.handleFiles(files);
    event.target.value = '';
  }

  handleFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (!this.isValidFileType(file)) {
        this.showError(`Invalid file type: ${file.name}`);
        continue;
      }
      
      if (file.size > this.config.maxFileSize!) {
        this.showError(`File too large: ${file.name}`);
        continue;
      }
      
      if (this.uploadedFiles.length >= this.config.maxFiles!) {
        this.showError(`Maximum ${this.config.maxFiles} files allowed`);
        break;
      }

      const fileInfo: UploadedFileInfo = {
        file,
        id: Math.random().toString(36),
        name: file.name,
        size: file.size
      };
      
      this.uploadedFiles.push(fileInfo);
    }
    
    this.filesSelected.emit([...this.uploadedFiles]);
  }

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
    this.filesSelected.emit([...this.uploadedFiles]);
  }

  clearAll(): void {
    this.uploadedFiles = [];
    this.filesSelected.emit([]);
  }

  isValidFileType(file: File): boolean {
    const fileName = file.name.toLowerCase();
    return this.config.acceptedTypes!.some(type => fileName.endsWith(type.substring(1)));
  }

  getFileIcon(fileName: string): string {
    const ext = fileName.toLowerCase().split('.').pop();
    switch (ext) {
      case 'pdf': return 'ri-file-pdf-line text-danger';
      case 'doc':
      case 'docx': return 'ri-file-word-line text-primary';
      case 'jpg':
      case 'jpeg':
      case 'png': return 'ri-image-line text-success';
      default: return 'ri-file-text-line text-muted';
    }
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private showError(message: string): void {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      timer: 3000
    });
  }
}
