import {Injectable} from "@angular/core";
import {Image} from "./image";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ImagesService{

  constructor(private httpClient: HttpClient) {
  }

  getImages(): Observable<Image[]>{
    return this.httpClient.get<Image[]>("http://localhost:8080/image/")
  }
}
