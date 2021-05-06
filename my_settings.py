# django - mysql 연동

DATABASES = {
    'default' : {
        'ENGINE' : 'django.db.backends.mysql', # 사용할 엔진설정
        'NAME' : 'test', # 연동할 MYSQL DB 이름
        'USER' : 'root', # DB 접속 계정명
        'PASSWORD' : 'password', # 해당 DB 접속 계정 비밀번호
        'HOST' : 'localhost', # 실제 DB 주소
        'PORT' : '3306' # PORT NUMBER
    }
}
SECRET_KEY = 'django-insecure-#3m2^xo8yo3w8jzg_-%pew-u5(m!2c##av(@sdl1c=6(m-)6p&'