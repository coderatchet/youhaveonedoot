export class FrameData {
  public readonly lastTFrame: number;
  public readonly currentTFrame: number;
  public readonly timeSinceLastTFrame: number;

  constructor(lastTFrame: number, currentTFrame: number) {
    this.lastTFrame = lastTFrame;
    this.currentTFrame = currentTFrame;
    this.timeSinceLastTFrame = currentTFrame - lastTFrame;
  }
}
