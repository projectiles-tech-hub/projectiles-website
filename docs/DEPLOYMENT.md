# Hosting and publishing

Everything needed to put the website online. Record any manual change at the bottom, with the date.

## The two hosting options

| | Namecheap shared hosting (Stellar plans) | Spaceship Starlight virtual machine |
| --- | --- | --- |
| Who looks after the server | Namecheap | Projectiles (updates, firewall, backups) |
| Email mailboxes | Included | Not included |
| Contact form (PHP) | Built in | Installed by us |
| Data centres | US (Phoenix), Europe (Amsterdam) | US (Phoenix), Singapore |
| Cost | Check namecheap.com | From about USD 4.90 a month (1 vCPU, 2 GiB memory) |

For a company website, shared hosting is enough and needs no server upkeep. Starlight makes sense only if the same
server will also run other company systems. Spaceship is Namecheap's sister company.

## Option A: Namecheap shared hosting

1. Buy the plan and attach the domain.
2. In cPanel, **SSH Access, Manage SSH Keys**: import the public deploy key and authorise it. Uploads use SFTP on
   port 21098, which is on by default.
3. In cPanel **Email Accounts**, create the mailbox that sends form enquiries.
4. Put the form settings in `~/config/enquiry.php` (outside the public folder), permissions `600`.

## Option B: Spaceship Starlight virtual machine

1. Create a Standard 1 machine with Ubuntu LTS.
2. Create a `deploy` user, turn off password and root login, turn on the firewall and automatic security updates.
3. Install Caddy (web server with free HTTPS) and PHP.
4. Add the deploy key for the `deploy` user. Turn on backups.
5. Arrange a mailbox elsewhere for sending enquiries, and put the form settings in `/etc/projectiles/enquiry.php`.

## Both options

1. Add the domain to Cloudflare (free) and change the nameservers at Namecheap to Cloudflare's.
2. In GitHub, **Settings, Secrets and variables, Actions**, add: `DEPLOY_HOST`, `DEPLOY_PORT`, `DEPLOY_USER`,
   `DEPLOY_SSH_KEY` and `DEPLOY_PATH`.
3. Merge to `main`; GitHub builds the site and uploads it.

## Manual changes

| Date | Change | By |
| --- | --- | --- |
| | | |
