import { Injectable } from "@angular/core";
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = "/";
  paddedDay: string;
  paddedMonth: string;

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    if (date) {
      if (date.day < 10) {
        this.paddedDay = "0" + date.day;
      } else {
        this.paddedDay = "" + date.day;
      }

      if (date.month < 10) {
        this.paddedMonth = "0" + date.month;
      } else {
        this.paddedMonth = "" + date.month;
      }
    }

    return date
      ? this.paddedDay +
          this.DELIMITER +
          this.paddedMonth +
          this.DELIMITER +
          date.year
      : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = "/";
  paddedDay: string;
  paddedMonth: string;

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (date) {
      if (date.day < 10) {
        this.paddedDay = "0" + date.day;
      } else {
        this.paddedDay = "" + date.day;
      }

      if (date.month < 10) {
        this.paddedMonth = "0" + date.month;
      } else {
        this.paddedMonth = "" + date.month;
      }
    }

    return date
      ? this.paddedDay +
          this.DELIMITER +
          this.paddedMonth +
          this.DELIMITER +
          date.year
      : "";
  }
}
