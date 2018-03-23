export class FrameData {
  public readonly lastTFrame: number;
  public readonly currentTFrame: number;
  public readonly timeSinceLastTFrame: number;
  public readonly currentFrame: number;

  constructor(lastTFrame: number, currentTFrame: number, currentFrame: number) {
    this.lastTFrame = lastTFrame;
    this.currentFrame = currentFrame;
    this.currentTFrame = currentTFrame;
    this.timeSinceLastTFrame = currentTFrame - lastTFrame;
  }
}
