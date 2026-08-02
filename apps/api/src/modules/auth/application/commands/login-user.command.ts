export interface LoginUserCommand {
  email: string;
  passwordHash: string;
  userAgent: string;
  ipAddress: string;
}
