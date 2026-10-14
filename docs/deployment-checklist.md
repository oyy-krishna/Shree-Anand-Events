# Deployment Checklist

## Vercel deployment steps

1. Push the repository to GitHub.
2. Connect the repo in Vercel.
3. Set the production framework to Next.js.
4. Configure the environment variables from `.env.example` in the Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `CONTACT_EMAIL_FROM`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Deploy the project from the main branch.
6. Confirm the site is live on HTTPS.
7. Add the custom domain if the client owns one, and ensure the `NEXT_PUBLIC_SITE_URL` matches the live domain.

## HTTPS / canonical checks

- Ensure the site is served over HTTPS only.
- Verify the default Vercel domain resolves to an HTTPS endpoint.
- Use the `robots.txt` and `sitemap.xml` routes to confirm the canonical URLs are correct.
- Add `www` or root-domain redirects in the Vercel domain settings if required by the client.

## Notes

- This project is currently prepared for a Vercel deployment flow with an HTTPS default and a clean 404 page.
- The public client-facing domain should be confirmed before final launch.
