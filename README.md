# express-sample

이 가이드는 express+nodejs 개발환경셋팅을 위한 문서입니다.
참조 문서의 부족한 부분 위주로 작성합니다.

# 설치할 패키지

### install

nodejs ⇒ [https://nodejs.org/ko/download/package-manager/#macos](https://nodejs.org/ko/download/package-manager/#macos)

express ⇒ [https://expressjs.com/ko/starter/generator.html](https://expressjs.com/ko/starter/generator.html)

### git

.gitignore(node,vscode) ⇒ [https://www.gitignore.io/](https://www.gitignore.io/)

    echo "# express-sample" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/gandhikim0528/express-sample.git
    git push -u origin master

### chrome debug(ex: ...

    1. ${pjtHome}/node inspect app.js
    2. chrome url 창에 chrome://inspect 
    3. remote target 선택
    4. break point 셋팅 후 step이동

### vscode debug(ex: ...

    1. ${pjtHome}/node inspect app.js
    2. debug > .vscode/launch.json > add config Node.js Attach 
    3. break point 셋팅 후 RUN

### console debug(ex: ...

    1. var debug = require('debug')('myapp:index');
    or
    1. var debug = require('debug');
       var info = debug('myapp:index');
    
    2. DEBUG=myapp:* npm start

### Nodemon(=supervisor)

    1. npm i nodemon -D
    2. nodemon ./bin/www
    or
    2. DEBUG=myapp:* nodemon ./bin/www

### Log(morgan) and file

    1. var rfs = require('rotating-file-stream')
    2. var accessLogStream = rfs.createStream('access.log', {
         interval: '1d', // rotate daily
         path: path.join(__dirname, 'log')
       })
    3. app.use(logger('dev', { stream: accessLogStream }))
       app.use(logger('dev'));

### Env(dotenv)

    var dotenv = require('dotenv')
    if(app.get('env') == 'development') {
      dotenv.config({ path: './env/dev.env' })
    } else if(app.get('env') == 'production') {
      dotenv.config({ path: './env/env.prod' })
    }