export default interface Date {
  year: string;
  day: string;
  month: string;

  getFullYear(): string;
  getMonth(): string;
  getUTCDate(): string;
}