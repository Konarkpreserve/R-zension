export class UserActivityEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly activityType: string,
    public readonly timestamp: Date
  ) {}
}
