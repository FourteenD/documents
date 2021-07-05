import{r as n,o as s,c as a,a as t,F as e,b as p,d as o}from"./app.88333f8f.js";const c={},u=t("h2",{id:"为什么选择-traefik",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#为什么选择-traefik","aria-hidden":"true"},"#"),p(" 为什么选择 Traefik")],-1),l=t("p",null,"如果追求极致的性能那自然选择 Nginx，但对于个人而言 Traefik 也是一个良好的选择，尤其是其服务发现的能力很好的解决了前端、后端应用增加、减少时需修改配置文件的问题。",-1),r=t("h2",{id:"traefik-的架构",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#traefik-的架构","aria-hidden":"true"},"#"),p(" Traefik 的架构")],-1),i=o('<p>由图所示，Traefik 会监听入口点（<code>EntryPoints</code>），路由器（<code>Routers</code>）连接到这些入口点，分析传入的请求，以查看它们是否与一组规则（<code>Rule</code>）匹配。如果匹配，则有中间件先经过中间件（<code>Middlewares</code>），再转发给对应的服务（<code>Services</code>）。</p><p>其中配置与 <code>Nginx</code> 相似，分为两部分：</p><ul><li>静态配置：<code>traefik.toml</code>，与 <code>nginx.conf</code> 类似</li><li>动态配置：<code>config/*.toml</code>，与 <code> conf.d/*.conf</code> 类似</li></ul><h2 id="以-whoami-为示例" tabindex="-1"><a class="header-anchor" href="#以-whoami-为示例" aria-hidden="true">#</a> 以 whoami 为示例</h2><p>先创建 <code>docker-compose.yml</code> 文件，静态配置（<code>traefik.toml</code>）直接记录在容器启动配置中可以带来更好的体验：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> traefik\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.4.8\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>\n      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>\n    <span class="token key atrule">networks</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> traefik\n    <span class="token key atrule">command</span><span class="token punctuation">:</span>\n      <span class="token comment"># 全局配置</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--global.checkNewVersion=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--global.sendAnonymousUsage=false&quot;</span>\n      <span class="token comment"># ping</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--ping=true&quot;</span>\n      <span class="token comment"># 日志</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--log.level=warn&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--log.format=common&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--accesslog=false&quot;</span>\n      <span class="token comment"># api/dashboard</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--api=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--api.insecure=true&quot;</span>\n      <span class="token comment"># 入口点</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.address=:80&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.websecure.address=:443&quot;</span>\n      <span class="token comment"># 服务发现</span>\n      <span class="token comment"># docker 形式服务发现，接入 traefik network</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.watch=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.exposedbydefault=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.endpoint=unix:///var/run/docker.sock&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.swarmMode=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.useBindPortIP=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.network=traefik&quot;</span>\n      <span class="token comment"># file 形式服务发现</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.watch=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.directory=/etc/traefik/config&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.debugloggeneratedtemplate=true&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> ./config/<span class="token punctuation">:</span>/etc/traefik/config/<span class="token punctuation">:</span>ro\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>\n      <span class="token comment"># dashboard http</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.service=dashboard@internal&quot;</span>\n      <span class="token comment"># dashboard api</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) &amp;&amp; PathPrefix(`/api`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.service=api@internal&quot;</span>\n    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>\n      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wget -q --spider --proxy off localhost:8080/ping || exit 1&quot;</span><span class="token punctuation">]</span>\n      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 3s\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s\n    <span class="token key atrule">logging</span><span class="token punctuation">:</span> \n      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>\n      <span class="token key atrule">options</span><span class="token punctuation">:</span> \n        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>\n\n  <span class="token key atrule">whoami</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> whoami\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik/whoami\n    <span class="token key atrule">networks</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> traefik\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>\n      <span class="token comment"># http entrypoints</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.entrypoints=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.rule=Host(`whoami.example.com`)&quot;</span>\n\n<span class="token comment"># 先创建外部网卡</span>\n<span class="token comment"># docker network create traefik</span>\n<span class="token key atrule">networks</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre></div><p>可为动态配置抽象一些会公共使用的，增加 <code>config.default.toml</code> 文件。</p><h3 id="_1-基础认证" tabindex="-1"><a class="header-anchor" href="#_1-基础认证" aria-hidden="true">#</a> 1. 基础认证</h3>',8),k=p("基础认证采取简单的 "),d={href:"https://doc.traefik.io/traefik/middlewares/basicauth/",target:"_blank",rel:"noopener noreferrer"},m=p("BasicAuth"),g=p("。"),f=p("利用 "),q={href:"http://httpd.apache.org/docs/1.3/programs/htpasswd.html",target:"_blank",rel:"noopener noreferrer"},h=p("htpasswd"),y=p(" 工具生成密码："),b=o('<div class="language-bash ext-sh"><pre class="language-bash"><code>htpasswd -nb yourname yourpassword\n\n<span class="token comment"># 得到</span>\n<span class="token comment"># yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.</span>\n</code></pre></div><p>为 <code>config/default.toml</code> 增加一项默认认证，动态修改生效，后续无需重启：</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># 中间件在 docker cli 中使用时可用 `,` 分隔：middlewares=m1@file,m2@file</span>\n\n<span class="token comment"># gzip</span>\n<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.gzip.compress</span><span class="token punctuation">]</span>\n\n<span class="token comment"># basic 认证</span>\n<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.default-auth-user.basicAuth</span><span class="token punctuation">]</span>\n<span class="token key property">removeHeader</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>\n<span class="token key property">users</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>\n\t<span class="token string">&quot;yourname:$apr1$NbtntO7x$43xzoIsnsgH.Sn2Utw33g.&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>在 <code>traefik</code> 和 <code>whoami</code> 的 <code>labels</code> 中增加：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n\t<span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n\t\t<span class="token comment"># 省略其他</span>\n\t\t<span class="token key atrule">labels</span><span class="token punctuation">:</span>\n\t\t\t<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.middlewares=default-auth-user@file&quot;</span>\n\t\t\t<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file&quot;</span>\n\t<span class="token key atrule">whoami</span><span class="token punctuation">:</span>\n\t  <span class="token comment"># 省略其他</span>\n\t\t<span class="token key atrule">labels</span><span class="token punctuation">:</span>\n\t\t\t<span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.middlewares=default-auth-user@file&quot;</span>\n</code></pre></div><h3 id="_2-升级为-https" tabindex="-1"><a class="header-anchor" href="#_2-升级为-https" aria-hidden="true">#</a> 2. 升级为 HTTPS</h3><ol><li><p>先手动添加证书</p><p>创建证书目录并移入证书：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> ssl\n<span class="token function">sudo</span> <span class="token function">mv</span> /path/to/ssl/whoami.example.com.* ./ssl\n</code></pre></div><p>修改静态配置：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n\t<span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n\t  <span class="token comment"># 忽略其他</span>\n\t\t<span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n\t\t\t<span class="token punctuation">-</span> ./ssl/<span class="token punctuation">:</span>/data/ssl/<span class="token punctuation">:</span>ro\n\t<span class="token key atrule">whoami</span><span class="token punctuation">:</span>\n    <span class="token comment"># 忽略其他</span>\n\t\t<span class="token key atrule">labels</span><span class="token punctuation">:</span>\n      <span class="token comment"># https entrypoints</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.entrypoints=websecure&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.tls=true&quot;</span>\n</code></pre></div><p>修改动态配置：</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># config/tls.toml</span>\n<span class="token punctuation">[</span><span class="token table class-name">tls</span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token table class-name">tls.options.default</span><span class="token punctuation">]</span>\n<span class="token key property">minVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS12&quot;</span>\n<span class="token key property">maxVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS12&quot;</span>\n<span class="token punctuation">[</span><span class="token table class-name">tls.options.test-tls13</span><span class="token punctuation">]</span>\n<span class="token key property">minVersion</span> <span class="token punctuation">=</span> <span class="token string">&quot;VersionTLS13&quot;</span>\n<span class="token key property">cipherSuites</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>\n  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">tls.certificates</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n<span class="token key property">certFile</span> <span class="token punctuation">=</span> <span class="token string">&quot;/data/ssl/whoami.example.com.crt&quot;</span>\n<span class="token key property">keyFile</span> <span class="token punctuation">=</span> <span class="token string">&quot;/data/ssl/whoami.example.com.key&quot;</span>\n</code></pre></div></li><li><p>自动获取证书</p><p>创建文件并赋权：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">touch</span> acme.json\n<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> acme.json\n</code></pre></div><p>修改静态配置文件：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n  \t<span class="token key atrule">command</span><span class="token punctuation">:</span>\n  \t\t<span class="token comment"># tls</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.email=acme@example.com&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.storage=acme.json&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.keyType=EC384&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n    \t<span class="token comment"># dashboard https</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=websecure&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.service=dashboard@internal&quot;</span>\n      <span class="token comment"># dashboard api</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=websecure&quot;</span>\n</code></pre></div><p>重启服务后查看网页发现 <code>https</code> 已生效，且 <code>acme.json</code> 已被写入配置。</p></li><li><p>针对单个服务</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n  \t<span class="token comment"># 省略其他</span>\n  \t<span class="token key atrule">command</span><span class="token punctuation">:</span>\n  \t\t<span class="token comment"># 移除</span>\n     <span class="token comment"># - &quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n    \t<span class="token comment"># 增加</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.tls.certresolver=letsencrypt&quot;</span>\n</code></pre></div></li></ol><h3 id="_3-重定向" tabindex="-1"><a class="header-anchor" href="#_3-重定向" aria-hidden="true">#</a> 3. 重定向</h3><p>添加中间件：</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="token comment"># config/default.toml</span>\n<span class="token comment"># tricks 实现，提供 HTTP 默认转发 HTTPS</span>\n<span class="token comment"># https://github.com/containous/traefik/issues/4863#issuecomment-491093096</span>\n<span class="token punctuation">[</span><span class="token table class-name">http.services.noop.LoadBalancer</span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">http.services.noop.LoadBalancer.servers</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span> <span class="token comment"># or url = &quot;localhost&quot;</span>\n\n<span class="token punctuation">[</span><span class="token table class-name">http.routers.https-redirect</span><span class="token punctuation">]</span>\n<span class="token key property">entryPoints</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">]</span>\n<span class="token key property">rule</span> <span class="token punctuation">=</span> <span class="token string">&quot;HostRegexp(`{any:.*}`)&quot;</span>\n<span class="token key property">middlewares</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;https-redirect&quot;</span><span class="token punctuation">]</span>\n<span class="token key property">service</span> <span class="token punctuation">=</span> <span class="token string">&quot;noop&quot;</span>\n\n<span class="token punctuation">[</span><span class="token table class-name">http.middlewares.https-redirect.redirectScheme</span><span class="token punctuation">]</span>\n<span class="token key property">scheme</span> <span class="token punctuation">=</span> <span class="token string">&quot;https&quot;</span>\n</code></pre></div><p>使用：</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n  \t<span class="token comment"># 省略其他</span>\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n    \t<span class="token comment"># 增加</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dash-default.middlewares=https-redirect@file&quot;</span>\n</code></pre></div><h3 id="_4-最终配置" tabindex="-1"><a class="header-anchor" href="#_4-最终配置" aria-hidden="true">#</a> 4. 最终配置</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> traefik\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.4.8\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>\n      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>\n    <span class="token key atrule">networks</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> traefik\n    <span class="token key atrule">command</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--global.checkNewVersion=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--global.sendAnonymousUsage=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--ping=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--log.level=warn&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--log.format=common&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--accesslog=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--api=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--api.insecure=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.email=acme@example.com&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.storage=acme.json&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.keyType=EC384&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--certificatesresolvers.letsencrypt.acme.httpChallenge.entryPoint=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.web.address=:80&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entryPoints.websecure.address=:443&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.tls.certResolver=letsencrypt&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--entrypoints.websecure.http.middlewares=gzip@file&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.watch=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.exposedbydefault=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.endpoint=unix:///var/run/docker.sock&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.swarmMode=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.useBindPortIP=false&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.docker.network=traefik&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.watch=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.directory=/etc/traefik/config&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;--providers.file.debugloggeneratedtemplate=true&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> ./config/<span class="token punctuation">:</span>/etc/traefik/config/<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> ./ssl/<span class="token punctuation">:</span>/data/ssl/<span class="token punctuation">:</span>ro\n      <span class="token punctuation">-</span> ./acme.json/<span class="token punctuation">:</span>/acme.json<span class="token punctuation">:</span>rw\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.middlewares=https-redirect@file&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.entrypoints=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-default.rule=Host(`traefik.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.entrypoints=websecure&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.rule=Host(`traefik.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.service=dashboard@internal&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-secure.middlewares=default-auth-user@file&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.entrypoints=websecure&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.rule=Host(`traefik.example.com`) &amp;&amp; PathPrefix(`/api`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.service=api@internal&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.traefik-dashboard-api.middlewares=default-auth-user@file&quot;</span>\n    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>\n      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wget -q --spider --proxy off localhost:8080/ping || exit 1&quot;</span><span class="token punctuation">]</span>\n      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 3s\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s\n    <span class="token key atrule">logging</span><span class="token punctuation">:</span> \n      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>\n      <span class="token key atrule">options</span><span class="token punctuation">:</span> \n        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;1m&quot;</span>\n\n  <span class="token key atrule">whoami</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> whoami\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik/whoami\n    <span class="token key atrule">networks</span><span class="token punctuation">:</span> \n      <span class="token punctuation">-</span> traefik\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">labels</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.enable=true&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.docker.network=traefik&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.middlewares=https-redirect@file&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.entrypoints=web&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami.rule=Host(`whoami.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.entrypoints=websecure&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.rule=Host(`whoami.example.com`)&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;traefik.http.routers.whoami-secure.middlewares=default-auth-user@file&quot;</span>\n\n<span class="token comment"># docker network create traefik</span>\n<span class="token key atrule">networks</span><span class="token punctuation">:</span> \n  <span class="token key atrule">traefik</span><span class="token punctuation">:</span>\n    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',15),w={href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"},v=p("Traefik"),x={href:"https://doc.traefik.io/traefik/reference/static-configuration/overview/",target:"_blank",rel:"noopener noreferrer"},_=p("Traefik 配置"),H={href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"},S=p("toml"),T={href:"https://soulteary.com/tags/traefik.html",target:"_blank",rel:"noopener noreferrer"},E=p("苏洋 Tag#Traefik");c.render=function(p,o){const c=n("OutboundLink");return s(),a(e,null,[u,l,r,t("img",{src:p.$withBase("/backend/traefik-architecture-overview.png"),alt:"https://traefik.tech/assets/img/architecture-overview.png"},null,8,["src"]),i,t("p",null,[k,t("a",d,[m,t(c)]),g]),t("p",null,[f,t("a",q,[h,t(c)]),y]),b,t("ol",null,[t("li",null,[t("a",w,[v,t(c)])]),t("li",null,[t("a",x,[_,t(c)])]),t("li",null,[t("a",H,[S,t(c)])]),t("li",null,[t("a",T,[E,t(c)])])])],64)};export default c;
