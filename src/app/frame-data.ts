export class FrameData {
  public readonly lastTFrame: number;
  public readonly currentTFrame: number;
  public readonly timeSinceLastTFrame: number;
  public readonly currentFrame: number;

  constructor(lastTFrame: number, currentTFrame: number, currentFrame) {
    this.lastTFrame = lastTFrame;
    this.currentTFrame = currentTFrame;
    this.timeSinceLastTFrame = currentTFrame - lastTFrame;
  }
}
