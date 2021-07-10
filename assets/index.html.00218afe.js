import{r as n,o as a,c as e,a as s,F as o,b as t,d as c}from"./app.b22342ed.js";const r={},p=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),t(" 介绍")],-1),d=s("p",null,"Docker 利用了 Linux 内核特性命名空间（namespace）及控制组（cgroups）等为容器提供隔离的运行环境。",-1),l=s("h2",{id:"使用脚本快速启用-docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用脚本快速启用-docker","aria-hidden":"true"},"#"),t(" 使用脚本快速启用 Docker")],-1),i=t("在过去常常"),u={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},h=t("手动安装"),k=t("，现在已经完全切换为脚本形式了："),m=c('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://get.docker.com -o get-docker.sh\n\n<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh\n<span class="token comment"># 替换源</span>\n<span class="token comment"># sudo sh get-docker.sh --mirror Aliyun</span>\n<span class="token comment"># sudo sh get-docker.sh --mirror AzureChinaCloud</span>\n</code></pre></div><p>如果担心脚本异常，可以下载并进行审核。</p><p>接着就可以开始愉快的使用了，例行习惯 Hello World：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run hello-world\n\n<span class="token comment"># 输出</span>\nHello from Docker<span class="token operator">!</span>\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n <span class="token number">1</span>. The Docker client contacted the Docker daemon.\n <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.\n    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>\n <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the\n    executable that produces the output you are currently reading.\n <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it\n    to your terminal.\n\nTo try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu <span class="token function">bash</span>\n\nShare images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:\n https://hub.docker.com/\n\nFor <span class="token function">more</span> examples and ideas, visit:\n https://docs.docker.com/get-started/\n</code></pre></div><h2 id="初始化-docker-环境" tabindex="-1"><a class="header-anchor" href="#初始化-docker-环境" aria-hidden="true">#</a> 初始化 Docker 环境</h2><h3 id="设置用户组" tabindex="-1"><a class="header-anchor" href="#设置用户组" aria-hidden="true">#</a> 设置用户组</h3><p>为了避免每次使用 Docker 都需要切换到 <code>sudo</code>，可以将 <code>docker</code> 加入当前用户。重新登录后生效。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> docker\n\n<span class="token function">sudo</span> <span class="token function">usermod</span> -aG docker <span class="token environment constant">$USER</span>\n<span class="token comment"># or</span>\n<span class="token function">sudo</span> <span class="token function">usermod</span> -aG docker USER_NAME\n</code></pre></div><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h3><p>镜像服务可用：</p>',10),g={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},b=t("阿里云镜像服务"),f={href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"},x=t("网易云镜像服务"),v=c('<p>修改本地的 <code>/etc/docker/daemon.json</code> 并修改 <code>registry-mirrors</code>，可为其配置多个避免某个挂掉：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="修改存储路径" tabindex="-1"><a class="header-anchor" href="#修改存储路径" aria-hidden="true">#</a> 修改存储路径</h3><p>通过 <code>docker info</code> 可以看到默认路径为 <code>/var/lib/docker</code>，而一般服务器会额外挂载硬盘。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 修改配置文件</span>\n<span class="token function">vim</span> /etc/docker/daemon.json\n\n<span class="token comment"># 增加</span>\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;data-root&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/path/to/docker&quot;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 重启 docker</span>\nsystemctl restart docker\n</code></pre></div><p>执行 <code>docker info</code> 进行校验。</p><h2 id="热门镜像" tabindex="-1"><a class="header-anchor" href="#热门镜像" aria-hidden="true">#</a> 热门镜像</h2><h3 id="busybox" tabindex="-1"><a class="header-anchor" href="#busybox" aria-hidden="true">#</a> Busybox</h3><p>以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># --rm 用完即删</span>\ndocker run -it --rm busybox\n</code></pre></div><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h3>',11),y=t("从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 "),D={href:"https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore",target:"_blank",rel:"noopener noreferrer"},w=t("Node Images Layers"),q=t(" 加深该概念。"),j=c('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 追加 bash，否则会直接进入 node</span>\ndocker run -it --rm node:slim <span class="token function">bash</span>\n</code></pre></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>快速测试本地打包好的静态文件。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run --rm <span class="token punctuation">\\</span>\n\t-p <span class="token number">8080</span>:80 <span class="token punctuation">\\</span>\n\t-v /dir/dist/:/usr/share/nginx/html <span class="token punctuation">\\</span>\n\tnginx\n</code></pre></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><p>指定密码。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run --rm <span class="token punctuation">\\</span>\n\t-p <span class="token number">33006</span>:3306 <span class="token punctuation">\\</span>\n\t-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mypasswd <span class="token punctuation">\\</span>\n  mysql\n</code></pre></div><h3 id="mongo" tabindex="-1"><a class="header-anchor" href="#mongo" aria-hidden="true">#</a> Mongo</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n\t-p <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>\n  --name some-mongo <span class="token punctuation">\\</span>\n  mongo --auth\n</code></pre></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>指定密码。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n\t-p <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>\n\t--name some-redis <span class="token punctuation">\\</span>\n\tredis --requirepass <span class="token string">&quot;redispwd&quot;</span>\n</code></pre></div><h2 id="移除-docker" tabindex="-1"><a class="header-anchor" href="#移除-docker" aria-hidden="true">#</a> 移除 Docker</h2><p>如果在之前修改了存储路径，则根据当前情况进行修改。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io\n<span class="token comment"># CentOS</span>\n<span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io\n\n<span class="token comment"># 还有 images、containers、volumes、and configurations</span>\n<span class="token function">sudo</span> <span class="token function">rm</span> -rf /var/lib/docker\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',16),S={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},_=t("Docker"),T={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},L=t("Docker Commands"),O=s("li",null,"《Docker 技术入门与实战（第三版）》",-1),R=s("li",null,"《自己动手写 Docker》",-1);r.render=function(t,c){const r=n("OutboundLink");return a(),e(o,null,[p,d,l,s("p",null,[i,s("a",u,[h,s(r)]),k]),m,s("ol",null,[s("li",null,[s("a",g,[b,s(r)])]),s("li",null,[s("a",f,[x,s(r)])])]),v,s("p",null,[y,s("a",D,[w,s(r)]),q]),j,s("ol",null,[s("li",null,[s("a",S,[_,s(r)])]),s("li",null,[s("a",T,[L,s(r)])]),O,R])],64)};export default r;
