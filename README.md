References: https://help.github.com/articles/quick-start-setting-up-a-custom-domain/ <br>
https://www.youtube.com/watch?v=mPGi1IHQxFM
<br>
## Steps (copy and pasted)
Steps for adding custom domain:
<br>
1. Add A record in the DNS Zone Records On the hosting service on which you purchase your domain (Like godaddy, bluehost, 1and1 etc).  Go to your domain settings and click on  ‘Manage Domain’. Now go to DNS Zone File Management and add an A record with Github custom domain IPs List addresses.
example <br>
Host: @
Points to: 185.199.108.153
Host: @
Points to: 185.199.109.153
Host: @
Points to: 185.199.110.153
Host: @
Points to: 185.199.111.153
2. Add CNAME file to the repository. Go to the repository,  click on ‘New File’,  Give the Name of file as CNAME without any spaces in capital. On the first line on the CNAMe file add your domain name like linuxforlife.com.
We can host a static HTML website on Github. This method can be used to host other Html websites also like ReactJs, AngularJS, Bootstrap based websites also. It is really simple and you can have a website hosted on Github in few minutes. You can Publish and share your own website without any cost with GitHub.
