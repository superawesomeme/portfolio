# ShaunHub

An accessible, responsive static showcase of AI-assisted apps and games. Bootstrap 5.3.3 is vendored in `assets/` (its license notice is retained in the CSS). No build step, account, or environment variables are required. A small local JavaScript file powers tag filtering; all projects remain visible without JavaScript.

## Run locally

From `/workspace/portfolio`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the site through your development environment's available browser workflow. To check internally, request `http://127.0.0.1:8000/`.

## Publish

Repository: `superawesomeme/superawesomeme.github.io`. In GitHub Settings → Pages, select Deploy from a branch, `main`, and `/ (root)`. Set the custom domain to `shaunhub.uk`; the `CNAME` file preserves this setting on future deployments. Enable Enforce HTTPS after GitHub provisions the certificate.

At the domain registrar, configure apex (`@`) A records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optional: add a `www` CNAME pointing to `superawesomeme.github.io`. Remove conflicting parking records for these names. Verify the domain in your GitHub account using GitHub’s provided TXT record before switching DNS.

## Add a project

Add a card column inside `#project-grid`. Give the column a `data-project-tags` attribute containing space-separated tags, for example `education in-progress` or `community`. Add matching visible badges to the card. Filters match one selected tag at a time; All projects resets the collection. Education, Games, and Community describe a project’s purpose; In progress can accompany either category. Counts and empty states update automatically.
