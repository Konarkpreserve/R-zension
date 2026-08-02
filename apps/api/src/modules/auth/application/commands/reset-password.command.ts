export interface ResetPasswordCommand {
  token: string;
  newPasswordHash: string;
}
