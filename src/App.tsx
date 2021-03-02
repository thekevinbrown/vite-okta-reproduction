import React from "react";
import { OktaAuth } from "@okta/okta-auth-js";

// This works, but breaks typescript support.
// import { OktaAuth } from "@okta/okta-auth-js/dist/okta-auth-js.umd.js";

// This throws:
// node_cache.js:38 Uncaught TypeError: Class extends value undefined is not a constructor or null
//     at Object.<anonymous> (node_cache.js:38)
//     at Object.<anonymous> (node_cache.js:767)
//     at node_cache.js:769
//     at chunk.2VCUNPV2.js?v=a7fa62e4:4
//     at Object.<anonymous> (index.js:13)
//     at index.js:17
//     at chunk.2VCUNPV2.js?v=a7fa62e4:4
//     at serverStorage.js:14
//
// Because it erroneously thinks it's running in Node.
const client = new OktaAuth();

export const App = () => <p>Okta Version {client.userAgent}</p>;
