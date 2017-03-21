# only thing you really need is git
# git clone https://github.com/dparadise28/mcs-ui.git

yum -y install epel-release
yum -y install vim nginx tmux htop

nginx -t
service nginx restart
mv /usr/share/nginx/html /usr/share/nginx/nginx_html
mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
mv setup/nginx.conf /etc/nginx/nginx.conf
mv mcs-ui/ /usr/share/nginx/html

sudo service nginx reload

yum install -y httpd-tools
htpasswd -c /etc/nginx/.htpasswd admin

cd /usr/share/nginx/html
