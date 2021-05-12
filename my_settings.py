# import pymysql
# pymysql.install_as_MySQLdb


DATABASES = {
    'default' : {
        'ENGINE': 'django.db.backends.mysql',    
        'NAME': 'test',                  
        'USER': 'root',                     
        'PASSWORD': 'password',                  
        'HOST': 'localhost',                     
        'PORT': '3306',                          
    }
}


SECRET_KEY = 'django-insecure-#3m2^xo8yo3w8jzg_-%pew-u5(m!2c##av(@sdl1c=6(m-)6p&'
