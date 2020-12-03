(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{651:function(_,v,t){"use strict";t.r(v);var e=t(29),s=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[_._v("#")]),_._v(" 介绍")]),_._v(" "),t("p",[_._v("用于同步编辑器的配置。")]),_._v(" "),t("blockquote",[t("p",[_._v("gist 页面会存在访问限制，最好备好代理工具。")])]),_._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[_._v("#")]),_._v(" 步骤")]),_._v(" "),t("h3",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[_._v("#")]),_._v(" 1. 安装")]),_._v(" "),t("p",[_._v("在 "),t("code",[_._v("EXTENSIONS")]),_._v(" 中搜索 "),t("code",[_._v("Settings Sync")]),_._v(" 并安装。")]),_._v(" "),t("h3",{attrs:{id:"_2-生成-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成-token"}},[_._v("#")]),_._v(" 2. 生成 token")]),_._v(" "),t("p",[_._v("进入 Github，点击头像的 "),t("code",[_._v("Settings")]),_._v("，再点击 "),t("code",[_._v("Developer settings")]),_._v("，再点击 "),t("code",[_._v("Personal access tokens")]),_._v("，随后点击 "),t("code",[_._v("Generate new token")]),_._v(" 即可根据提示生成 "),t("strong",[_._v("token")]),_._v("。")]),_._v(" "),t("ol",[t("li",[_._v("Note 部分可以输入你可以理解的提示，例如 "),t("code",[_._v("vscode settings sync")]),_._v("；")]),_._v(" "),t("li",[_._v("Select scopes 部分仅需要勾选 "),t("code",[_._v("gist")]),_._v(" 即可，"),t("strong",[_._v("请勿给其余的权限")]),_._v("。")]),_._v(" "),t("li",[_._v("最后点击 "),t("code",[_._v("Generate token")]),_._v(" 即可生成 token。")])]),_._v(" "),t("h3",{attrs:{id:"_3-编辑-settings-sync-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-编辑-settings-sync-配置"}},[_._v("#")]),_._v(" 3. 编辑 Settings Sync 配置")]),_._v(" "),t("p",[_._v("在第一次安装 "),t("code",[_._v("Settings Sync")]),_._v(" 插件时会弹出一个弹窗让你填写配置。")]),_._v(" "),t("p",[_._v("有两个选项 "),t("code",[_._v("LOGIN WITH GITHUB")]),_._v("、 "),t("code",[_._v("EDIT CONFIGURATION")]),_._v("，此处点击  "),t("code",[_._v("EDIT CONFIGURATION")]),_._v("。")]),_._v(" "),t("p",[_._v("当后续想再次编辑时你可以更改对应 "),t("code",[_._v("Settings JSON")]),_._v("，也可以在编辑器中按下 "),t("code",[_._v("Ctrl + Shift + P")]),_._v("，然后输入 "),t("code",[_._v("sync")]),_._v(" 找到 "),t("code",[_._v("Advanced Options")]),_._v(" 选中在打开 "),t("code",[_._v("Open Options")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_4-上传配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-上传配置"}},[_._v("#")]),_._v(" 4. 上传配置")]),_._v(" "),t("p",[_._v("上传配置需要你提供创建编辑 "),t("code",[_._v("gist")]),_._v(" 的权限，也就是之前生成的 "),t("strong",[_._v("token")]),_._v("，在配置界面填入 "),t("code",[_._v("token")]),_._v("，该插件会自动保存配置。")]),_._v(" "),t("p",[_._v("接着随便打开一个页面，按下 "),t("code",[_._v("Shift + Alt + U")]),_._v(" 即可上传你的配置。稍后可以在编辑器控制台的输出("),t("code",[_._v("OUTPUT")]),_._v(")标签看到上传信息，上传完成后会得到一个 "),t("code",[_._v("Gist ID")]),_._v("。回到 Github，点击头像的 "),t("code",[_._v("Your gists")]),_._v(" 可看到新增的 "),t("code",[_._v("gist")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_5-下载配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-下载配置"}},[_._v("#")]),_._v(" 5. 下载配置")]),_._v(" "),t("p",[_._v("你可以自己使用这一份配置，也可以分享给他人，仅需你将自己的 "),t("code",[_._v("Gist ID")]),_._v("  分享出去即可。如果忘了 "),t("code",[_._v("Gist ID")]),_._v(" 可以回到 Github，点击头像的 "),t("code",[_._v("Your gists")]),_._v(" 找到对应的 "),t("code",[_._v("gist")]),_._v("，此时浏览器的地址栏就是你的 "),t("code",[_._v("Gist ID")]),_._v("，或者在 "),t("code",[_._v("Embed")]),_._v(" 处查看。")]),_._v(" "),t("p",[_._v("在配置界面填入对应的 "),t("code",[_._v("Gist ID")]),_._v("，再随便打开一个页面，按下 "),t("code",[_._v("Shift + Alt + D")]),_._v(" 即可下载你的配置，稍后可以在编辑器控制台的输出("),t("code",[_._v("OUTPUT")]),_._v(")标签看到下载信息。")])])}),[],!1,null,null,null);v.default=s.exports}}]);