import { Injectable } from '@angular/core';
import { Bio } from './bio';
import { addDoc, collection, doc, Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private fs: Firestore) { }

  addUser(user:Bio){
    user.id = doc(collection(this.fs, 'id')).id
    return addDoc(collection(this.fs, 'Notes'), user);
  }
}
