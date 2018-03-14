export class FrameData {
  public readonly lastTFrame: number;
  public readonly currentTFrame: number;
  public readonly timeSinceLastTFrame: number;

  constructor(lastTFrame: number, currentTFrame: number) {
    this.timeSinceLastTFrame = currentTFrame - lastTFrame;
  }
}
