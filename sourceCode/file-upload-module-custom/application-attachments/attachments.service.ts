import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable()
export class AttachmentsService {

  CONTEXT_PATH: string = environment.CONTEXT_PATH;
  POST_ATTACHMENTS_API_SERVER: string = environment.POST_ATTACHMENTS_API_SERVER;
  DELETE_ATTACHMENTS_API_SERVER: string = environment.DELETE_ATTACHMENTS_API_SERVER;

  private attachments = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  public postAttachment(attachment) {
    return this.httpClient.post(this.CONTEXT_PATH + this.POST_ATTACHMENTS_API_SERVER, attachment);
  }

  public deleteAttachment(attachment) {
    return this.httpClient.delete(this.CONTEXT_PATH + this.DELETE_ATTACHMENTS_API_SERVER + attachment.id);
  }

  public setAttachments(attachments) {
    this.attachments.next(attachments);
  }
  public getAttachments() {
    return this.attachments;
  }

}