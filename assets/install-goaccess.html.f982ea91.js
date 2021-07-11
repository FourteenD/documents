import{r as a,o as s,c as n,a as e,F as o,b as t,d as c}from"./app.d238b096.js";const p={},l=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),t(" 介绍")],-1),r=t("虽然 Nginx 已经提供 access 日志来查阅，但是不得不说很难看清，常规的正则过滤又显得较为麻烦。于是就找到了这么一款实时网络日志分析器 "),i={href:"https://github.com/allinurl/goaccess",target:"_blank",rel:"noopener noreferrer"},u=t("GoAccess"),d=t("。"),h=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1),g=t("此处以 Ubuntu Server 18.04 为示例，官网说明了，如果直接安装可能安装到较为老的版本，需要"),k={href:"https://github.com/allinurl/goaccess#official-goaccess-debian--ubuntu-repository",target:"_blank",rel:"noopener noreferrer"},f=t("更新"),m=t("。"),x=c('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://deb.goaccess.io/ <span class="token variable"><span class="token variable">$(</span>lsb_release -cs<span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/apt/sources.list.d/goaccess.list\n<span class="token function">wget</span> -O - https://deb.goaccess.io/gnugpg.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -\n<span class="token function">sudo</span> <span class="token function">apt-get</span> update\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> goaccess\n\ngoaccess --version <span class="token comment"># 验证 GoAccess - 1.3.</span>\n</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-最简单的静态使用" tabindex="-1"><a class="header-anchor" href="#_1-最简单的静态使用" aria-hidden="true">#</a> 1. 最简单的静态使用</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /var/log/nginx/access.log -o report.html --log-format=COMBINED</p></div><ul><li><code>-f</code>：指定日志文件</li><li><code>-o</code>：指定报表路径</li><li><code>--log-format</code>：日志格式，不加则会报错</li></ul><p>这样就会生成一份 html 文件，可以利用 scp（推荐）、sz、rsync 下载该文件到本地后查看。</p><h3 id="_2-配合-nginx-实时更新" tabindex="-1"><a class="header-anchor" href="#_2-配合-nginx-实时更新" aria-hidden="true">#</a> 2. 配合 Nginx 实时更新</h3><p>首先需要创建一个 Nginx 配置文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> default.conf access-log.conf\n<span class="token function">sudo</span> <span class="token function">mkdir</span> /var/www/html/report\n\n<span class="token function">vim</span> access-log.conf\n<span class="token comment"># 修改以下内容，自定义 xxx</span>\nserver_name  xxx.shanyuhai.top<span class="token punctuation">;</span>\nlocation /report.html <span class="token punctuation">{</span>\n    <span class="token builtin class-name">alias</span> /var/www/html/report/report.html<span class="token punctuation">;</span>\n    <span class="token comment"># 代理，限制访问</span>\n    allow xxx.xxx.xxx.xxx<span class="token punctuation">;</span>\n    deny all<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 接着前往域名提供商添加 DNS 解析</span>\n</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /var/log/nginx/access.log -o /var/www/html/report/report.html --log-format=COMBINED --real-time-html</p></div><p>启动服务后会提示开启了一个 websocket，验证</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ll /var/www/html/report\n</code></pre></div><p>接着就可以在浏览器访问对应的地址了。</p>',13);p.render=function(t,c){const p=a("OutboundLink");return s(),n(o,null,[l,e("p",null,[r,e("a",i,[u,e(p)]),d]),h,e("p",null,[g,e("a",k,[f,e(p)]),m]),x],64)};export default p;