# Vendored JavaScript versions

These files are vendored from npm packages and should be updated from their exact upstream releases when security advisories require it.

| Package | Version | Files |
| --- | --- | --- |
| bootstrap | 4.6.2 | `bootstrap/dist/js/*` |
| jquery | 3.7.1 | `jquery/dist/jquery.js`, `jquery.min.js`, `jquery.min.map` |
| jquery-validation | 1.22.1 | `jquery-validation/dist/*` |

The package archives were downloaded from the official npm registry and their SHA-512 `dist.integrity` values were verified before extraction on 2026-10-25. Bootstrap 4 is end-of-life upstream; this patch removes the detected vulnerable JavaScript but a migration to a supported major version remains open.
