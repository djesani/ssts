import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import { environment } from "../../../../environments/environment";

const baseUrl = `${environment.CONTEXT_PATH}/fileupload`;

@Injectable()
export class AttachmentsService {
  private attachments = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  public postAttachment(attachment) {
    return this.httpClient.post(baseUrl, attachment);
  }

  public deleteAttachment(attachment) {
    return this.httpClient.delete(baseUrl + attachment.id);
  }

  public setAttachments(attachments) {
    this.attachments.next(attachments);
  }
  public getAttachments() {
    return this.attachments;
  }
}
