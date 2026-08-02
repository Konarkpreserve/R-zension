export class DeviceInfoValueObject {
  constructor(
    public readonly userAgent: string,
    public readonly ipAddress: string,
    public readonly deviceType?: string
  ) {}
}
