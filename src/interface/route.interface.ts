import Stats from "./stats.interface";

export default interface Route {
  key: string,
  name: string,
  params: Stats,
  path: string | undefined,
}