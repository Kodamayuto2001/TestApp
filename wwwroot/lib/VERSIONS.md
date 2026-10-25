# Vendored JavaScript versions

These files are vendored from npm packages and should be updated from their exact upstream releases when security advisories require it.

| Package | Version | Files |
| --- | --- | --- |
| bootstrap | 5.3.8 | `bootstrap/dist/css/*`, `bootstrap/dist/js/*` |
| jquery | 3.7.1 | `jquery/dist/jquery.js`, `jquery.min.js`, `jquery.min.map` |
| jquery-validation | 1.22.1 | `jquery-validation/dist/*` |

The package archives were downloaded from the official npm registry and their SHA-512 `dist.integrity` values were verified before extraction on 2026-10-25. Bootstrap 5 drops its jQuery dependency and namespaces plugin data attributes; `_Layout.cshtml` uses the Bootstrap 5 collapse attributes. Bootstrap archive integrity: `sha512-HP1SZDqaLDPwsNiqRqi5NcP0SSXciX2s9E+RyqJIIqGo+vJeN5AJVM98CXmW/Wux0nQ5L7jeWUdplCEf0Ee+tg==`.
