export class AvatarStorageClientPlaceholder {
  public async uploadAvatar(_fileBuffer: Buffer, _mimeType: string): Promise<string> {
    return 'https://cdn.rzension.com/avatars/placeholder.png';
  }
}
