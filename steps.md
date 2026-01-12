1- nest new projName

2- we should check on ts.config by adding 
"strict":true 
"lib":["ESNext"]

3-  npm install prisma --save-dev

4- npx prisma init 
>> this will creat schema.prisma + .env file


5- create the schema 

6- create Auth module
>> it will has 3 routes : 
    1- Register     
    2-Login     
    3- Revalidate : check the token is valid or not





general cross module communication  (this happen sync)
1- export service from module a & import in module b 
(and this can be the opposite at te same time this will take us to 'circular dependecy' )nest can resolve this
2- create cross module (userAuthModule) kinda like junction table in db
