export class PositionChangeValueObject {
  constructor(
    public readonly previousRank: number,
    public readonly newRank: number,
    public readonly delta: number
  ) {}
}
