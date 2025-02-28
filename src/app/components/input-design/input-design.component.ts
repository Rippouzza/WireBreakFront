import { Component, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-input-design",
  standalone: true,
  templateUrl: "./input-design.component.html",
  styleUrls: ["./input-design.component.css"],
})
export class InputDesignComponent {
  @ViewChild("fileInput") fileInput!: ElementRef;
  selectedFile: File | null = null;
  selectedFileName: string = "";

  constructor(private http: HttpClient) {}

  // Opens file explorer
  onAdd() {
    this.fileInput.nativeElement.click();
  }

  // Handles file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.name.endsWith(".xlsx")) {
        this.selectedFile = file;
        this.selectedFileName = file.name;
        console.log("Selected file:", file.name);
      } else {
        alert("Only .xlsx files are allowed!");
        this.selectedFile = null;
        this.selectedFileName = "";
      }
    }
  }

  // Handles drag & drop file selection
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];

      if (file.name.endsWith(".xlsx")) {
        this.selectedFile = file;
        this.selectedFileName = file.name;
        console.log("File dropped:", file.name);
      } else {
        alert("Only .xlsx files are allowed!");
        this.selectedFile = null;
        this.selectedFileName = "";
      }
    }
  }

  // Prevents default behavior during drag over
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // Resets file selection
  onReset() {
    this.selectedFile = null;
    this.selectedFileName = "";
    this.fileInput.nativeElement.value = "";
    console.log("File selection reset.");
  }

  // Sends file via POST request
  onSend() {
    if (!this.selectedFile) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.selectedFile);

    this.http.post("http://127.0.0.1:5000/upload", formData).subscribe({
      next: (response) => {
        console.log("Upload successful:", response);
        alert("File uploaded successfully!");
        this.onReset();
      },
      error: (error) => {
        console.error("Upload failed:", error);
        alert("Upload failed. Please try again.");
      },
    });
  }
}
