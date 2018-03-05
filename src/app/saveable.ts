export interface Saveable<T> {
  save(): string,
  load(s: string): T
}
