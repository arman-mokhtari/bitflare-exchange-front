export function toLocalDateString(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("fa-IR", options);
  }
  
  export function toLocalDateStringMiddle(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("fa-IR", options);
  }
  
  export function toLocalDateStringDay(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("fa-IR", options);
  }
  
  export function toLocalDateStringMonth(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
    };
    return new Date(date).toLocaleDateString("fa-IR", options);
  }
  
  export function currentPersianDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
    };
    const currentDate = new Date();
    return currentDate.toLocaleDateString("fa-IR", options);
  }
  
  export function toLocalDateStringShort(date: string | Date): string {
    return new Date(date).toLocaleDateString("fa-IR");
  }
  
  export function toLocalDateCustomized(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
  
    const currentDate = new Date();
    const givenDate = new Date(date);
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
  
    if (givenDate.toDateString() === currentDate.toDateString()) {
      return "امروز";
    } else if (givenDate.toDateString() === yesterday.toDateString()) {
      return "دیروز";
    } else {
      return givenDate.toLocaleDateString("fa-IR", options);
    }
  }
  