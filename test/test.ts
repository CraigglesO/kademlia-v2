import * as test from "blue-tape";
import { ready } from "../kademlia-v2";

test('Test Typescript-Ready', (t) => {
  t.plan(1);

  t.true( ready() );

  t.end();
});
  