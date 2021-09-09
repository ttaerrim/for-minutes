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


STT_SECRET_KEY = '119956c42145464397fc6dacdee26214'
SECRET_KEY = 'django-insecure-#3m2^xo8yo3w8jzg_-%pew-u5(m!2c##av(@sdl1c=6(m-)6p&'
secret = '175f4be598ec43e9bc24e9b28e8a2dfd'
invoke_url = 'https://clovaspeech-gw.ncloud.com/external/v1/1085/5c3585010bdae12c25b1a6f8276a251a031403c55c0fce83555970dacc96c5a2'
CLIENT_ID = 'cx49ohyd2e'
CLIENT_SECRET = 'OBo7SwStOcVy4lDt9eyMrCUzCDOcR46ruJgv8lKC'