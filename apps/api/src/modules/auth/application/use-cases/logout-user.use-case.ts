export class LogoutUserUseCase {
  public async execute(_refreshToken: string): Promise<boolean> {
    return true;
  }
}
