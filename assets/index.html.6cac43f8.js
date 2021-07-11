import{r as n,o as a,c as s,a as e,F as t,b as o,d as r}from"./app.d238b096.js";const c={},p=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),o(" 安装")],-1),l=o("虽然可以直接从 "),m={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},d=o("Node 官网"),h=o(" 下载并安装它，但更推荐的使用方式是利用 "),i={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},g=o("nvm"),u=o(" 来处理它，因为 "),b=e("code",null,"nvm",-1),k=o(" 还提供了多版本的共存的解决方式，可以更快捷的切换、尝鲜。"),v=r('<h3 id="_1-安装-nvm" tabindex="-1"><a class="header-anchor" href="#_1-安装-nvm" aria-hidden="true">#</a> 1. 安装 nvm</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装脚本(具体版本可看官网)</span>\n<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>\n\n<span class="token comment"># 验证安装</span>\nnvm --version <span class="token comment"># 若失败需执行 `source ~/.bashrc` 使环境变量生效</span>\n<span class="token comment"># 0.34.0</span>\n</code></pre></div><h3 id="_2-安装-node" tabindex="-1"><a class="header-anchor" href="#_2-安装-node" aria-hidden="true">#</a> 2. 安装 node</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 查看当前</span>\nnvm <span class="token function">ls</span>\n\n<span class="token comment"># 查看可用</span>\nnvm ls-remote\n\n<span class="token comment"># 安装指定版本</span>\nnvm <span class="token function">install</span> v12.16.3\n\n<span class="token comment"># 设置默认版本</span>\nnvm <span class="token builtin class-name">alias</span> default v12.16.3\n\n<span class="token comment"># 验证 node</span>\nnode -v\n<span class="token comment"># v12.16.3</span>\n\n<span class="token comment"># 切换版本</span>\nnvm use v13.13.0\n</code></pre></div><h3 id="_3-nvm-全局包迁移" tabindex="-1"><a class="header-anchor" href="#_3-nvm-全局包迁移" aria-hidden="true">#</a> 3. nvm 全局包迁移</h3>',5),f=o("在 windows 下使用时切换 node 版本全局包不会丢失，而在 manjaro 下使用时遇到了该情况，可利用 "),x={href:"https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing",target:"_blank",rel:"noopener noreferrer"},_=o("--reinstall-packages-from"),j=o(" 解决。"),y=r('<div class="language-bash ext-sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> v12.16.3 --reinstall-packages-from<span class="token operator">=</span>v12.4.0\n</code></pre></div><p>在利用 <code>npm install -g npm</code> 升级时同样会导致全局包丢失，所以在任何情况都应该通过 <code>nvm</code> 升级。</p><h2 id="切换源" tabindex="-1"><a class="header-anchor" href="#切换源" aria-hidden="true">#</a> 切换源</h2><p>在缺乏代理的情况下 npm 默认源的速度会比较慢，设置为淘宝源会有比较理想的速度；在私建 npm 服务的情况下，有时部分依赖包需要去私服下载，频繁切换也会麻烦。</p>',4),w=o("这时候就可以使用 "),F={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},N=o("nrm"),E=o(" 快速切换源来解决这些问题了。"),M=r('<p>当然，npm 也自带了设置源的服务，但毕竟使用起来较为麻烦：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/\n</code></pre></div><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><p>nrm 也是 <code>Node.js</code> 模块。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --global nrm\n</code></pre></div><h3 id="_2-查看源" tabindex="-1"><a class="header-anchor" href="#_2-查看源" aria-hidden="true">#</a> 2. 查看源</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm <span class="token function">ls</span>\n\n<span class="token comment"># * npm ---- https://registry.npmjs.org/</span>\n<span class="token comment">#  cnpm --- http://r.cnpmjs.org/</span>\n<span class="token comment">#  taobao - https://registry.npm.taobao.org/</span>\n<span class="token comment">#  nj ----- https://registry.nodejitsu.com/</span>\n<span class="token comment">#  npmMirror  https://skimdb.npmjs.com/registry/</span>\n<span class="token comment">#  edunpm - http://registry.enpmjs.org/</span>\n</code></pre></div><h3 id="_3-测速" tabindex="-1"><a class="header-anchor" href="#_3-测速" aria-hidden="true">#</a> 3. 测速</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm <span class="token builtin class-name">test</span>\n<span class="token comment"># * npm ---- 1837ms</span>\n<span class="token comment">#  cnpm --- 1050ms</span>\n<span class="token comment">#  taobao - 125ms</span>\n<span class="token comment">#  nj ----- Fetch Error</span>\n<span class="token comment">#  npmMirror  3027ms</span>\n<span class="token comment">#  edunpm - Fetch Error</span>\n</code></pre></div><h3 id="_4-切换源" tabindex="-1"><a class="header-anchor" href="#_4-切换源" aria-hidden="true">#</a> 4. 切换源</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm use taobao\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',12),L={href:"https://nodejs.org/dist/latest-v10.x/docs/api/",target:"_blank",rel:"noopener noreferrer"},O=o("Node.js");c.render=function(o,r){const c=n("OutboundLink");return a(),s(t,null,[p,e("p",null,[l,e("a",m,[d,e(c)]),h,e("a",i,[g,e(c)]),u,b,k]),v,e("p",null,[f,e("a",x,[_,e(c)]),j]),y,e("p",null,[w,e("a",F,[N,e(c)]),E]),M,e("ol",null,[e("li",null,[e("a",L,[O,e(c)])])])],64)};export default c;