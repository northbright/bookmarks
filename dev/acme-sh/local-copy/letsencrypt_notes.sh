# How to use "acme.sh" to set up Lets Encrypt without root permissions
# See https://github.com/Neilpang/acme.sh for more

# This assumes that your website has a webroot at "/var/www/<domain>"
# I'll use the domain "EXAMPLE.com" as an example

# When this is done, there will be an "acme" user that handles issuing,
# updating, and installing certificates. This account will have the following
# (fairly minimal) permissions:
#   - Host files at http://EXAMPLE.com/.well-known/acme-challenge
#   - Copy certificates to /etc/nginx/auth-acme
#   - Reload your nginx server

# First things first - create a user account for acme
sudo useradd -m -d /var/lib/acme -s /usr/sbin/nologin acme
sudo chmod 700 /var/lib/acme

# Create a directory for the acme account to save certs in
sudo mkdir /etc/nginx/auth-acme
sudo chown acme.www-data /etc/nginx/auth-acme
sudo chmod 710 /etc/nginx/auth-acme

# Create a directory under the webroot for acme to put webroot challenge responses
sudo mkdir -p /var/www/EXAMPLE.com/.well-known/acme-challenge
sudo chown acme.acme /var/www/EXAMPLE.com/.well-known/acme-challenge
sudo chmod 755 /var/www/EXAMPLE.com/.well-known/acme-challenge

# Also make sure the acme user has at least eXecute permissions on all parent
# directories of this directory. This will generally be true by default.

# Edit your nginx config file to publish the well-known directory on your site.
# Lets Encrypt checks on port 80, non-SSL, so you need to at least not redirect
# that location.

sudo vim /etc/nginx/sites-enabled/EXAMPLE.com
## Example config section:
# webroot for acme
server {
    listen [::]:80;
    server_name EXAMPLE.com;

    location ~ /.well-known {
        allow all;
        root /var/www/EXAMPLE.com;
    }

    location / {
        rewrite ^ https://EXAMPLE.com$request_uri? permanent;
    }
}

# Make sure nginx is configured properly
sudo nginx -t
sudo service nginx reload

# Edit your sudoers file to allow the acme user to reload (not restart) nginx
sudo visudo
# Add the following line:
acme    ALL=(ALL) NOPASSWD: /usr/sbin/service nginx reload



# Now change to the ACME user - you'll do most of the rest of this guide as them
sudo -s -u acme bash
export HOME=/var/lib/acme
cd /var/lib/acme

# Install acme.sh
git clone https://github.com/Neilpang/acme.sh.git
cd acme.sh
./acme.sh --install

# Create your first certificate (from here on is roughly what you'll repeat)
cd /var/lib/acme
.acme.sh/acme.sh --issue -d EXAMPLE.com -w /var/www/EXAMPLE.com

# If everything went well, install your certificate
.acme.sh/acme.sh --installcert -d EXAMPLE.com \
    --keypath  /etc/nginx/auth-acme/EXAMPLE.com.key \
    --capath  /etc/nginx/auth-acme/EXAMPLE.com.ca \
    --fullchainpath  /etc/nginx/auth-acme/EXAMPLE.com.crt \
    --reloadcmd  "sudo service nginx reload"

# Drop back to your own user
exit

# Now modify your nginx config to work with the new certs
sudo vim /etc/nginx/sites-enabled/EXAMPLE.com

# Example SSL config section
server {
    ...
    ssl_certificate     /etc/nginx/auth-acme/EXAMPLE.com.crt;
    ssl_certificate_key /etc/nginx/auth-acme/EXAMPLE.com.key;
    ssl_trusted_certificate /etc/nginx/auth-acme/EXAMPLE.com.ca;
    include ssl_settings.conf;
    ...
}

# Test nginx
sudo nginx -t

# And reload if it worked
sudo service nginx reload

# Congrats, you have letsencrypt and nobody ran anything as root on your box.
# Don't forget to back up /var/lib/acme/.acme.sh - it has your letsencrypt account keys!