import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private baseUrl = `${environment.CONTEXT_PATH}/events`;

    constructor(private http: HttpClient) { }

    getEvents(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    getEvent(id: string): Observable<any[]> {
        // In the components, it was doing a find on the array, 
        // but usually a service should have a get by id if the API supports it.
        // For now I will match the existing logic which seems to fetch all and then find,
        // or I'll just keep it simple as a placeholder for the component to handle the filter if needed.
        return this.http.get<any[]>(this.baseUrl);
    }

    saveEvent(event: any): void {
        console.log('Saving event', event);
    }
}
