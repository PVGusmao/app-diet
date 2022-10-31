export default interface SingleMeal {
  description: string;
  dietOrNot: boolean;
  hour: string;
  name: string;
  length?: number;
  
  filter(arg0: (item: SingleMeal) => boolean): number;
}