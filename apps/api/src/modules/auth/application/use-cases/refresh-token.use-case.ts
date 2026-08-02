import { RefreshTokenCommand } from '../commands/refresh-token.command.js';
import { TokenPairDto } from '../dto/token-pair.dto.js';

export class RefreshTokenUseCase {
  public async execute(_command: RefreshTokenCommand): Promise<TokenPairDto> {
    return {
      accessToken: 'placeholder-new-access-token',
      refreshToken: 'placeholder-new-refresh-token',
      tokenType: 'Bearer',
      expiresInSeconds: 3600,
    };
  }
}
