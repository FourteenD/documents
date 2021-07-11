import{r as n,o as a,c as s,a as e,w as t,F as o,b as p,d as c}from"./app.d238b096.js";const r={},i=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),p(" 介绍")],-1),l=p("在理解"),k=e("a",{href:"/backend/nginx/nginx-upstream"},"反向代理与负载均衡",-1),d=p("后就可以快速实现 websocket 的反向代理，在之前的"),u=p("配置"),g=p(" 的配置上进行修改。"),h={id:"config",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1),w=p(),m={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},v=p("config"),f=c('<div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf\n\n<span class="token comment"># 修改为以下内容</span>\nserver</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span>\n\n    <span class="token comment">#charset koi8-r;</span>\n    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nnginx -s reload <span class="token comment"># 重载配置</span>\n</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>',2),b=p("接着在"),y={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"},_=p("测试页面"),L=p("将 Location 中的 "),q=e("code",null,"ws://echo.websocket.org",-1),C=p(" 替换为目标地址 "),j=e("code",null,"ws://nginx.example.com/chat/",-1),D=p(" （需要修改本地 DNS），Connect 成功即为成功。");r.render=function(p,c){const r=n("RouterLink"),F=n("OutboundLink");return a(),s(o,null,[i,e("p",null,[l,k,d,e(r,{to:"/backend/nginx/nginx-directives.html#alias"},{default:t((()=>[u])),_:1}),g]),e("h2",h,[x,w,e("a",m,[v,e(F)])]),f,e("p",null,[b,e("a",y,[_,e(F)]),L,q,C,j,D])],64)};export default r;