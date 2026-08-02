export interface RegisterUserCommand {
  email: string;
  passwordHash: string;
  name: string;
  userAgent: string;
  ipAddress: string;
}
