(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{406:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"subscribing-to-events-via-websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events-via-websocket"}}),e._v(" Subscribing to events via Websocket")]),e._v(" "),n("p",[e._v("Tendermint emits different events, to which you can subscribe via\n"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websocket"),n("OutboundLink")],1),e._v(". This can be useful\nfor third-party applications (for analysis) or inspecting state.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("List of events"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("You can subscribe to any of the events above by calling "),n("code",[e._v("subscribe")]),e._v(" RPC\nmethod via Websocket.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    "jsonrpc": "2.0",\n    "method": "subscribe",\n    "id": "0",\n    "params": {\n        "query": "tm.event=\'NewBlock\'"\n    }\n}\n')])])]),n("p",[e._v("Check out "),n("a",{attrs:{href:"https://tendermint.com/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),n("OutboundLink")],1),e._v(" for\nmore information on query syntax and other options.")]),e._v(" "),n("p",[e._v("You can also use tags, given you had included them into DeliverTx\nresponse, to query transaction results. See "),n("router-link",{attrs:{to:"/app-dev/indexing-transactions.html"}},[e._v("Indexing\ntransactions")]),e._v(" for details.")],1),e._v(" "),n("h3",{attrs:{id:"validatorsetupdates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validatorsetupdates"}}),e._v(" ValidatorSetUpdates")]),e._v(" "),n("p",[e._v("When validator set changes, ValidatorSetUpdates event is published. The\nevent carries a list of pubkey/power pairs. The list is the same\nTendermint receives from ABCI application (see "),n("router-link",{attrs:{to:"/spec/abci/abci.html#endblock"}},[e._v("EndBlock\nsection")]),e._v(" in\nthe ABCI spec).")],1),e._v(" "),n("p",[e._v("Response:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    "jsonrpc": "2.0",\n    "id": "0#event",\n    "result": {\n        "query": "tm.event=\'ValidatorSetUpdates\'",\n        "data": {\n            "type": "tendermint/event/ValidatorSetUpdates",\n            "value": {\n              "validator_updates": [\n                {\n                  "address": "09EAD022FD25DE3A02E64B0FE9610B1417183EE4",\n                  "pub_key": {\n                    "type": "tendermint/PubKeyEd25519",\n                    "value": "ww0z4WaZ0Xg+YI10w43wTWbBmM3dpVza4mmSQYsd0ck="\n                  },\n                  "voting_power": "10",\n                  "proposer_priority": "0"\n                }\n              ]\n            }\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);