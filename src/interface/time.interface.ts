export default interface Time {
  hour: string;
  minutes: string;

  getUTCHours(): string;
  getUTCMinutes(): string;
}