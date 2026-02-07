Security checklist for this portfolio

1. What these policy pages are
- The `PrivacyPolicy`, `TermsOfService`, and `SecurityPolicy` pages are static documentation. They do not collect, store, or transmit personal data by themselves.

2. Quick actions to stay safe (do these now)
- Do not commit API keys, passwords, or .env files. Use a `.gitignore` for secrets.
- Enable 2FA on GitHub and any linked accounts.
- Serve the site over HTTPS in production (most hosts provide this).
- Limit third-party scripts; only include ones you trust.

3. Recommended technical hardening
- Use HTTP security headers in production (CSP, Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security).
- Rotate credentials immediately if accidentally committed.
- Regularly run `npm audit` and fix vulnerabilities.

4. How to report security issues
- Email: security@aqdaskawchali.com (or the provided backup email)

5. Useful commands

```bash
# check for known vulnerabilities
npm audit

# automatically fix what npm can
npm audit fix

# fix all using potentially breaking upgrades (use carefully)
npm audit fix --force
```
