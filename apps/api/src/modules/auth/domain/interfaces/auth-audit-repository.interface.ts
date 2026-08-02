import { AuthAuditLogEntity } from '../entities/auth-audit-log.entity.js';

export interface IAuthAuditRepository {
  save(auditLog: AuthAuditLogEntity): Promise<AuthAuditLogEntity>;
  findByUserId(userId: string): Promise<AuthAuditLogEntity[]>;
}
