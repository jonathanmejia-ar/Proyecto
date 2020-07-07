import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage' 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.startUpload();
    console.log(this.file)
  }

  startUpload(){
    //Storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    //Referencia de storage bucket
    const ref= this.storage.ref(path);

    // main task
    this.task = this.storage.upload(path, this.file);

    //Monitoreo progreso

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(tap(console.log),
    // Url del archivo
    finalize( async() => {
      this.downloadURL = await ref.getDownloadURL().toPromise();

      this.afs.collection('files').add( { downloadURL: this.downloadURL, path});
      
    }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
