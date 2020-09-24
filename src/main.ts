import * as express from 'express'
import { join } from 'path'

const app = express();

app.use(express.static(join(__dirname, '../public')));

const server = app.listen(53121, '0.0.0.0', () => {
  console.log(server.address());
})
