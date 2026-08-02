import { RegisterUserCommand } from '../commands/register-user.command.js';
import { TokenPairDto } from '../dto/token-pair.dto.js';

export class RegisterUserUseCase {
  public async execute(_command: RegisterUserCommand): Promise<TokenPairDto> {
    return {
      accessToken: 'placeholder-access-token',
      refreshToken: 'placeholder-refresh-token',
      tokenType: 'Bearer',
      expiresInSeconds: 3600,
    };
  }
}
