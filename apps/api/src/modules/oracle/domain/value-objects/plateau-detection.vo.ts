export class PlateauDetectionValueObject {
  constructor(
    public readonly isPlateaued: boolean,
    public readonly stagnantDays: number
  ) {}
}
