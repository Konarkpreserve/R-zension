export class AuthSecurityPolicy {
  public static readonly MAX_FAILED_ATTEMPTS = 5;
  public static readonly LOCKOUT_DURATION_MINUTES = 15;

  public static isAccountLocked(failedAttemptsCount: number): boolean {
    return failedAttemptsCount >= AuthSecurityPolicy.MAX_FAILED_ATTEMPTS;
  }
}
