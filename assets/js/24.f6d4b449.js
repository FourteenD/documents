(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{467:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" INSERT")]),t._v(" "),a("p",[t._v("插入数据最好指定列名，可跳过默认取默认值的列且可更改顺序。")]),t._v(" "),a("p",[t._v("多行数据以 "),a("code",[t._v(",")]),t._v(" 分隔。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" customers\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cust_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cust_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cust_city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cust_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cust_zip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cust_country"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pep E. LaPew'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100 Main Street'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Los Angeles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'90046'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'M. Martian'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'42 Galaxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New York'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11213'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" UPDATE")]),t._v(" "),a("p",[t._v("更新语句由三部分组成：")]),t._v(" "),a("ul",[a("li",[t._v("要更新的表")]),t._v(" "),a("li",[t._v("列名和它们的新值")]),t._v(" "),a("li",[t._v("确定要更新行的过滤条件")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" customers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" \n\tcust_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Fudd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcust_email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'elmer@fudd.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" cust_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10005")]),t._v("\n")])])]),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),a("p",[t._v("注意检查 WHERE 有没有使用。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" customers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" cust_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10006")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);