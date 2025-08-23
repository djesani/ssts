import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
  standalone: false,
})
export class CalendarIconsSearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter((item) =>
      keys
        .split(",")
        .some(
          (key) =>
            item.hasOwnProperty(key) && new RegExp(term, "gi").test(item[key])
        )
    );
  }
}
