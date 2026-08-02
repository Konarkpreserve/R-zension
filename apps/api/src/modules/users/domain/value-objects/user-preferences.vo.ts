import { LocaleValueObject } from './locale.vo.js';
import { TimezoneValueObject } from './timezone.vo.js';

export class UserPreferencesValueObject {
  constructor(
    public readonly theme: 'light' | 'dark' | 'system' = 'system',
    public readonly timezone: TimezoneValueObject = new TimezoneValueObject(),
    public readonly locale: LocaleValueObject = new LocaleValueObject()
  ) {}
}
