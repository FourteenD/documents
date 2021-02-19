(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{538:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"关于-exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-exec"}},[t._v("#")]),t._v(" 关于 exec")]),t._v(" "),a("p",[a("code",[t._v("exec")]),t._v(" 方法在一个指定字符串中执行一个搜索匹配，返回一个结果数据或 "),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("p",[t._v("在设置了 "),a("code",[t._v("global")]),t._v(" 或 "),a("code",[t._v("sticky")]),t._v(" 标志位的情况下（如 "),a("code",[t._v("/foo/g")]),t._v(" 或 "),a("code",[t._v("/foo/y")]),t._v("），"),a("code",[t._v("Regex")]),t._v(" 对象是有状态的。他们会将上次成功匹配后的位置记录在 "),a("code",[t._v("lastIndex")]),t._v(" 属性中。使用此特性，"),a("code",[t._v("exec")]),t._v(" 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下，"),a("code",[t._v("String.prototype.match")]),t._v(" 只会返回匹配到的结果。")]),t._v(" "),a("blockquote",[a("p",[t._v("稍微测试下大概会保留 10s+。")])]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("h3",{attrs:{id:"_1-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-示例"}},[t._v("#")]),t._v(" 1. 示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("foo*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table football, foosball"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Found ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(". Next starts at ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Found foo. Next starts at 9."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Found foo. Next starts at 19."')]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-返回值"}},[t._v("#")]),t._v(" 2. 返回值")]),t._v(" "),a("p",[t._v("如果匹配成功，则返回一个数组，并更新正则对象的 "),a("code",[t._v("lastIndex")]),t._v(" 属性。")]),t._v(" "),a("p",[t._v("如果匹配失败，"),a("code",[t._v("exec")]),t._v(" 方法返回 "),a("code",[t._v("null")]),t._v("，并将 "),a("code",[t._v("lastIndex")]),t._v(" 重置为 0。")]),t._v(" "),a("blockquote",[a("p",[t._v("被提到这么多次的 "),a("code",[t._v("lastIndex")]),t._v(" 是什么？它是下一次匹配开始的位置。这就是匹配到 "),a("code",[t._v("null")]),t._v(" 的原因。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);