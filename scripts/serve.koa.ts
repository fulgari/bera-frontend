import Koa from 'koa';
import koaStatic from 'koa-static';
import cors from "@koa/cors";

const koa = new Koa();

koa.use(cors());
koa.use(koaStatic(process.cwd() + '/public'))

koa.listen(9004);
console.log("listening on port 9004");
