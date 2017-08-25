export class Birthday {
  birthday: Date;

  constructor(birthday: Date) {
    this.birthday = birthday;
  }

  ageOfYear(year: number = new Date().getFullYear()): number {
    return year - this.birthday.getFullYear();
  }
}
