import Koa from 'koa';
import koaStatic from 'koa-static';

const koa = new Koa();

koa.use(koaStatic(process.cwd() + '/public'))

koa.listen(9004);
console.log("listening on port 9004");
