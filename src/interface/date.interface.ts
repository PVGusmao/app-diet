export default interface Date {
  day: string;
  month: string;

  getFullYear(): string;
  getMonth(): string;
  getUTCDate(): string;
}