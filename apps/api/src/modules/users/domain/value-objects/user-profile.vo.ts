import { AvatarValueObject } from './avatar.vo.js';
import { BiographyValueObject } from './biography.vo.js';
import { DisplayNameValueObject } from './display-name.vo.js';

export class UserProfileValueObject {
  constructor(
    public readonly displayName: DisplayNameValueObject,
    public readonly avatar?: AvatarValueObject,
    public readonly biography?: BiographyValueObject
  ) {}
}
